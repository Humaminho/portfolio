import Link from 'next/link';
import ThemeSwitch from './themeSwitch';
import HeaderLink from './headerLink';
import Menu from './menu';
export default function Header() {
	return (
		<header className="flex justify-between items-center px-7 sm:px-10 md:px-14 lg:px-16 py-2 border-l-border border-b dark:border-d-border sticky top-0 bg-l-header dark:bg-d-header z-100 backdrop-blur-md">
			<a href="http://localhost:3000/" className="text-3xl">
				H_
			</a>
			<nav className="hidden sm:block">
				<ul className="flex gap-14 font-semibold">
					<li>
						<HeaderLink text="WORK" href="/work" />
					</li>
					<li>
						<HeaderLink text="HOME" href="/" />
					</li>
					<li>
						<HeaderLink text="ABOUT" href="/about" />
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
