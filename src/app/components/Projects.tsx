import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Link from 'next/link';

interface Project {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
}

interface ProjectsProps {
	projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<section className='flex flex-col gap-8 py-40 px-12'>
			<h2>Naši projekti</h2>
			<div className='flex flex-wrap'>
				{projects.map((project) => (
					<Link
						key={project.id}
						href={`/projects/${project.id}`}
						className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:scale-105 cursor-pointer transition'
					>
						<div className='bg-picton-blue-800/50 text-white rounded-lg shadow-lg overflow-hidden'>
							<Image
								src={project.imageUrl}
								alt={project.title}
								className='h-48 w-full object-cover'
								height={192}
								width={1000}
							/>
							<div className='p-4 flex gap-2 flex-col'>
								<h3 className='text-lg font-medium  '>
									{project.title}
								</h3>
								<p className='text-sm line-clamp-6'>
									{project.description}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Projects;
