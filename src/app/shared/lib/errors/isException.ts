import { Exception } from '@app/shared/exceptions/Exception';

export function isException(e: any): e is Exception {
    return (e?.isException && e?.message) || e instanceof Exception;
}
