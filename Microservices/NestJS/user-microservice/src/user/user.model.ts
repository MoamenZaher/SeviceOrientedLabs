// src/items/user.model.ts
import { Schema,Document,model } from 'mongoose';

export interface User extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly user_name: string;
  readonly email?: string;
  readonly password: string;
  readonly createdAt?: Date;
}

export const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = model<User>('UserSchema', UserSchema);
