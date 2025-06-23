import { Contact, IContact } from "@/domain/entities/contact";
import { IContactRepository } from "../../repositories/contacts/contact_interface";
import { err, ok, Result } from "neverthrow";

export interface ICreateContact extends IContact {}

export interface ICreateContactResult {
    contact: Contact;
}

export class CreateContact {
    private contact_repo: IContactRepository;

    constructor(contact_repo: IContactRepository) {
        this.contact_repo = contact_repo
    }

    public async execute(
        params: ICreateContact,
    ): Promise<Result<ICreateContactResult, Error>> {
        try {
            const new_contact = Contact.make_contact(params);

            const contact_created = await this.contact_repo.create(new_contact);

            if(contact_created.isErr()) {
                return err(contact_created.error)
            }

            const contact = contact_created.value;

            return ok({contact}) 
        } catch (error) {
            return err(new Error('error'))
        }
    }
}