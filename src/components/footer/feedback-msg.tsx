export default function FeedbackMsg() {
  return (
		<div className="border-white px-5 py-3 text-white bg-l-received dark:bg-d-received border rounded-lg fixed bottom-10 right-1/2 scale-2 flex items-center gap-4 animate-pulse">
			<p className="font-semibold">Well received</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				fill="currentColor"
				className="bi bi-check-circle-fill"
				viewBox="0 0 16 16"
			>
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
			</svg>
		</div>
  );
}
