// components
import Button from '../components/Button';
import Featured from '../components/Featured';
import MySkills from '../components/MySkills';
import SocialBar from '../components/SocialBar';

// images
import Logo from '/keanincupido.svg';

export default function Home() {
	return (
		<>
			<section className="relative w-full max-w-[95%] md:max-w-[80%] flex flex-col items-start justify-start gap-5 my-28">
				<img src={Logo} alt="keanincupido" />

				<p className="text-base">
					Hi, I'm{' '}
					<span className="font-signika-negative font-bold text-lg">
						Keanin Cupido
					</span>
					,
				</p>

				<h1 className="text-4xl font-bold font-montserrat ">
					An aspiring <span className="nabla">w</span>
					<span className="nabla">e</span>
					<span className="nabla">b</span>
					<span className="nabla"> </span>
					<span className="nabla">d</span>
					<span className="nabla">e</span>
					<span className="nabla">v</span>
					<span className="nabla">e</span>
					<span className="nabla">l</span>
					<span className="nabla">o</span>
					<span className="nabla">p</span>
					<span className="nabla">e</span>
					<span className="nabla">r</span>
					<span className="nabla"> </span>
					with a passion for building fast, accessible, and visually
					appealing websites.
				</h1>

				<h2 className="text-xl font-signika-negative opacity-80 w-full md:max-w-[75%]">
					I bring ideas to life through modern front-end technologies
					like React, JavaScript, and CSS. Always learning and
					exploring, I’m dedicated to creating intuitive web
					experiences that make an impact.
				</h2>

				<Button link="/contact" text="Contact Me" size="sm" />

				<div className="flex xl:hidden flex-row gap-8 mt-4">
					<a
						href="/#"
						target="_blank"
						rel="noopener noreferrer"
						className="w-[20px] h-[20px] transition-all hover:opacity-50">
						<img src="/assets/icons/github.svg" alt="Github" />
					</a>
					<a
						href="/#"
						target="_blank"
						rel="noopener noreferrer"
						className="w-[20px] h-[20px] transition-all hover:opacity-50">
						<img
							src="/assets/icons/instagram.svg"
							alt="Instagram"
						/>
					</a>
					<a
						href="/#"
						target="_blank"
						rel="noopener noreferrer"
						className="w-[20px] h-[20px] transition-all hover:opacity-50">
						<img src="/assets/icons/codepen.svg" alt="Codepen" />
					</a>
					<a
						href="/#"
						target="_blank"
						rel="noopener noreferrer"
						className="w-[20px] h-[20px] transition-all hover:opacity-50">
						<img src="/assets/icons//linkedin.svg" alt="LinkedIn" />
					</a>
				</div>
			</section>

			<div className="hidden xl:flex absolute top-[40vh] md:right-16 lg:right-32">
				<div className="fixed">
					<SocialBar />
				</div>
			</div>

			{/* Featured Projects */}
			<Featured />

			{/* My Skills */}
			<MySkills />

			{/* Get In Touch */}
			<section className="flex flex-col items-start justify-start gap-8 bg-[#3b93ff29]/15 p-16 rounded-lg mb-48">
				<h2 className="text-2xl font-montserrat font-bold">
					Get in touch
				</h2>
				<p className="w-full max-w-[100%] md:max-w-[75%] md:text-left text-lg opacity-85">
					I'd love to hear from you! Whether you have a project in
					mind, a question, or just want to connect, feel free to
					reach out. You can contact me via email or through the
					contact form below.
				</p>
				<Button link="/contact" text="Contact Me" size="base" />
			</section>
		</>
	);
}
