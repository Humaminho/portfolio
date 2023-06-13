'use client';
import Link from 'next/link';
import FooterTitle from './footerTitle';
import Form from './Form';

export default function Footer() {
	return (
		<footer
			id="contact"
			className=" bg-footer text-d-text md:grid md:grid-cols-2 "
		>
			<div className="flex flex-col gap-3 border-t border-d-text  px-7 sm:px-10 md:px-7 lg:px-16 py-10 order-2 grow md:border-l">
				<FooterTitle text="CONTACT ME" />
				<Form />
			</div>
			<div className="flex flex-col border-t border-d-text  px-7  sm:px-10 md:px-7 lg:px-16 pt-10 pb-5 order-1 grow md:pb-10">
				<FooterTitle text="LINKS" />
				<nav className="flex flex-col items-start gap-3 pb-6">
					<Link href="/" className="hover:text-d-emph">
						HOME
					</Link>
					<Link href="/work" className="hover:text-d-emph">
						WORK
					</Link>
					<Link href="/about" className="hover:text-d-emph">
						ABOUT
					</Link>
				</nav>
				<FooterTitle text="SOCIALS" />
				<nav className="flex flex-col items-start gap-3 pb-6">
					<a
						target="_blank"
						className="hover:text-d-emph"
						href="https://github.com/humaminho"
					>
						LINKEDIN
					</a>
					<a
						target="_blank"
						className="hover:text-d-emph"
						href="https://www.google.com"
					>
						EMAIL
					</a>
					<a
						target="_blank"
						className="hover:text-d-emph"
						href="https://www.linkedin.com/in/houmame-kharbouch-2b0190244/"
					>
						GITHUB
					</a>
				</nav>
				<p className="text-sm font-extralight self-center mt-auto">
					© 2023 Humam. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}
