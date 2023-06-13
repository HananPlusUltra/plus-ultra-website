import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
	return (
		<section className='about'>
			<div className='main'>
				<Image
					src='https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/347434469_794740782211735_6016721572840095819_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=ImEvJLnhMjcAX810gfq&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzEwNjMwMjc5Mzc3Mjg5MTE2OA%3D%3D.2-ccb7-5&oh=00_AfD9qP3Eh1He3LR4CbbEK_-YZnYiZIJm1-7wF442vBg6xA&oe=648CAFCD&_nc_sid=b3163e'
					alt='About section'
					width={500}
					height={500}
				/>
				<div className='all-text'>
					<h4>About us</h4>
					<h1>Udruzenje za razvoj i podrsku mladih</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolor labore nostrum velit est sequi quas architecto id
						natus, iusto laudantium commodi minus consectetur
						recusandae necessitatibus modi quos.
					</p>
					<div className='btn'>
						<button type='button'>Our Team</button>
						<button type='button' className='btn2'>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
