import { NavLink } from 'react-router-dom';

export default function ProjectCard({
	featured,
	image,
	title,
	desc,
	link,
	tech,
}) {
	const bothStyles = 'flex flex-col items-start justify-center gap-4';
	const featuredStyles = 'w-full';
	const styles = '';

	return (
		<article
			className={`${bothStyles} ${featured ? featuredStyles : styles}`}>
			<NavLink
				to={link}
				className={`w-full transition-all duration-300 hover:opacity-80 ${
					featured ? 'h-[300px]' : 'h-[200px]'
				} bg-slate-600 rounded-lg`}>
				<img src={image} alt={title} />
			</NavLink>
			<NavLink
				to={link}
				className={`${
					featured ? 'text-xl' : 'text-lg'
				} hover:opacity-80 transition-all duration-300`}>
				{title}
			</NavLink>
			<p
				className={`w-full opacity-85 font-montserrat ${
					featured
						? 'text-lg md:max-w-[80%]'
						: 'text-base max-w-[100%]'
				}`}>
				{desc.substring(0, 100) + '...'}
			</p>

			{/* Tech */}
			<div className="flex flex-row gap-2">
				{tech.map((techItem, index) => (
					<span
						key={index}
						className="px-[0.75em] py-1 rounded-lg bg-sky-700/50 text-sm font-montserrat text-gray-200">
						{techItem}
					</span>
				))}
			</div>

			<NavLink
				to={link}
				className={`group hover:underline font-signika-negative flex items-center justify-start gap-1 mt-2 ${
					featured ? 'text-lg' : 'text-base'
				}`}>
				View Project
				<span className="group-hover:transform group-hover:translate-y-[-3px] group-hover:translate-x-[3px] transition-transform duration-300">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75"
						/>
					</svg>
				</span>
			</NavLink>
		</article>
	);
}
