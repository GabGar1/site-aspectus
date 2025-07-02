export interface ICreateContact {
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
