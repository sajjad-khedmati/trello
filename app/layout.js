import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

import { ToastContainer } from "react-toastify";

export const metadata = {
	title: "Trello",
	description: "Simple Trello Cloning - task manager for you",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				{children}
				<ToastContainer />
			</body>
		</html>
	);
}
