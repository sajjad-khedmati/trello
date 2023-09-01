import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: String,
	email: String,
	image: String,
	boards: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "board",
		},
	],
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
