import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  dueDate: Date;
  completed: boolean;
  assignedTo: string;
}

const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  assignedTo: { type: String, required: true },
});

export default mongoose.model<ITask>('Task', TaskSchema);
