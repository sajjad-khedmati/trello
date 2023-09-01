import Image from "next/image";

export const metadata = {
	title: "Log In to Trello",
};

export default function layout({ children }) {
	return (
		<div className="flex flex-col justify-between h-screen overflow-hidden gap-12 px-8 py-4">
			<header className="w-full">
				<nav className="flex flex-col items-center gap-2">
					<div className="w-52 h-20 relative">
						<Image
							src="./trello-full-icon.svg"
							alt="trello icon"
							layout="fill"
							objectFit="cover"
							placeholder="blur"
							blurDataURL="/"
						/>
					</div>

					<h1 className="text-center text-slate-600 font-semibold text-lg">
						Log in to Trello
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
