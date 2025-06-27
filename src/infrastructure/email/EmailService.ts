import { ICreateContact } from "@/domain/application/dtos/ICreateContact";
import { sendEmail } from "./sendEmail";  // importe sua função de envio real
import { IEmailService } from "@/domain/services/IEmailService";

export class EmailService implements IEmailService {
  async send(contact: ICreateContact): Promise<void> {
    await sendEmail(contact);
  }
}
