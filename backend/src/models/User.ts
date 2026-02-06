import mongoose, { Schema, Types } from "mongoose";

export type UserRole = "Admin" | "Accountant" | "Staff";

export interface UserDocument {
  _id: Types.ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  roles: UserRole[];
  companyIds: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    roles: { type: [String], enum: ["Admin", "Accountant", "Staff"], default: ["Staff"] },
    companyIds: [{ type: Schema.Types.ObjectId, ref: "Company" }]
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>("User", userSchema);
