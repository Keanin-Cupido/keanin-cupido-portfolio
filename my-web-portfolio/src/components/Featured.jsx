import React from 'react';

// components
import Button from './Button';
import ProjectCard from './ProjectCard';

const Featured = () => {
	return (
		<section className="w-full pt-16 flex flex-col items-start justify-start gap-12">
			<h2 className="text-2xl font-montserrat font-bold">
				Featured Projects
			</h2>

			{/* Large Featured Project Card */}
			<ProjectCard
				featured
				img=""
				title="Facebook"
				desc="Facebook is a social media platform that allows users to connect, share, and communicate with friends, family, and communities through posts, photos, and messages."
				link="/projects/facebook"
				tech={['React', 'Supabase']}
			/>

			{/* Grid of Smaller Featured Projects */}
			<div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 gap-y-12">
				{Array.from({ length: 6 }).map((_, index) => (
					<ProjectCard
						key={index}
						img=""
						title="Facebook"
						desc="Facebook is a social media platform that allows users to connect, share, and communicate with friends, family, and communities through posts, photos, and messages."
						link="/projects/facebook"
						tech={['React', 'Supabase']}
					/>
				))}
			</div>

			{/* Button to Portfolio Page */}
			<Button link="/portfolio" text="View All Projects" size="base" />
		</section>
	);
};

export default Featured;
