import { AxiosError } from 'axios';
import { Exception } from '@app/shared/exceptions/Exception';
import { ValidationException } from '@app/shared/exceptions/ValidationException';
import { isAxiosError } from '@app/shared/lib/api/isAxiosError';
import { isException } from '@app/shared/lib/errors/isException';

export function isErrorBagResponse(error: Exception | AxiosError) {
    if (isAxiosError(error)) {
        const { data } = error.response || {};
        return !!(data.errors && data.message);
    }

    return isException(error) && error instanceof ValidationException;
}
