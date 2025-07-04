import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  sender: string;
  recipient: string;
  content: string;
  timestamp: Date;
}

const MessageSchema = new Schema<IMessage>({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IMessage>('Message', MessageSchema);
