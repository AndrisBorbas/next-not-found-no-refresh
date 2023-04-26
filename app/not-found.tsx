import Link from "next/link";

export default function NotFound() {
	return (
		<section className="mx-auto text-center">
			not found page
			<Link href="/">Return to home</Link>
		</section>
	);
}
