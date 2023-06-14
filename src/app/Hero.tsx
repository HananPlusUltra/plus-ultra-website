import Image from 'next/image';
import React from 'react';
import Button from './Button';

function Hero() {
	return (
		<section className=' flex flex-col md:grid place-items-center px-16 md:pr-0 gap-28 grid-cols-12 max-h-[1200px] overflow-hidden min-h-screen'>
			<div className='home-content flex flex-col gap-4 col-span-4 '>
				<h1 className='text-4xl font-bold'>
					Učimo mlade, otvaramo puteve budućnosti!
				</h1>
				<p>
					Pridružite se našoj zajednici mladih entuzijasta koji
					zajedno rastu, uče i ostvaruju svoj pun potencijal.
				</p>
				<div className='btn-box flex justify-between flex-col gap-4'>
					<Button type='button'>Postani volonter</Button>
					<Button type='button'>Naši projekti</Button>
				</div>
				<div className='home-sci flex gap-8'>
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
				src='https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/275744187_1124839878264366_5327447242546037122_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=snTzyTKTcwkAX9ryIzb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc5MTgzNzIxOTg3MjI3OTUwNA%3D%3D.2-ccb7-5&oh=00_AfAk7T2wTQGp7m048gh5EbXt9VSbPUYyFg2a2mUWRF3rBQ&oe=648EC0BE&_nc_sid=a1ad6c'
				alt='My project'
				width={1000}
				height={1600}
				className='md:h-screen col-span-8 order-first md:order-none rounded-l-xl'
			/>
		</section>
	);
}

export default Hero;
