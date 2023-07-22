'use client';
import React from 'react';
import { expandCursor, shrinkCursor } from '../../utils/cursorActions';
import Image from 'next/image';

export default function ResumeModal({
	open,
	setOpen,
}: {
	open: Boolean;
	setOpen: Function;
}) {
	function closeModal() {
		setOpen(false);
		const html = document.querySelector('html');
		html?.classList.remove('no-scroll');
	}

	return (
		<>
			{open && (
				<div
					className="layer fixed top-0 right-0 left-0 bottom-0 bg-l-header dark:bg-d-header backdrop-blur-xl z-40"
					onClick={closeModal}
				></div>
			)}
			{open && (
				<div className="fixed flex flex-col gap-8 p-8 md:p-10 m-4 md:m-0 sm:m-8 md:min-w-[600px] bg-l-header dark:bg-d-header border border-l-border dark:border-d-border rounded-lg top-12 bottom-12 md:right-1/2 md:translate-x-1/2 backdrop-blur-md z-50">
					<div className="flex justify-between items-center">
						<div
							className="flex items-center gap-2 text-l-text dark:text-d-text hover:text-l-emph dark:hover:text-d-emph"
							onMouseOver={expandCursor}
							onMouseOut={shrinkCursor}
							onClick={() => {
								closeModal();
								shrinkCursor();
							}}
						>
							<svg
								width="15"
								height="12"
								viewBox="0 0 15 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.5261 6C14.5261 6.08375 14.4929 6.16407 14.4336 6.22329C14.3744 6.28251 14.2941 6.31578 14.2104 6.31578H1.07864L6.22349 11.4606C6.28274 11.5199 6.31603 11.6002 6.31603 11.684C6.31603 11.7678 6.28274 11.8482 6.22349 11.9075C6.16423 11.9667 6.08387 12 6.00007 12C5.91628 12 5.83591 11.9667 5.77666 11.9075L0.092614 6.22341C0.0632539 6.19409 0.0399625 6.15926 0.024071 6.12093C0.00817962 6.08259 0 6.0415 0 6C0 5.9585 0.00817962 5.91741 0.024071 5.87907C0.0399625 5.84074 0.0632539 5.80591 0.092614 5.77659L5.77666 0.0925411C5.806 0.0632019 5.84083 0.0399288 5.87916 0.0240506C5.91749 0.00817229 5.95858 0 6.00007 0C6.04156 0 6.08265 0.00817229 6.12098 0.0240506C6.15932 0.0399288 6.19415 0.0632019 6.22349 0.0925411C6.25283 0.12188 6.2761 0.156711 6.29198 0.195045C6.30786 0.233378 6.31603 0.274464 6.31603 0.315956C6.31603 0.357448 6.30786 0.398533 6.29198 0.436867C6.2761 0.4752 6.25283 0.510031 6.22349 0.53937L1.07864 5.68422H14.2104C14.2941 5.68422 14.3744 5.71749 14.4336 5.77671C14.4929 5.83593 14.5261 5.91625 14.5261 6Z"
									fill="currentColor"
								/>
							</svg>
							<p className=" font-extralight">GO BACK</p>
						</div>
						<a href="/other/Humam-CV.pdf" download>
							<svg
								onMouseOver={expandCursor}
								onMouseOut={shrinkCursor}
								className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-l-emph dark:hover:text-d-emph"
								width="30"
								height="30"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9 24V30H31V24M20 9V26M20 26L13 19M20 26L27 19"
									stroke="currentColor"
									strokeWidth="2"
								/>
                <title>Download pdf</title>
								<rect
									x="0.5"
									y="0.5"
									width="39"
									height="39"
									rx="4.5"
									stroke="currentColor"
									strokeWidth="2"
								/>
							</svg>
						</a>
					</div>
					<div className="pdf overflow-y-scroll h-5/6">
						<Image
							src="/images/CV-image.jpg"
							width={900}
							height={1200}
							alt="My resume"
							className="pr-2"
						/>
					</div>
				</div>
			)}
		</>
	);
}
