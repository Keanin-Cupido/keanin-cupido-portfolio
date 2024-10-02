export default function ProjectDetails() {
	return (
		<div className="container mx-auto my-32 py-4">
			<h1 className="font-bold mb-8 text-6xl font-['Wosker']">
				Project Title
			</h1>
			<p className="mb-8">
				Description of the project goes here. Explain the purpose and
				goals of the project.
			</p>

			<h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
			<ul className="list-disc list-inside mb-8">
				<li>React</li>
				<li>JavaScript</li>
				<li>CSS</li>
				<li>HTML</li>
				<li>Node.js</li>
			</ul>

			<h2 className="text-2xl font-semibold mb-6">Project Image</h2>
			<img
				className="w-full h-auto mb-8"
				src="path/to/project-image.jpg"
				alt="Project Screenshot"
			/>

			<h2 className="text-2xl font-semibold mb-6">Links</h2>
			<p className="mb-4">
				<a
					className="text-blue-500 hover:underline"
					href="https://github.com/username/repo"
					target="_blank"
					rel="noopener noreferrer">
					GitHub Repository
				</a>
			</p>
			<p className="mb-4">
				<a
					className="text-blue-500 hover:underline"
					href="https://liveprojectlink.com"
					target="_blank"
					rel="noopener noreferrer">
					Live Website
				</a>
			</p>

			<h2 className="text-2xl font-semibold mb-6">How It Was Built</h2>
			<p className="mb-8">
				Detail the process of building the project, including any
				challenges faced and how they were overcome.
			</p>
		</div>
	);
}
