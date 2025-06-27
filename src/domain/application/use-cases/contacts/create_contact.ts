import { Contact } from "@/domain/entities/contact";
import { IContactRepository } from "../../repositories/contacts/contact_repository";
import { err, ok, Result } from "neverthrow";
import { IEmailService } from "@/domain/services/IEmailService";
import { ICreateContact } from "../../dtos/ICreateContact";

export interface ICreateContactResult {
    contact: Contact;
}

export class CreateContact {
    private contact_repo: IContactRepository;
    private email_service: IEmailService;

    constructor(contact_repo: IContactRepository, email_service: IEmailService) {
        this.contact_repo = contact_repo
        this.email_service = email_service
    }

    public async execute(
        params: ICreateContact,
    ): Promise<Result<ICreateContactResult, Error>> {
        try {
            const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
            const new_contact = Contact.make_contact({
                ...params,
                status: true,
                createdAt: now,
                updatedAt: "",
                deletedAt: ""
            });

            const contact_created = await this.contact_repo.create(new_contact);

            if (contact_created.isErr()) {
                return err(contact_created.error)
            }

            const contact = contact_created.value;

            try {
                void this.email_service.send(params).catch((err) => {
                    console.error("Erro ao enviar email:", err);
                });
            } catch (error) {
                console.error("Erro ao enviar email:", error);
            }

            return ok({ contact })
        } catch (error) {
            console.error(error)
            return err(new Error('error'))
        }
    }
}