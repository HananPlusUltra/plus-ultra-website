import Image from 'next/image';
import React from 'react';

function Hero() {
	return (
		<section className='home gap-8'>
			<div className='home-content flex flex-col gap-4'>
				<h1>Učimo mlade, otvaramo puteve budućnosti!</h1>

				<p>
					Pridružite se našoj zajednici mladih entuzijasta koji
					zajedno rastu, uče i ostvaruju svoj pun potencijal.
				</p>
				<div className='btn-box'>
					<a href='#'>Postani volonter</a>
					<a href='#'>Naši projekti</a>
				</div>
				<div className='home-sci flex justify-between gap-8'>
					<a
						href='https://www.facebook.com/ilhan.musanovic'
						aria-label='Facebook'
					>
						<i className='bx bxl-facebook'></i>
					</a>
					<a
						href='https://www.instagram.com/ebuilhan/'
						aria-label='Instagram'
					>
						<i className='bx bxl-instagram'></i>
					</a>
					<a href='#' aria-label='Linkedin'>
						<i className='bx bxl-linkedin'></i>
					</a>
				</div>
			</div>

			<Image
				src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
				alt='My project'
				width={1000}
				height={1600}
				className='h-full'
			/>
		</section>
	);
}

export default Hero;
