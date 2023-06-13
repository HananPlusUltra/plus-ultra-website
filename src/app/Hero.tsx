import Image from 'next/image';
import React from 'react';

function Hero() {
	return (
		<section className=' flex flex-col md:grid place-items-center px-16 md:pr-0 gap-28 grid-cols-12 max-h-[1200px] overflow-hidden'>
			<div className='home-content flex flex-col gap-4 col-span-4 '>
				<h1>Učimo mlade, otvaramo puteve budućnosti!</h1>
				<p>
					Pridružite se našoj zajednici mladih entuzijasta koji
					zajedno rastu, uče i ostvaruju svoj pun potencijal.
				</p>
				<div className='btn-box flex justify-between flex-col gap-4'>
					<a href='#' className='bg-[#00abf0] text-[#081b29]'>
						Postani volonter
					</a>
					<a href='#' className='bg-transparent text-[#00abf0]'>
						Naši projekti
					</a>
				</div>
				<div className='home-sci flex justify-between gap-8'>
					<a
						href='https://www.facebook.com/PlusUltraYouth'
						aria-label='Facebook'
					>
						<i className='bx bxl-facebook'></i>
					</a>
					<a
						href='https://www.instagram.com/plusultrayouth'
						aria-label='Instagram'
					>
						<i className='bx bxl-instagram'></i>
					</a>
					<a
						href='https://www.linkedin.com/company/plusultrayouth'
						aria-label='Linkedin'
					>
						<i className='bx bxl-linkedin'></i>
					</a>
				</div>
			</div>

			<Image
				src='https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/347434469_794740782211735_6016721572840095819_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=ImEvJLnhMjcAX810gfq&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzEwNjMwMjc5Mzc3Mjg5MTE2OA%3D%3D.2-ccb7-5&oh=00_AfD9qP3Eh1He3LR4CbbEK_-YZnYiZIJm1-7wF442vBg6xA&oe=648CAFCD&_nc_sid=b3163e'
				alt='My project'
				width={1000}
				height={1600}
				className='h-full col-span-8 order-first md:order-none'
			/>
		</section>
	);
}

export default Hero;
