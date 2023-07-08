'use client';
import { useState } from 'react';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';
import FadeWrapper from '../common/fade-wrapper';

export default function GmailLink() {
	const email = 'hu666mam@gmail.com';

	const [copied, setCopied] = useState(false);

	function copyEmail() {
		navigator.clipboard.writeText(email);
	}

	return (
		<div
			className="group flex items-center gap-2"
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
			onClick={() => {
				copyEmail();
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			}}
		>
			<p className="group-hover:text-d-emph py-2">EMAIL</p>
			{copied ? (
				<FadeWrapper>
					<div className="flex gap-1 items-end">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							className="bi bi-check group-hover:text-d-emph opacity-70"
							viewBox="0 0 16 16"
						>
							<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
						</svg>
						<p className="text-xs group-hover:text-d-emph opacity-70">
							Email Copied!
						</p>
					</div>
				</FadeWrapper>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height={18}
					viewBox="0 0 24 24"
					fill="currentColor"
					className="hidden opacity-0 group-hover:block group-hover:opacity-100 group-hover:text-d-emph"
				>
					<path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
				</svg>
			)}
		</div>
	);
}
