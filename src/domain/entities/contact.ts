import { Entity, IEntity } from "../core";

export interface IContact extends IEntity {
    name: string;
    phone: string;
    email: string;
    subject?: string;
    message: string;
    vehicleBrand?: string;
    vehicleModel?: string;
    vehicleYear?: string;
    contactPreference?: string;
}

export class Contact extends Entity implements IContact {
    id?: string;
    status: boolean;

    name: string;
    phone: string;
    email: string;
    subject?: string;
    message: string;
    vehicleBrand?: string;
    vehicleModel?: string;
    vehicleYear?: string;
    contactPreference?: string;

    constructor(props: IContact) {
        super({
            id: props.id,
            status: props.status,
            createdAt: props.createdAt,
            updatedAt: props.updatedAt,
            deletedAt: props.deletedAt,
        });
        this.name = props.name;
        this.phone = props.phone;
        this.email = props.email;
        this.message = props.message;
        this.vehicleBrand = props.vehicleBrand;
        this.vehicleModel = props.vehicleModel;
        this.vehicleYear = props.vehicleYear;
        this.contactPreference = props.contactPreference;
        this.status = props.status;
    }

    static make_contact(props: IContact): Contact {
        return new Contact(props)
    }

    public update_contact(props: IContact) {
        if (this.name != props.name) {
            this.name = props.name
        }

        if (this.phone != props.phone) {
            this.phone = props.phone
        }

        if (this.email != props.email) {
            this.email = props.email
        }

        if (this.message != props.message) {
            this.message = props.message
        }

        this.updatedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    }

    public delete_contact() {
        this.status = false;
        this.deletedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    }
}