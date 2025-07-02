import { EmailService } from "@/infrastructure/email/EmailService";
import { ContactRepositoryMongo } from "../application/repositories/contacts/contact_repository";
import { CreateContact } from "../application/use-cases/contacts/create_contact";

const contactRepository = new ContactRepositoryMongo();
const emailService = new EmailService();

const createContact = new CreateContact(contactRepository, emailService);

export {
    createContact
}