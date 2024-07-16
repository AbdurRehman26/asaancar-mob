import { nameInitials } from '@app/shared/lib/strings/initials';
import { DateField } from '../decorators/DateField';
import { Entity } from './Entity';

export class AuthenticatedUserEntity extends Entity {
    public username!: string;
    public email!: string;
    public phone!: string;
    public firstName!: string;
    public lastName!: string;
    public fullName!: string;

    @DateField()
    public emailVerifiedAt!: Date;

    public getFullName() {
        return this.fullName ?? `${this.firstName ?? ''} ${this.lastName ?? ''}`.trim();
    }

    public getInitials() {
        return nameInitials(this.getFullName());
    }

    public capitalizeFirstLetter(data: string) {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }
}
