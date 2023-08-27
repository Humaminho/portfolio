import Image from 'next/image'
import Reveal from '../common/reveal';

export default function AboutImg() {
  return (
		<Reveal width="100%" delay={0.3} className=" col-span-3">
			<Image
				className="hidden lg:block"
				src="/images/about-me.webp"
				width={448.031}
				height={464.273}
				alt="3D abstract shape"
				loading="lazy"
			/>
		</Reveal>
  );
}
