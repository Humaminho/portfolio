'use client';
import '../../styles/sass/index.css';
import MenuLink from './menuLink';

export default function Menu() {

  	function closeMenu(): void {
		const navList = document.querySelector('.menu');
		navList?.classList.remove('menu-active');
		const html = document.querySelector('html');
		html?.classList.remove('no-scroll');
	}

	function openMenu(): void {
		const navList = document.querySelector('.menu');
		navList?.classList.add('menu-active');
		const html = document.querySelector('html');
		html?.classList.add('no-scroll');
	}

	return (
		<>
			<div onClick={openMenu} className="sm:hidden hover:cursor-pointer">
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
			<div className="menu bg-footer text-d-text">
				<nav className="flex flex-col">
					<div className="menu-top justify-end p-3">
						<svg
							onClick={closeMenu}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="2rem"
							height="2rem"
							fill="currentColor"
							className="hover:cursor-pointer"
						>
							<title>close</title>
							<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
						</svg>
					</div>
					<ul className="flex flex-col items-start px-6">
						<MenuLink closeMenu={closeMenu} link="/" text="HOME" />
						<MenuLink
							closeMenu={closeMenu}
							link="/work"
							text="WORK"
						/>
						<MenuLink
							closeMenu={closeMenu}
							link="/about"
							text="ABOUT"
						/>
					</ul>
					<div className="h-px bg-d-text m-6"></div>
					<div className="flex justify-start items-center gap-5 px-6 py-3">
						<a target="_blank" href="https://github.com/humaminho">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-github hover:cursor-pointer"
								viewBox="0 0 16 16"
							>
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/houmame-kharbouch-2b0190244/"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-linkedin hover:cursor-pointer"
								viewBox="0 0 16 16"
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg>
						</a>
						<a href="https://www.google.com/" target="_blank">
							<svg
								width="26"
								height="20"
								viewBox="0 0 26 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="hover:cursor-pointer"
							>
								<path
									d="M23 0H3C1.625 0 0.5125 1.125 0.5125 2.5L0.5 17.5C0.5 18.875 1.625 20 3 20H23C24.375 20 25.5 18.875 25.5 17.5V2.5C25.5 1.125 24.375 0 23 0ZM22.5 5.3125L13.6625 10.8375C13.2625 11.0875 12.7375 11.0875 12.3375 10.8375L3.5 5.3125C3.37466 5.24214 3.2649 5.14708 3.17736 5.03307C3.08982 4.91906 3.02633 4.78847 2.99072 4.64921C2.95511 4.50995 2.94813 4.36492 2.9702 4.22288C2.99226 4.08085 3.04292 3.94477 3.1191 3.82288C3.19528 3.70099 3.29541 3.59582 3.41341 3.51374C3.53141 3.43167 3.66484 3.37439 3.80562 3.34537C3.9464 3.31636 4.0916 3.31621 4.23244 3.34494C4.37328 3.37366 4.50683 3.43067 4.625 3.5125L13 8.75L21.375 3.5125C21.4932 3.43067 21.6267 3.37366 21.7676 3.34494C21.9084 3.31621 22.0536 3.31636 22.1944 3.34537C22.3352 3.37439 22.4686 3.43167 22.5866 3.51374C22.7046 3.59582 22.8047 3.70099 22.8809 3.82288C22.9571 3.94477 23.0077 4.08085 23.0298 4.22288C23.0519 4.36492 23.0449 4.50995 23.0093 4.64921C22.9737 4.78847 22.9102 4.91906 22.8226 5.03307C22.7351 5.14708 22.6253 5.24214 22.5 5.3125Z"
									fill="currentColor"
								/>
							</svg>
						</a>
					</div>
				</nav>
			</div>
		</>
	);
}
