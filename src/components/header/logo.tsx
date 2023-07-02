'use client';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';

export default function Logo() {
  return (
		<a
			href="http://localhost:3000/"
			className="text-l-header dark:text-d-header"
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
		>
			<svg
				width="40"
				height="40"
				viewBox="0 0 228 222"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
        className='font-white'
			>
				<path
					d="M13.7191 31.1798L112.871 0L213.27 31.1798L227.612 52.382V178.348L127.213 222H99.7753L0 176.707V51.1348L13.7191 31.1798Z"
					fill="currentColor"
				/>
				<path d="M23 62L103 87V199L23 162.687V62Z" fill="#02041D" />
				<path d="M205 62L125 87V199L205 162.991V62Z" fill="#939BE3" />
				<path
					d="M34 46L113.5 70.5L103 87L23 62L34 46Z"
					fill="#1B2B54"
				/>
				<path
					d="M113.5 70.5L194 46L205 62L125 87L113.5 70.5Z"
					fill="#DBDEFF"
				/>
				<path d="M103 87H113H125V199H103V87Z" fill="#1B2B54" />
				<path
					d="M34 46.0164L113.503 21L194 46.0164L113.503 70.5L34 46.0164Z"
					fill="#939BE3"
				/>
				<path d="M113.5 70.5L125 87H103L113.5 70.5Z" fill="#939BE3" />
			</svg>
		</a>
  );
}
