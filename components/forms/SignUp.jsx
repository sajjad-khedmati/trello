"use client";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

export default function SignUpForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	return (
		<form className="flex flex-col gap-2 w-full md:max-w-md md:mx-auto">
			<Input label="username" value={username} setter={setUsername} />
			<Input label="password" value={password} setter={setPassword} />
			<Input
				label="confirm password"
				value={confirmPassword}
				setter={setConfirmPassword}
			/>
			<button type="button" className="default__button">
				Create Account
			</button>

			<p className="mt-2 text-sm text-slate-600">
				already have an Account?{" "}
				<Link
					href="/sign-in"
					className="ml-1 font-semibold text-blue-500 hover:underline underline-offset-2 transition"
				>
					Login
				</Link>
			</p>
		</form>
	);
}
