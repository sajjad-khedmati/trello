"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Avatar from "./Avatar";

export default function Navbar() {
	const { data, status } = useSession();
	return (
		<header className="custom__container sticy top-0 left-0 w-full py-4">
			<nav className="w-full flex items-center justify-between">
				<div className="w-24 h-12 md:w-28 relative">
					<Image src="/trello-full-icon.svg" alt="logo" fill />
				</div>

				{data && <Avatar user={data?.user} stauts={status} />}
			</nav>
		</header>
	);
}
