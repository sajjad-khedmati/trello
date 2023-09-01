"use client";
import Input from "@/components/Input";
import { signUp } from "@/lib/actions/user.actions";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import * as YUP from "yup";

export default function SignUpForm() {
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: YUP.object({
			username: YUP.string()
				.min(4, "username at least 4 charachter")
				.required("required"),
			password: YUP.string()
				.required("required")
				.min(6, "password at least 6 charachter"),
			confirmPassword: YUP.string()
				.oneOf([YUP.ref("password"), null], "Passwords must match")
				.required("required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				await signUp({
					username: values.username,
					password: values.password,
					confirmPassword: values.confirmPassword,
				});

				toast.success(
					`Congratulations ${values.username} - your account was created successfully`,
				);
				resetForm();
				router.replace("/sign-in");
			} catch (error) {
				toast.error(`${error.message.slice(0, 20)} ...`);
			}
		},
	});

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
			<Input
				label="confirmPassword"
				value={formik.values.confirmPassword}
				options={formik.getFieldProps("confirmPassword")}
				formik={formik}
			/>
			<button type="submit" className="default__button">
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
