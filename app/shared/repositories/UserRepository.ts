import { AxiosRequestConfig } from 'axios';
import { Injectable } from '@app/shared/decorators/Injectable';
import { Repository } from '@app/shared/repositories/Repository';
import {UserEntity} from "@app/shared/entities/UserEntity";

@Injectable('UserRepository')
export class UserRepository extends Repository<UserEntity> {
    readonly endpointPath: string = '';
    readonly model = UserEntity;

    public async updateUserProfile(input: any) {
        const { data } = await this.endpoint.put('/customer/profile', input);

        return this.toEntity(data);
    }

    public async confirmPasswordWithAGS(input: any) {
        const { data } = await this.endpoint.post('/auth/login/ags', input);

        return data;
    }

    public async updateUserPassword(input: any) {
        const { data } = await this.endpoint.post('auth/password/change', input);

        return data;
    }

    async deactivateProfile(): Promise<{ success: boolean }> {
        const { data } = await this.endpoint.post('/customer/profile/deactivate');

        return data;
    }

    async deleteProfile(): Promise<{ success: boolean }> {
        const { data } = await this.endpoint.post('/customer/profile/delete');

        return data;
    }
}
