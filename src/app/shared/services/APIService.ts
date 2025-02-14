import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Map } from 'immutable';
import { ApplicationEventsEnum } from '@app/shared/constants/ApplicationEventsEnum';
import { DefaultAPIEndpointOptions } from '@app/shared/constants/DefaultAPIEndpointOptions';
import { APIEndpointConfig } from '@app/shared/interfaces/APIEndpointConfig';
import { EventService } from '@app/shared/services/EventService';
import { Inject } from '../decorators/Inject';
import { Injectable } from '../decorators/Injectable';
import { buildUrl } from '../lib/api/buildUrl';
import { cleanPath } from '../lib/strings/cleanPath';
import { fromApiPropertiesObject } from '../lib/utils/fromApiPropertiesObject';
import { toApiPropertiesObject } from '../lib/utils/toApiPropertiesObject';
import { AuthenticationService } from './AuthenticationService';

@Injectable('APIService')
export class APIService {
    constructor(
        @Inject(AuthenticationService) private authenticationService: AuthenticationService,
        @Inject(EventService) private eventService: EventService,
    ) {}

    public attach() {
        Axios.interceptors.request.use(this.requestInterceptor.bind(this));
        Axios.interceptors.response.use(this.responseInterceptor.bind(this), this.responseErrorInterceptor.bind(this));
    }

    /**
     * Create an axios instance configured to send requests to /api/{path}
     * @example
     * ```
     * const api = app(APIService);
     * const users$ = api.createEndpoint('users');
     * ...
     * users$.get('').then(...);
     * ```
     * @param path
     * @param endpointConfig
     */
    public createEndpoint(path: string, endpointConfig?: APIEndpointConfig): AxiosInstance {
        const isExternal = path.startsWith('http');
        const { version, ...config } = {
            ...DefaultAPIEndpointOptions,
            ...endpointConfig,
        };

        const path$ = path.replace(/^\/?api/i, '').replace(/^\//g, '');

        return this.createAxios({
            ...config,
            baseURL: isExternal ? path$ : `/api/${version}/${path$}`,
        });
    }

    public mergeConfig(base?: AxiosRequestConfig, ...partial: (AxiosRequestConfig | undefined)[]) {
        const base$ = Map(base ?? {});

        return partial.reduce((target, partialConfig) => target.mergeDeep(Map(partialConfig ?? {})), base$).toJS();
    }

    public async download(url: string, filename?: string, config?: AxiosRequestConfig) {
        const { data } = await Axios.get(
            url,
            this.mergeConfig(config, {
                responseType: 'blob',
            }),
        );

        const downloadHref = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadHref;
        link.download = filename ?? '';
        link.target = '_blank';
        link.rel = 'noopener';
        link.click();
        link.remove();

        URL.revokeObjectURL(downloadHref);
    }

    /**
     * Create an axios instance configured to send requests to /api/{path}
     * @example
     * ```
     * const api = app(APIService);
     * const users$ = api.createAxios({ baseURL: '/api/users' });
     * ...
     * users$.get('').then(...);
     * ```
     * @param config
     */
    private createAxios(config?: AxiosRequestConfig) {
        const instance = Axios.create(config);

        instance.interceptors.request.use(this.requestInterceptor.bind(this));
        instance.interceptors.response.use(
            this.responseInterceptor.bind(this),
            this.responseErrorInterceptor.bind(this),
        );

        return instance;
    }

    /**
     *
     * @param config
     * @private
     */
    private async requestInterceptor(config: AxiosRequestConfig) {
        const accessToken = await this.authenticationService.getAccessToken();

        config.headers ??= {};
        if (this.isNotExternal(config) && accessToken && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        config.url = buildUrl(config.url ?? '', config?.params ?? {});
        config.baseURL = buildUrl(config.baseURL ?? '', config?.params ?? {});

        config.params = this.objectToSnakeCase(config.params);
        config.data = this.objectToSnakeCase(config.data);

        return config;
    }

    /**
     *
     * @param response
     * @private
     */
    private responseInterceptor(response: AxiosResponse) {
        if (response?.data?.data && Object.keys(response?.data).length === 1) {
            response.data = response.data.data;
        }

        response.data = this.objectToCamelCase(response.data);
        response.status = /\D/.test(String(response.status)) ? response.status : Number(response.status);

        if (process.env.NODE_ENV === 'development') {
            this.logResponse(response);
        }

        return response;
    }

    /**
     *
     * @param error
     * @private
     */
    private responseErrorInterceptor(error: AxiosError) {
        error.response = this.responseInterceptor(error.response!);

        const message = error.response?.data?.message || error.response?.data?.error;
        if (message) {
            error.message = message;
        }

        if (error.response?.status === 401) {
            this.eventService.emit(ApplicationEventsEnum.AuthSessionUnauthorized);
        }

        throw error;
    }

    private isNotExternal(config: AxiosRequestConfig): boolean {
        const baseURL = config.baseURL || '';
        return baseURL.startsWith('/') || baseURL.startsWith(window.location.origin);
    }

    private objectToSnakeCase(data: any) {
        return toApiPropertiesObject(data, { deep: true });
    }

    private objectToCamelCase(data: any) {
        return fromApiPropertiesObject(data, { deep: true });
    }

    private logResponse(response: AxiosResponse) {
        try {
            const url = cleanPath(`${response.config.baseURL}/${response.config.url}`);
            console.groupCollapsed(`HTTP Request: ${response.config.method?.toUpperCase()} ${url}`);

            console.groupCollapsed('Params');
            console.log(response.config.params);
            console.groupEnd();

            console.groupCollapsed('Headers');
            console.log(response.config.headers);
            console.groupEnd();

            console.groupCollapsed('Body');
            if (response.data?.data && Array.isArray(response.data?.data)) {
                console.table([response.data.meta]);
                console.table(response.data.data);
            } else {
                console.log(response.data);
            }
            console.groupEnd();

            console.groupCollapsed('Trace');
            console.trace();
            console.groupEnd();

            console.groupEnd();
        } catch (e) {
            // pass
        }
    }
}
