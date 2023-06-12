import Image from 'next/image';
import React from 'react';

function Hero() {
	return (
		<section className='min-h-screen flex flex-col md:grid place-items-center px-16 md:pr-0 gap-12 grid-cols-12'>
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
				src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
				alt='My project'
				width={1000}
				height={1600}
				className='h-full col-span-8 order-first md:order-none'
			/>
		</section>
	);
}

export default Hero;
