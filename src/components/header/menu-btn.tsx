export default function MenuBtn() {
  
	function openMenu(): void {
		const navList = document.querySelector('.menu');
		navList?.classList.add('menu-active');
		const html = document.querySelector('html');
		html?.classList.add('no-scroll');
	}

	return (
		<div onClick={openMenu} className="sm:hidden ">
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
	);
}
