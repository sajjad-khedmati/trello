import Image from "next/image";

export const metadata = {
	title: "Sign Up to Trello",
};

export default function layout({ children }) {
	return (
		<div className="flex flex-col justify-between h-screen overflow-hidden gap-12 px-8 py-4">
			<header className="w-full">
				<nav className="flex flex-col items-center gap-2">
					<Image
						src="./trello-full-icon.svg"
						alt="trello icon"
						width={180}
						height={70}
						objectFit="cover"
						placeholder="blur"
						blurDataURL="data:image/svg"
					/>

					<h1 className="text-center text-slate-600 font-semibold text-lg">
						Sign Up to Trello
					</h1>
				</nav>
			</header>
			<main className="flex-1">{children}</main>
			<footer className="w-full flex justify-center items-center">
				<p className="text-xs text-slate-400">
					sajjad khedmati - alright reserved &copy;
				</p>
			</footer>
		</div>
	);
}
