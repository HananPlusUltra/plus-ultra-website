import Image from 'next/image';
import React from 'react';
import Button from './Button';

const AboutSection = () => {
	return (
		<section className='about py-40 px-12 min-h-screen flex items-center justify-between gap-20 flex-col md:flex-row'>
			<Image
				src='https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/347434469_794740782211735_6016721572840095819_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=ImEvJLnhMjcAX810gfq&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzEwNjMwMjc5Mzc3Mjg5MTE2OA%3D%3D.2-ccb7-5&oh=00_AfD9qP3Eh1He3LR4CbbEK_-YZnYiZIJm1-7wF442vBg6xA&oe=648CAFCD&_nc_sid=b3163e'
				alt='About section'
				width={500}
				height={500}
				className='rounded-xl'
			/>
			<div className='all-text flex gap-6 flex-col'>
				<h4>O nama</h4>
				<h2 className='text-3xl font-bold'>
					Udruženje za razvoj i podršku mladih
				</h2>
				<p className='line-clamp-6'>
					Nas Udrženje Mladih IT Profesionalaca je zajednica
					strastvenih i ambicioznih mladih ljudi koji se udružuju s
					ciljem sticanja i usavršavanja IT vještina. Naša misija je
					podržati i potaknuti mlade talente da ostvare svoj puni
					potencijal u IT industriji. Kroz naše aktivnosti, nudimo
					obrazovne resurse, radionice, mentorske programe i
					networking događaje kako bismo pružili potrebnu podršku
					mladima koji žele napredovati u IT karijeri. Stvaramo
					sigurno i poticajno okruženje u kojem naši članovi mogu
					razmijeniti znanje, iskustva i ideje. Neprestano se
					uspinjemo na stepenicama uspjeha i otvaramo vrata
					nevjerojatnim prilikama u tehnološkom svijetu. Vjerujemo u
					snagu zajedništva i suradnje te potičemo međusobno
					mentorstvo i podršku kako bismo svi zajedno rasli i
					razvijali se. Pridružite nam se u našoj misiji gradnje bolje
					IT zajednice. Bez obzira jeste li početnik u industriji ili
					već iskusni profesionalac, u našem udruženju imate priliku
					steći nova znanja, razviti se profesionalno i ostvariti
					svoje IT snove. Zajedno ćemo oblikovati budućnost
					tehnologije i donijeti inovacije koje mijenjaju svijet.
					Pridružite nam se danas i budite dio naše dinamične i
					inspirativne IT zajednice.
				</p>

				<Button type='button'>Saznaj više</Button>
			</div>
		</section>
	);
};

export default AboutSection;
