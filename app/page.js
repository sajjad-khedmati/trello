import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/sign-in");
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-center text-6xl font-bold">
			Trello Application
		</main>
	);
}
