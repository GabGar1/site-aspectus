
import { Contact, IContact } from "@/domain/entities/contact";
import { IRepository } from "../IRepository";
import { err, ok, Result } from "neverthrow";
import { ContactModel } from "@/lib/models/contact";

interface IContactRepositoryFind {
    search?: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IContactRepository extends IRepository<Contact, Error, IContactRepositoryFind> {

}

export class ContactRepositoryMongo implements IRepository<Contact, Error, IContactRepositoryFind> {

    async create(entity: Contact): Promise<Result<Contact, Error>> {
        try {
            const newContact = await ContactModel.create(entity);
            const contact = Contact.make_contact(newContact.toObject() as IContact);
            return ok(contact)
        } catch (error) {
            return err(error as Error)
        }
    }

    async update(entity: Contact): Promise<Result<Contact, Error>> {
        try {
            const existsContact = await ContactModel.findById(entity.id);

            if (!existsContact) {
                return err(new Error('Contato não encontrado.'))
            }

            existsContact.name = entity.name;
            existsContact.phone = entity.phone;
            existsContact.email = entity.email;
            existsContact.subject = entity.subject;
            existsContact.message = entity.message;
            existsContact.vehicleBrand = entity.vehicleBrand;
            existsContact.vehicleModel = entity.vehicleModel;
            existsContact.vehicleYear = entity.vehicleYear;
            existsContact.contactPreference = entity.contactPreference;
            existsContact.updatedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

            const updatedContact = await existsContact.save();

            const contact = Contact.make_contact(updatedContact.toObject());

            return ok(contact)
        } catch (error) {
            console.error('Erro ao atualizar contato: ', error);
            return err(error as Error)
        }
    }

    async delete(id: string): Promise<Result<void, Error>> {
        try {
            const contact = await ContactModel.findById(id)

            if (!contact) {
                return err(new Error('Contato não encontrado'))
            }

            contact.status = false;
            contact.deletedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

            await contact.save();

            return ok(void 0)
        } catch (error) {
            console.error('Erro ao deletar contato: ', error);
            return err(error as Error)
        }
    }

    async find_by_id(id: string): Promise<Result<Contact | null, Error>> {
        try {
            const contact = await ContactModel.findOne({ _id: id, status: true });

            if (!contact) {
                return ok(null)
            }

            const entity = Contact.make_contact(contact.toObject());
            return ok(entity)
        } catch (error) {
            console.error('Erro no find_by_id Contact:', error);
            return err(error as Error);
        }
    }

    async find(params: IContactRepositoryFind): Promise<Result<Contact[], Error>> {
        try {
            const { search } = params;

            const query: Record<string, unknown> = { status: true };

            if (search) {
                query.name = { $regex: search, $options: 'i' };
            }

            const contacts = await ContactModel.find(query).sort({ createdAt: -1 })

            const entities = contacts.map((contact) => Contact.make_contact(contact.toObject()));

            return ok(entities);
        } catch (error) {
            console.error('Erro no find Contact:', error);
            return err(error as Error);
        }
    }
}