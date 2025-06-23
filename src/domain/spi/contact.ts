import { ContactRepositoryMongo } from "../application/repositories/contacts/contact_interface";
import { CreateContact } from "../application/use-cases/contacts/create_contact";

const contactRepository = new ContactRepositoryMongo();

const createContact = new CreateContact(contactRepository);

export {
    createContact
}