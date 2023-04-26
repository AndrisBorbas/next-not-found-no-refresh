import Link from "next/link";

export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body>
				<main>
					<section>
						<Link href="/">
							<h1>Home</h1>
						</Link>

						{children}
					</section>
				</main>

				<footer>footer</footer>
			</body>
		</html>
	);
}
