import Image from 'next/image'
import Reveal from '../common/reveal';

export default function AboutImg() {
  return (
		<Reveal width="100%" delay={0.3} className=" col-span-3">
			<Image
				className="hidden lg:block"
				src="/images/about-me.png"
				width={1500}
				height={1500}
				alt="3D abstract shape"
			/>
		</Reveal>
  );
}
