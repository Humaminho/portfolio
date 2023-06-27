import FooterTitle from './footer-title';
import Form from './form';
import FooterLink from './footer-link';
import FooterAnchor from './footer-anchor';
import FeedbackMsg from './feedback-msg';

export default function Footer() {
	return (
		<footer
			id="contact"
			className=" bg-footer text-d-text md:grid md:grid-cols-2 relative z-0"
		>
			<div className="flex flex-col gap-3 border-t border-d-text  px-7 sm:px-10 md:px-7 lg:px-16 py-10 order-2 grow md:border-l">
				<FooterTitle text="CONTACT ME" />
				<Form />
			</div>
			<div className="flex flex-col border-t border-d-text  px-7  sm:px-10 md:px-7 lg:px-16 pt-10 pb-5 order-1 grow md:pb-10">
				<FooterTitle text="LINKS" />
				<nav className="flex flex-col items-start pb-6">
					<FooterLink text="HOME" href="/" />
					<FooterLink text="WORK" href="/work" />
					<FooterLink text="ABOUT" href="/about" />
				</nav>
				<FooterTitle text="SOCIALS" />
				<nav className="flex flex-col items-start pb-6">
					<FooterAnchor
						text="LINKEDIN"
						href="https://www.linkedin.com/in/houmame-kharbouch-2b0190244/"
					/>
					<FooterAnchor text="EMAIL" href="https://www.google.com" />
					<FooterAnchor
						text="GITHUB"
						href="https://github.com/humaminho"
					/>
				</nav>
				<p className="text-sm font-extralight self-center mt-auto">
					© 2023 Humam. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}
