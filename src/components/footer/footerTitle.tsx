export default function footerTitle({text}: {text: string}) {
  return (
		<div className="relative py-4">
			<div className="h-[1px] w-full bg-d-text">
				<p className="absolute bottom-1/2 translate-x-1/2 translate-y-1/2 right-1/2 bg-footer px-3 font-extralight">
					{text}
				</p>
			</div>
		</div>
  );
}
