import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { User, UserRole } from "../models/User.js";

export const register = async (req: Request, res: Response) => {
  const { name, email, password, roles } = req.body as {
    name: string;
    email: string;
    password: string;
    roles?: UserRole[];
  };

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    passwordHash,
    roles: roles?.length ? roles : ["Admin"],
    companyIds: []
  });

  return res.status(201).json({ id: user._id, email: user.email });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user._id.toString(), roles: user.roles, companyIds: user.companyIds.map(String) },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );

  return res.json({ token });
};
