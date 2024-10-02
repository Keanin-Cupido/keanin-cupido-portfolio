import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
	// Example project data
	{
		featured: false,
		image: 'image1.jpg',
		title: 'Project 1',
		desc: 'Description 1',
		link: '/projects/project1',
		tech: ['React', 'JavaScript'],
	},
	{
		featured: false,
		image: 'image2.jpg',
		title: 'Project 2',
		desc: 'Description 2',
		link: '/projects/project2',
		tech: ['HTML', 'CSS'],
	},
	{
		featured: false,
		image: 'image1.jpg',
		title: 'Project 1',
		desc: 'Description 1',
		link: '/projects/project1',
		tech: ['React', 'JavaScript'],
	},
	{
		featured: false,
		image: 'image2.jpg',
		title: 'Project 2',
		desc: 'Description 2',
		link: '/projects/project2',
		tech: ['HTML', 'CSS'],
	},
	{
		featured: false,
		image: 'image1.jpg',
		title: 'Project 1',
		desc: 'Description 1',
		link: '/projects/project1',
		tech: ['React', 'JavaScript'],
	},
	{
		featured: true,
		image: 'image2.jpg',
		title: 'Project 2',
		desc: 'Description 2',
		link: '/projects/project2',
		tech: ['HTML', 'CSS'],
	},
	{
		featured: false,
		image: 'image1.jpg',
		title: 'Project 1',
		desc: 'Description 1',
		link: '/projects/project1',
		tech: ['React', 'JavaScript'],
	},
	{
		featured: false,
		image: 'image2.jpg',
		title: 'Project 2',
		desc: 'Description 2',
		link: '/projects/project2',
		tech: ['HTML', 'CSS'],
	},
];
const featuredProjects = [
	// Example project data
	{
		featured: true,
		image: 'image1.jpg',
		title: 'Project 1',
		desc: 'Description 1',
		link: '/projects/project1',
		tech: ['React', 'JavaScript'],
	},
	{
		featured: true,
		image: 'image2.jpg',
		title: 'Project 2',
		desc: 'Description 2',
		link: '/projects/project2',
		tech: ['HTML', 'CSS'],
	},
	{
		featured: true,
		image: 'image1.jpg',
		title: 'Project 1',
		desc: 'Description 1',
		link: '/projects/project1',
		tech: ['React', 'JavaScript'],
	},
	{
		featured: true,
		image: 'image2.jpg',
		title: 'Project 2',
		desc: 'Description 2',
		link: '/projects/project2',
		tech: ['HTML', 'CSS'],
	},
];

export default function Portfolio() {
	const [filter, setFilter] = useState('All');
	const [techFilter, setTechFilter] = useState('All'); // New state for technology filter

	const filteredProjects = projects.filter(
		(project) =>
			(filter === 'All' || (filter === 'Featured' && project.featured)) &&
			(techFilter === 'All' || project.tech.includes(techFilter)), // Filter by technology
	);

	const filteredFeaturedProjects = featuredProjects.filter(
		(project) =>
			(filter === 'All' || (filter === 'Featured' && project.featured)) &&
			(techFilter === 'All' || project.tech.includes(techFilter)), // Filter by technology
	);

	return (
		<main className="my-32 flex flex-col gap-8">
			<h1 className="text-8xl underline font-['Wosker']">Portfolio.</h1>
			<section className="flex overflow-x-auto gap-8">
				{filteredFeaturedProjects
					.filter((project) => project.featured)
					.map((project) => (
						<a
							key={project.link}
							href={project.link}
							className="flex-shrink-0">
							<img
								src={project.image}
								alt={project.title}
								className="w-[600px] h-[300px] bg-slate-600 object-cover rounded-lg"
							/>
						</a>
					))}
			</section>
			<section className="my-16 flex gap-8">
				{/* Fixed filter navigation */}
				<div className="w-1/4 h-full sticky top-4">
					<h2 className="text-6xl font-bold underline font-[Wosker]">
						Filter by Tech.
					</h2>
					{/* Technology filter buttons with interactive effects */}
					<div className="flex flex-col items-start gap-2 mt-8">
						<button
							onClick={() => setTechFilter('All')}
							className={`filter-btn ${
								techFilter === 'All'
									? 'text-white underline text-xl'
									: 'text-blue-300/50'
							}`}>
							All Tech
						</button>
						<button
							onClick={() => setTechFilter('React')}
							className={`filter-btn ${
								techFilter === 'React'
									? 'text-white underline text-xl'
									: 'text-blue-300/50'
							}`}>
							React
						</button>
						<button
							onClick={() => setTechFilter('JavaScript')}
							className={`filter-btn ${
								techFilter === 'JavaScript'
									? 'text-white underline text-xl'
									: 'text-blue-300/50'
							}`}>
							JavaScript
						</button>
						<button
							onClick={() => setTechFilter('HTML')}
							className={`filter-btn ${
								techFilter === 'HTML'
									? 'text-white underline text-xl'
									: 'text-blue-300/50'
							}`}>
							HTML
						</button>
						<button
							onClick={() => setTechFilter('CSS')}
							className={`filter-btn ${
								techFilter === 'CSS'
									? ' text-white underline text-xl'
									: ' text-blue-300/50'
							}`}>
							CSS
						</button>
					</div>
				</div>

				{/* Vertical divider */}
				<div className="sticky top-4 border-r border-gray-300/10 h-svh"></div>

				{/* Scrollable grid of projects */}
				<div className="w-3/4 overflow-y-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16">
						{filteredProjects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
