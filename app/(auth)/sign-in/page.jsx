import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import SignInForm from "@/components/forms/SignIn";
import { redirect } from "next/navigation";

export default async function SignIn() {
	const session = await getServerSession(authOptions);
	if (session) redirect("/");

	return <SignInForm />;
}
