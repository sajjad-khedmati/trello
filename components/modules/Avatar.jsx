"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Avatar({ user, status }) {
	const [openOption, setOpenOption] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		const handleOutSideClick = (event) => {
			if (!ref.current?.contains(event.target)) {
				setOpenOption(false);
			}
		};

		window.addEventListener("mousedown", handleOutSideClick);

		return () => {
			window.removeEventListener("mousedown", handleOutSideClick);
		};
	}, [ref]);

	return (
		<div className="relative">
			{status === "loading" ? (
				<p className="text-[10px]">detecting user...</p>
			) : (
				<div
					onClick={() => setOpenOption((prev) => !prev)}
					className={`w-10 h-10 rounded-full cursor-pointer ${
						!user?.image && "bg-blue-400 shadow-xl shadow-blue-200/70"
					} overflow-hidden flex items-center justify-center`}
				>
					{user?.image ? (
						<Image src={user?.image} alt="avatar" width={40} height={40} />
					) : (
						<span className="text-white uppercase text-lg">
							{user?.username.charAt(0) || user?.name.charAt(0)}
						</span>
					)}
				</div>
			)}

			{openOption && (
				<div
					ref={ref}
					className="absolute top-12 inset-x-1/2 -translate-x-1/2 
             w-52 max-w-min py-1 px-1 shadow-lg shadow-gray-200 z-50 rounded-xl flex flex-col text-xs"
				>
					<span className="select-none text-center px-4 w-32 min-w-min">
						{user?.username || user?.name}
					</span>
					<hr className="mx-2 my-1" />

					<div className="flex flex-col space-y-1">
						<Link
							href="/profile"
							className="border text-center px-2 py-1 rounded-lg hover:bg-slate-50 hover:border-slate-50 transition-all duration-300"
						>
							Profile
						</Link>
						<button
							onClick={() => signOut()}
							className="border px-2 py-1 rounded-lg hover:bg-slate-50 hover:border-slate-50 transition-all duration-300"
						>
							SignOut
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
