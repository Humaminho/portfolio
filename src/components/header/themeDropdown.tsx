'useClient'
import { expandCursor, shrinkCursor, soonCursor } from '../../utils/cursorActions';

export default function themeDropdown({ setTheme }: { setTheme: Function }) {
  return (
		<div
			id="theme-dropdown"
			className="fixed  top-16 right-0 z-50 hidden mr-7 sm:mr-10 md:mr-14 lg:mr-16 bg-l-header dark:bg-d-header backdrop-blur-md rounded-lg z-100"
		>
			<ul className="font-semibold border rounded-lg w-[8rem] border-l-border dark:border-d-border flex flex-col">
				<button
					className="pl-3 py-2 border-b border-l-border dark:border-d-border text-start hover:text-d-emph"
					onClick={() => {
						setTheme('dark');
					}}
					onMouseOver={expandCursor}
					onMouseLeave={shrinkCursor}
				>
					Dark
				</button>
				<button
					className="pl-3 py-2 border-b border-l-border dark:border-d-border text-start hover:text-d-emph"
					onClick={() => {
						setTheme('light');
					}}
					onMouseOver={expandCursor}
					onMouseLeave={shrinkCursor}
				>
					Light
				</button>
				<button
					className="pl-3 py-2 border-d-border text-start text-l-border dark:text-d-border"
					onMouseOver={soonCursor}
					onMouseLeave={shrinkCursor}
				>
					Random
				</button>
			</ul>
		</div>
  );
}
