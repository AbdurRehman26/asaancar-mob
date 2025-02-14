import { NotificationTypeEnum } from '../constants/NotificationTypeEnum';
import { sha256 } from '@app/shared/lib/hash';

export class NotificationItem {
    public wait!: boolean;

    constructor(
        public type: NotificationTypeEnum,
        public message: string,
        public title: string = '',
        public key: string = '',
    ) {}

    checksum() {
        if (!this.key) {
            this.key = sha256(`${this.type}:${this.title}-${this.message}`);
        }
        return this;
    }

    withWait() {
        this.wait = true;
        return this;
    }
}
