import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  title: string;
  status: string;
  contact: mongoose.Types.ObjectId;
}

const LeadSchema = new Schema<ILead>({
  title: { type: String, required: true },
  status: { type: String, required: true },
  contact: { type: Schema.Types.ObjectId, ref: 'Contact', required: true },
});

export default mongoose.model<ILead>('Lead', LeadSchema);
