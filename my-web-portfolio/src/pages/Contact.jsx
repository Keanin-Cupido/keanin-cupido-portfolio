export default function Contact() {
	return (
		<section className="my-32 flex flex-col items-start justify-start gap-4 w-full">
			<h1 className="text-8xl underline font-['Wosker']">Contact Me.</h1>

			<p className="mb-4">
				I'm always open to new opportunities and collaborations. Feel
				free to reach out!
			</p>
			<p className="mb-4">
				With a background in web development, I specialize in creating
				responsive and user-friendly applications. My skills include
				React, JavaScript, and CSS, and I have experience working with
				various APIs and databases.
			</p>
			<p className="mb-4">
				If you're looking for someone who is passionate about technology
				and eager to learn, I'm your person!
			</p>

			<form className="mb-6 w-full">
				<label htmlFor="name" className="block mb-2">
					Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="border border-gray-300/25 bg-white/10 rounded p-2 mb-4 w-full"
				/>

				<label htmlFor="email" className="block mb-2">
					Email:
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					className="border border-gray-300/25 bg-white/10 rounded p-2 mb-4 w-full"
				/>

				<label htmlFor="message" className="block mb-2">
					Message:
				</label>
				<textarea
					id="message"
					name="message"
					required
					className="border border-gray-300/25 bg-white/10 rounded p-2 mb-4 w-full"
				/>

				<button
					type="submit"
					className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
					Send Message
				</button>
			</form>

			<div className="mb-6">
				<h2 className="text-2xl font-semibold mb-2 font-signika-negative">
					Connect with me:
				</h2>
				<a
					href="https://linkedin.com/in/yourprofile"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline mr-4">
					LinkedIn
				</a>
				<a
					href="https://github.com/yourprofile"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:underline">
					GitHub
				</a>
			</div>

			<h2 className="font-signika-negative">
				Frequently Asked Questions
			</h2>
			<ul>
				<li>
					<strong>What types of projects do you work on?</strong> I
					work on web applications, mobile apps, and anything that
					challenges my skills.
				</li>
				<li>
					<strong>How can I collaborate with you?</strong> Feel free
					to reach out through the form above, and we can discuss
					potential projects!
				</li>
			</ul>
		</section>
	);
}
