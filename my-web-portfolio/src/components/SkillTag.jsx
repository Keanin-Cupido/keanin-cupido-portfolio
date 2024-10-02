export default function SkillTag({ name, description }) {
	return (
		<div
			className={`w-full h-48 flex items-center justify-center gap-4 p-8 rounded-lg shadow-md relative z-0 text-center group`}>
			<div
				className={`absolute opacity-35 z-1 w-full h-full rounded-lg`}></div>
			<div className="absolute bg-gradient-to-t from-slate-950 to-transparent transition-all duration-300 opacity-45 group-hover:opacity-75 z-2 w-full h-full rounded-lg"></div>
			<span className="absolute z-3 flex items-center justify-start gap-2 text-base group-hover:opacity-5 transition-all duration-500">
				<span className="nabla">{name[0]}</span>
				<span className="font-signika-negative font-bold text-lg">
					{name.slice(1)}
				</span>{' '}
			</span>
			<p className="text-center transition-all duration-700 opacity-0 group-hover:opacity-85 leading-[1.5]">
				{description}
			</p>
		</div>
	);
}
