import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import Navbar from "@/components/modules/Navbar";

export const metadata = {
	title: "Trello",
	description: "Simple Trello Cloning - task manager for you",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<NextAuthProvider>
					<div className="w-screen h-screen overflow-hidden">
						<Navbar />
						{children}
					</div>
				</NextAuthProvider>
				<ToastContainer />
			</body>
		</html>
	);
}
