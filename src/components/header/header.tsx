import Link from 'next/link';
import ThemeSwitch from './themeSwitch';
export default function Header() {
	return (
		<header className="flex justify-between items-center px-7 py-2 border-l-border border-b dark:border-d-border sticky top-0">
			<div className="text-3xl">H_</div>
			<nav className="hidden md:block">
				<ul className="flex gap-14 font-semibold">
					<li>
						<Link href="/work">WORK</Link>
					</li>
					<li>
						<Link href="/">HOME</Link>
					</li>
					<li>
						<Link href="/about">ABOUT</Link>
					</li>
				</ul>
			</nav>
			<div className="text-l-text dark:text-d-text flex gap-5 items-center">
				<ThemeSwitch />
				<div className="md:hidden">
					<svg
						width="20"
						height="16"
						viewBox="0 0 20 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 0.5H20V3H0V0.5ZM0 6.75H20V9.25H0V6.75ZM0 13H20V15.5H0V13Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</div>
		</header>
	);
}
