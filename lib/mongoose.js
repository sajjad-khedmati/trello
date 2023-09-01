import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);
	if (!process.env.MONGODB_URL) return console.log("mongoDB URL not Founded!");
	if (isConnected) return console.log("already connected to DB");

	try {
		await mongoose.connect(process.env.MONGODB_URL);
		isConnected = true;

		console.log("connected to DB");
	} catch (error) {
		console.log(error);
	}
};
