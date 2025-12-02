import { ReactLenis } from 'lenis/react'
import Copy from './components/Copy'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<ReactLenis root />

			<nav>
				<p>Static House</p>
				<p>Menu</p>
			</nav>

			<section className='intro'>
				<div className='section-bg'>
					<Image src='./img_1.jpg' alt='' fill />
				</div>

				<Copy blockColor='#fe0100'>
					<h1>
						Cinematography is the art of visual storytelling through the lens of
						a camera.
					</h1>
				</Copy>
			</section>

			<section className='about'>
				<Copy>
					<p>
						Cinematography is the art of capturing light and movement to tell a
						story. It involves the careful selection of camera angles, lighting
						setups, and composition to create visually compelling images that
						enhance the narrative. A cinematographer works closely with the
						director to bring their vision to life, using technical expertise
						and artistic sensibility to craft each shot.
					</p>
				</Copy>
			</section>

			<section className='banner-img'>
				<div className='section-bg'>
					<Image src='./img_2.jpg' alt='' fill />
				</div>
			</section>

			<section className='cta'>
				<Copy>
					<p>
						the camera setties into long takes and patient movement. Colors stay
						unrefined and shadows turn into texture. The image waits for action
						instead of chasing it. Every frame forms a clear visuals language
						built through restraint.
					</p>
				</Copy>
			</section>

			<section className='outro'>
				<div className='section-bg'>
					<Image src='./img_4.jpg' alt='' fill />
				</div>

				<Copy blockColor='#fe0100'>
					<h1>
						Conematography thrives in the details from the grain to the failoff
						to the glow.
					</h1>
				</Copy>
			</section>
		</>
	)
}
