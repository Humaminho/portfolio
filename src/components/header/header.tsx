'use client';
import { useState } from 'react';
import ThemeSwitch from './theme-switch';
import ThemeDropdown from './theme-dropdown';
import HeaderLink from './header-link';
import Menu from './menu';
import Logo from './logo';
import MenuBtn from './menu-btn';
import Resume from './resume';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [theme, setTheme] = useState('dark');

	return (
		<>
			<header className="flex justify-between items-center sticky top-0 z-50 px-7 sm:px-10 md:px-14 lg:px-16 py-2 border-l-border border-b dark:border-d-border bg-l-header dark:bg-d-header backdrop-blur-md">
				<Logo />
				<nav className="hidden sm:block">
					<ul className="flex font-semibold items-end">
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
				<div className="text-l-text dark:text-d-text flex gap-5 md:gap-6 lg:gap-7 items-center">
          <Resume />
					<ThemeSwitch
						theme={theme}
						setTheme={setTheme}
						open={open}
						setOpen={setOpen}
					/>
					<MenuBtn />
				</div>
			</header>
			<Menu />
			<ThemeDropdown setTheme={setTheme} />
		</>
	);
}
