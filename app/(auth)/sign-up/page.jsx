import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignUpForm from "@/components/forms/SignUp";
import { redirect } from "next/navigation";

export default async function SignUp() {
	const session = await getServerSession(authOptions);
	if (session) redirect("/");
	return <SignUpForm />;
}
