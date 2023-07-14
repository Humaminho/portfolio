'use client';
import { useState } from 'react';
import ThemeBtn from './theme-btn';
import ThemeModal from './theme-modal';
import HeaderLink from './header-link';
import Menu from './menu';
import Logo from './logo';
import MenuBtn from './menu-btn';
import ResumeBtn from './resume-btn';
import ResumeModal from './resume-modal';

export default function Header() {
	const [openThemeModal, setOpenThemeModal] = useState(false);
	const [openResumeModal, setOpenResumeModal] = useState(false);
	const [theme, setTheme] = useState('dark');

	return (
		<>
			<header className="sticky top-0 z-40 border-l-border border-b dark:border-d-border bg-l-header dark:bg-d-header backdrop-blur-md">
				<div className="max-w-7xl mx-auto flex justify-between items-center px-7 sm:px-10 md:px-14 lg:px-16 py-2">
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
						<ResumeBtn
							open={openResumeModal}
							setOpen={setOpenResumeModal}
						/>
						<ThemeBtn
							theme={theme}
							setTheme={setTheme}
							open={openThemeModal}
							setOpen={setOpenThemeModal}
						/>
						<MenuBtn />
					</div>
				</div>
			</header>
			<Menu />
			<ThemeModal
				setTheme={setTheme}
				open={openThemeModal}
				setOpen={setOpenThemeModal}
			/>
			<ResumeModal open={openResumeModal} setOpen={setOpenResumeModal} />
		</>
	);
}
