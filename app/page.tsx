import Link from "next/link";

export default function IndexPage() {
	return (
		<>
			<section>
				<Link href="/classic">found link</Link>
				<Link href="/asdasd">not-found link</Link>
			</section>
		</>
	);
}
