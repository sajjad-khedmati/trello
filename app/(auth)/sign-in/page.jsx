"use client";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

import { FiGithub } from "react-icons/fi";

export default function SignIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	return (
		<form className="flex flex-col gap-2 w-full md:max-w-md md:mx-auto">
			<Input label="username" value={username} setter={setUsername} />
			<Input label="password" value={password} setter={setPassword} />
			<button type="button" className="default__button">
				Login to Account
			</button>

			<p className="mt-2 text-sm text-slate-600">
				Dont have an Account?{" "}
				<Link
					href="/sign-up"
					className="font-semibold text-blue-500 hover:underline underline-offset-2 transition"
				>
					Create Account
				</Link>
			</p>

			<div className="flex items-center gap-4 justify-between my-4">
				<hr className="flex-1" />
				<span className="text-slate-500 text-sm">or</span>
				<hr className="flex-1" />
			</div>

			<button
				type="button"
				className="flex items-center justify-center gap-2 py-2 border rounded-lg
            hover:bg-gray-800 hover:text-white transition"
			>
				<FiGithub className="text-xl" />
				<span className="text-md">login with GitHub</span>
			</button>
		</form>
	);
}
