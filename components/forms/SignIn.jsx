"use client";
import Input from "@/components/Input";
import { useFormik } from "formik";

import { signIn } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FiGithub } from "react-icons/fi";
import { toast } from "react-toastify";

import * as YUP from "yup";

export default function SignInForm({ params }) {
	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: YUP.object({
			username: YUP.string()
				.min(4, "username at least 4 charachter")
				.required("required"),
			password: YUP.string()
				.required("required")
				.min(6, "password at least 6 charachter"),
		}),
		onSubmit: async (values) => {
			const response = await signIn("credentials", {
				...values,
				redirect: false,
			});

			if (!response.error) {
				router.replace("/");
			} else {
				toast.error(response.error);
			}
		},
	});

	const router = useRouter();

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-2 w-full md:max-w-md md:mx-auto"
		>
			<Input
				label="username"
				value={formik.values.username}
				options={formik.getFieldProps("username")}
				formik={formik}
			/>
			<Input
				label="password"
				value={formik.values.password}
				options={formik.getFieldProps("password")}
				formik={formik}
			/>
			<button type="submit" className="default__button">
				Login to Account
			</button>

			<p className="mt-2 text-sm text-slate-600">
				Dont have an Account?{" "}
				<Link
					href="/sign-up"
					className="ml-1 font-semibold text-blue-500 hover:underline underline-offset-2 transition"
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
				onClick={() => signIn("github")}
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
