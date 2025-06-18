import mongoose, { Schema, models, model } from 'mongoose';


export interface IContact extends mongoose.Document {
  name: string;
  phone: string;
  email: string;
  subject?: string;
  message: string;
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  contactPreference?: string;
  createdAt: Date;
}

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, default: '' },
    message: { type: String, required: true },
    vehicleBrand: { type: String, default: '' },
    vehicleModel: { type: String, default: '' },
    vehicleYear: { type: String, default: '' },
    contactPreference: { type: String, default: '' },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Previne erro de modelo já existente em ambiente serverless
const Contact = models.Contact || model('Contact', contactSchema);

export default Contact;
