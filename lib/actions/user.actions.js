"use server";

import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";
import { hashPassword } from "../utils";

export const signUp = async ({ username, password, confirmPassword }) => {
	if (password !== confirmPassword)
		throw new Error("password and confirmPassword dont match");

	await connectToDB();

	const hashedPassword = await hashPassword(password);
	try {
		await User.create({ username, password: hashedPassword });
	} catch (error) {
		throw new Error(`field to create User - ${error.message}`);
	}
};
