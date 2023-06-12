'use client';
import { useState } from 'react';

export default function ThemeSwitch() {

  const [open, setOpen] = useState(false);

	return (
		<div className="border-l-text dark:border-d-text border rounded-full relative">
			<svg
				width="25"
				height="25"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="p-1 cursor-pointer"
        onClick={() => {
          const dropdown = document.getElementById('theme-dropdown');
          if (open === false) {
            dropdown?.classList.remove('hidden');
            dropdown?.classList.add('block');
            setOpen(true);
          } else {
            dropdown?.classList.remove('block');
            dropdown?.classList.add('hidden');
            setOpen(false);
          }

        }}
			>
				<path
					d="M13.0987 9.57813C13.2262 9.27438 12.8619 9.01563 12.5562 9.15063C11.9454 9.41879 11.2853 9.55672 10.6181 9.55563C8.0025 9.55563 5.8825 7.47813 5.8825 4.91501C5.88154 4.0496 6.12741 3.20186 6.59125 2.47126C6.76875 2.19126 6.55562 1.80376 6.23062 1.88626C3.725 2.52563 1.875 4.75813 1.875 7.41376C1.875 10.5681 4.48437 13.125 7.70375 13.125C10.1412 13.125 12.2287 11.6594 13.0987 9.57813Z"
					fill="currentColor"
				/>
				<path
					d="M9.75706 1.93937C9.42581 1.71812 9.03081 2.11312 9.25144 2.44437L9.64519 3.03499C9.80492 3.27447 9.89016 3.55588 9.89016 3.84374C9.89016 4.1316 9.80492 4.41302 9.64519 4.65249L9.25144 5.24312C9.03081 5.57437 9.42644 5.96937 9.75769 5.74812L10.3477 5.35437C10.5872 5.19464 10.8686 5.1094 11.1564 5.1094C11.4443 5.1094 11.7257 5.19464 11.9652 5.35437L12.5558 5.74812C12.8871 5.96937 13.2821 5.57437 13.0608 5.24312L12.6671 4.65249C12.5073 4.41302 12.4221 4.1316 12.4221 3.84374C12.4221 3.55588 12.5073 3.27447 12.6671 3.03499L13.0608 2.44437C13.2821 2.11312 12.8871 1.71812 12.5552 1.93937L11.9652 2.33312C11.7257 2.49285 11.4443 2.57809 11.1564 2.57809C10.8686 2.57809 10.5872 2.49285 10.3477 2.33312L9.75706 1.93937Z"
					fill="currentColor"
				/>
			</svg>
			<div id="theme-dropdown" className="absolute top-12 right-0 hidden">
				<ul className="border rounded-lg w-[8rem] border-d-border flex flex-col backdrop-blur-lg">
					<button className="pl-3 py-2 border-b border-d-border text-start font-semibold hover:text-d-emph">
						Dark
					</button>
					<button className="pl-3 py-2 border-b border-d-border text-start font-semibold hover:text-d-emph">
						Light
					</button>
					<button className="pl-3 py-2 border-d-border text-start font-semibold text-d-border dark:text-l-border cursor-not-allowed">
						Random
					</button>
				</ul>
			</div>
		</div>
	);
}
