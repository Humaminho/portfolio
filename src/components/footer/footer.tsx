'use client';
import Link from 'next/link';
import FooterTitle from './footerTitle';

export default function Footer() {
	return (
		<footer
			id="contact"
			className=" bg-footer text-d-text md:grid md:grid-cols-2 "
		>
			<div className="flex flex-col gap-3 border-t border-d-text  px-7 sm:px-10 md:px-7 lg:px-16 py-10 order-2 grow md:border-l">
				<FooterTitle text="CONTACT ME" />
				<form className="flex flex-col gap-4">
					<input
						type="text"
						id="contact-input"
						placeholder="Name"
						className="w-full bg-transparent border border-d-text py-4 px-6 rounded-md font-light outline-0 focus:border-d-emph"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full bg-transparent border border-d-text py-4 px-6 rounded-md font-light outline-0 focus:border-d-emph"
					/>
					<textarea
						placeholder="Message"
						cols={30}
						rows={5}
						className="w-full bg-transparent border border-d-text py-4 px-6 rounded-md font-light outline-0 focus:border-d-emph resize-none"
					></textarea>
				</form>
				<button className="self-end flex gap-3 items-center hover:animate-pulse group hover:text-d-emph">
					<p className="">SEND</p>
					<svg
						width="16"
						height="12"
						viewBox="0 0 16 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="group-hover:-rotate-45 transition-transform duration-300"
					>
						<path
							d="M15.8045 6.42448L9.80468 11.8242C9.67959 11.9368 9.50993 12 9.33303 12C9.15612 12 8.98647 11.9368 8.86138 11.8242C8.73629 11.7116 8.66601 11.5589 8.66601 11.3997C8.66601 11.2405 8.73629 11.0878 8.86138 10.9752L13.7237 6.59997H0.666645C0.48984 6.59997 0.320276 6.53676 0.195256 6.42424C0.0702357 6.31172 0 6.15912 0 6C0 5.84088 0.0702357 5.68827 0.195256 5.57576C0.320276 5.46324 0.48984 5.40003 0.666645 5.40003H13.7237L8.86138 1.02478C8.73629 0.912198 8.66601 0.75951 8.66601 0.6003C8.66601 0.441091 8.73629 0.288402 8.86138 0.175824C8.98647 0.0632457 9.15612 0 9.33303 0C9.50993 0 9.67959 0.0632457 9.80468 0.175824L15.8045 5.57552C15.8665 5.63124 15.9156 5.69741 15.9492 5.77025C15.9827 5.84308 16 5.92115 16 6C16 6.07884 15.9827 6.15692 15.9492 6.22975C15.9156 6.30259 15.8665 6.36876 15.8045 6.42448Z"
							fill="currentColor"
						/>
					</svg>
				</button>
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
