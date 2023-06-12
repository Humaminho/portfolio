import Link from 'next/link';
import ThemeSwitch from './themeSwitch';
import Menu from './menu';
export default function Header() {
	return (
		<header className="flex justify-between items-center px-7 sm:px-10 md:px-14 lg:px-16 py-2 border-l-border border-b dark:border-d-border sticky top-0 bg-l-bg dark:bg-d-bg">
			<div className="text-3xl">H_</div>
			<nav className="hidden sm:block">
				<ul className="flex gap-14 font-semibold">
					<li>
						<Link className="text-sm" href="/work">
							WORK
						</Link>
					</li>
					<li>
						<Link className="text-sm" href="/">
							HOME
						</Link>
					</li>
					<li>
						<Link className="text-sm" href="/about">
							ABOUT
						</Link>
					</li>
				</ul>
			</nav>
			<div className="text-l-text dark:text-d-text flex gap-5 items-center">
				<ThemeSwitch />
				<Menu />
			</div>
		</header>
	);
}
