import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
});

export default mongoose.model<IContact>('Contact', ContactSchema);
