'use client';
import { useState } from 'react';
import { expandCursor, shrinkCursor, typeCursor } from '@/utils/cursorActions';

export default function Form() {

  const [loading, setLoading] = useState(false);

	async function handleSubmit(e: any) {
		e.preventDefault();
    setLoading(true);

		const data = {
			name: e.target.name.value,
			email: e.target.email.value,
			message: e.target.message.value,
		};

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (res.ok) {
			console.log('Client: Success');
      setLoading(false);
		}
		if (!res.ok) {
			console.log('Client: Error');
      setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<input
				type="text"
				placeholder="Name"
				minLength={3}
				maxLength={50}
				id="name"
				required
				onMouseOver={typeCursor}
				onMouseLeave={shrinkCursor}
				className="w-full bg-transparent border border-d-text py-4 px-6 rounded-md font-light outline-0 focus:border-d-emph"
			/>
			<input
				type="email"
				placeholder="Email"
				required
				minLength={5}
				maxLength={50}
				id="email"
				onMouseOver={typeCursor}
				onMouseLeave={shrinkCursor}
				className="w-full bg-transparent border border-d-text py-4 px-6 rounded-md font-light outline-0 focus:border-d-emph"
			/>
			<textarea
				placeholder="Message"
				cols={30}
				rows={5}
				required
				minLength={10}
				maxLength={1000}
				id="message"
				onMouseOver={typeCursor}
				onMouseLeave={shrinkCursor}
				className="w-full bg-transparent border border-d-text py-4 px-6 rounded-md font-light outline-0 focus:border-d-emph resize-none"
			></textarea>
			<button
				onMouseOver={expandCursor}
				onMouseLeave={shrinkCursor}
				type="submit"
				disabled={loading}
				className="self-end flex gap-3 items-center hover:animate-pulse group hover:text-d-emph disabled:text-l-border disabled:opacity-50"
			>
				<p className="">SEND</p>
				<svg
					width="16"
					height="12"
					viewBox="0 0 16 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="group-hover:-rotate-45 transition-transform duration-300"
				>
					<path
						d="M15.8045 6.42448L9.80468 11.8242C9.67959 11.9368 9.50993 12 9.33303 12C9.15612 12 8.98647 11.9368 8.86138 11.8242C8.73629 11.7116 8.66601 11.5589 8.66601 11.3997C8.66601 11.2405 8.73629 11.0878 8.86138 10.9752L13.7237 6.59997H0.666645C0.48984 6.59997 0.320276 6.53676 0.195256 6.42424C0.0702357 6.31172 0 6.15912 0 6C0 5.84088 0.0702357 5.68827 0.195256 5.57576C0.320276 5.46324 0.48984 5.40003 0.666645 5.40003H13.7237L8.86138 1.02478C8.73629 0.912198 8.66601 0.75951 8.66601 0.6003C8.66601 0.441091 8.73629 0.288402 8.86138 0.175824C8.98647 0.0632457 9.15612 0 9.33303 0C9.50993 0 9.67959 0.0632457 9.80468 0.175824L15.8045 5.57552C15.8665 5.63124 15.9156 5.69741 15.9492 5.77025C15.9827 5.84308 16 5.92115 16 6C16 6.07884 15.9827 6.15692 15.9492 6.22975C15.9156 6.30259 15.8665 6.36876 15.8045 6.42448Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</form>
	);
}
