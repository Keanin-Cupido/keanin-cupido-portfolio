export default function About() {
	return (
		<div className="my-32 flex flex-col items-start justify-start gap-8">
			<h1 className="text-8xl underline font-['Wosker']">About Me.</h1>

			<img
				src="/keanincupido.svg"
				alt="Contact Image"
				className="w-full bg-[#3B94FF] rounded-lg h-[200px] shadow-[#3B94FF]/10 shadow-lg"
			/>

			<p className="mt-4">
				Hello! I'm a passionate developer with a love for creating
				innovative solutions. My expertise lies in JavaScript, React,
				and web development, and I thrive in collaborative environments.
			</p>

			<h2 className="text-2xl font-semibold mt-6 font-signika-negative">
				My Journey
			</h2>
			<p className="mt-2">
				I started my journey in tech at a young age, fascinated by how
				software can solve real-world problems. Over the years, I've
				honed my skills through various projects, internships, and
				continuous learning. From building simple websites in high
				school to developing complex applications, my passion for
				technology has only grown.
			</p>
			<p className="mt-2">
				After completing my degree in Computer Science, I took on
				internships that allowed me to work on real-world projects,
				learning from experienced developers and gaining valuable
				insights into the industry.
			</p>

			<h2 className="text-2xl font-semibold mt-6 font-signika-negative">
				Technical Skills
			</h2>
			<ul className="list-disc list-inside mt-2">
				<li>JavaScript (ES6+)</li>
				<li>React & Redux</li>
				<li>Node.js & Express</li>
				<li>HTML5 & CSS3</li>
				<li>Responsive Web Design</li>
				<li>Version Control (Git & GitHub)</li>
				<li>RESTful APIs</li>
				<li>TypeScript</li>
				<li>GraphQL</li>
				<li>Database Management (MongoDB, SQL)</li>
				<li>Testing Frameworks (Jest, Mocha)</li>
			</ul>

			<h2 className="text-2xl font-semibold mt-6 font-signika-negative">
				Projects
			</h2>
			<p className="mt-2">
				I've worked on several projects that showcase my skills:
			</p>
			<ul className="list-disc list-inside mt-2">
				<li>
					<strong>Portfolio Website:</strong> A personal website to
					showcase my projects and skills, built with React and
					styled-components.
				</li>
				<li>
					<strong>Task Manager App:</strong> A full-stack application
					for managing tasks with user authentication, using Node.js
					and MongoDB.
				</li>
				<li>
					<strong>E-commerce Platform:</strong> Developed a responsive
					e-commerce site with payment integration, utilizing React
					and Stripe API.
				</li>
				<li>
					<strong>Blog Platform:</strong> Created a blogging platform
					where users can create, edit, and delete posts, built with
					MERN stack.
				</li>
				<li>
					<strong>Weather App:</strong> A real-time weather
					application that fetches data from a public API, showcasing
					my skills in API integration.
				</li>
			</ul>

			<h2 className="text-2xl font-semibold mt-6 font-signika-negative">
				Interests
			</h2>
			<p className="mt-2">
				When I'm not coding, I enjoy exploring the latest tech trends,
				reading tech blogs, and participating in hackathons. I also love
				hiking and photography, which help me recharge and find
				inspiration. Traveling to new places and experiencing different
				cultures fuels my creativity and broadens my perspective.
			</p>
			<p className="mt-2">
				I'm also an advocate for open-source contributions and enjoy
				collaborating with others on projects that can benefit the
				community.
			</p>

			<h2 className="text-2xl font-semibold mt-6 font-signika-negative">
				Professional Development
			</h2>
			<p className="mt-2">
				I believe in continuous learning and regularly take online
				courses to enhance my skills. I've completed certifications in
				React, Node.js, and cloud computing, which have equipped me with
				the latest industry knowledge.
			</p>
			<p className="mt-2">
				Attending tech meetups and conferences has also been
				instrumental in my growth, allowing me to network with industry
				professionals and learn from their experiences.
			</p>

			<h2 className="text-2xl font-semibold mt-6 font-signika-negative">
				Let's Connect!
			</h2>
			<p className="mt-2">
				I'm excited to connect with like-minded professionals and
				explore opportunities that allow me to grow and make an impact.
				Feel free to reach out to me on LinkedIn or GitHub! I'm always
				open to discussing new ideas, collaborations, or just sharing
				insights about technology.
			</p>
		</div>
	);
}
