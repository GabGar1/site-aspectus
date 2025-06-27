import { ICreateContact } from "../application/dtos/ICreateContact";

export interface IEmailService {
  send(contact: ICreateContact): Promise<void>;
}
