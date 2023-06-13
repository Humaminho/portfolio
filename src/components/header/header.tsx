import Link from 'next/link';
import ThemeSwitch from './themeSwitch';
import Menu from './menu';
import Resume from './resume';
export default function Header() {
	return (
		<header className="flex justify-between items-center px-7 sm:px-10 md:px-14 lg:px-16 py-2 border-l-border border-b dark:border-d-border sticky top-0 bg-l-bg dark:bg-d-bg z-9000">
			<a href="http://localhost:3000/" className="text-3xl">
				H_
			</a>
			<nav className="hidden sm:block">
				<ul className="flex gap-14 font-semibold">
					<li>
						<Link
							className="text-sm hover:text-d-emph"
							href="/work"
						>
							WORK
						</Link>
					</li>
					<li>
						<Link className="text-sm hover:text-d-emph" href="/">
							HOME
						</Link>
					</li>
					<li>
						<Link
							className="text-sm hover:text-d-emph"
							href="/about"
						>
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
