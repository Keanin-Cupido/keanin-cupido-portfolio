// components
import Button from './Button';
import SkillTag from './SkillTag';

export default function MySkills() {
	return (
		<section className="w-full py-48 flex flex-col items-start justify-start gap-8">
			<h2 className="text-2xl font-montserrat font-bold">My Skills</h2>

			<p className="w-full max-w-[90%] md:max-w-[70%] text-lg opacity-85">
				I specialize in front-end development with skills in React,
				JavaScript, HTML, and CSS. With tools like Git and frameworks
				like Astro.js, I stay updated on the latest trends to deliver
				clean, modern web solutions.
			</p>

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{/* Your skills here */}
				<SkillTag
					name="HTML & CSS"
					description="Structuring and styling web pages"
				/>
				<SkillTag
					name="JavaScript"
					description="Dynamic client-side scripting"
				/>
				<SkillTag
					name="React"
					description="Building reusable UI components"
				/>
				<SkillTag
					name="React Evironment"
					description="Setting up and managing React projects"
				/>
				<SkillTag
					name="Astro.js"
					description="Building fast and scalable web applications"
				/>
				<SkillTag
					name="Next.js"
					description="Server-side rendering and static site generation"
				/>
				<SkillTag
					name="Redux"
					description="Managing state in complex applications"
				/>
				<SkillTag
					name="Git"
					description="Version control and collaboration"
				/>
			</div>

			{/* Button to Portfolio Page */}
			<Button link="/about" text="More About Me" size="base" />
		</section>
	);
}
