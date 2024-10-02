export default function SocialBar() {
	return (
		<div className="flex flex-col items-center gap-6 px-4 py-8 bg-gray-600/10 rounded-lg shadow-lg">
			<a
				href="/#"
				target="_blank"
				rel="noopener noreferrer"
				className="w-[20px] h-[20px] transition-all hover:opacity-50 hover:scale-90">
				<img src="/assets/icons/github.svg" alt="Github" />
			</a>
			<a
				href="/#"
				target="_blank"
				rel="noopener noreferrer"
				className="w-[20px] h-[20px] transition-all hover:opacity-50 hover:scale-90">
				<img src="/assets/icons/instagram.svg" alt="Instagram" />
			</a>
			<a
				href="/#"
				target="_blank"
				rel="noopener noreferrer"
				className="w-[20px] h-[20px] transition-all hover:opacity-50 hover:scale-90">
				<img src="/assets/icons/codepen.svg" alt="Codepen" />
			</a>
			<a
				href="/#"
				target="_blank"
				rel="noopener noreferrer"
				className="w-[20px] h-[20px] transition-all hover:opacity-50 hover:scale-90">
				<img src="/assets/icons//linkedin.svg" alt="LinkedIn" />
			</a>
		</div>
	);
}
