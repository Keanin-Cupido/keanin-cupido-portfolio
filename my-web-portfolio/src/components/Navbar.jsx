import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	function onClickHamburger() {
		setShowMenu(!showMenu);
	}
	function onClickCloseHamburger() {
		setShowMenu(false);
	}

	function activeLink(isActive) {
		return isActive ? 'text-main-identity-light font-bold' : '';
	}

	return (
		<>
			<nav className="w-full flex items-center justify-between text-secondary-bg">
				<p className="text-lg font-signika-negative">
					<NavLink
						to="/"
						className={({ isActive }) => activeLink(isActive)}
						onClick={() => onClickCloseHamburger()}>
						<span className="nabla-logo-k">K</span>
						<span className="nabla-logo-c">C</span>
					</NavLink>
				</p>
				<div className="hidden md:flex space-x-8">
					<NavLink
						to="/about"
						className={({ isActive }) => activeLink(isActive)}>
						<span className="hover:underline">About</span>
					</NavLink>
					<NavLink
						to="/portfolio"
						className={({ isActive }) => activeLink(isActive)}>
						<span className="hover:underline">Portfolio</span>
					</NavLink>
					<NavLink
						to="/blog"
						className={({ isActive }) => activeLink(isActive)}>
						<span className="flex gap-1 items-center justify-center hover:underline">
							Blog
							<span>
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
						</span>
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => activeLink(isActive)}>
						<span className="hover:underline">Get In Touch</span>
					</NavLink>
				</div>

				<div className="md:hidden">
					<button
						id="hamburger"
						className="focus:outline-none"
						onClick={() => onClickHamburger()}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7"></path>
						</svg>
					</button>
				</div>
			</nav>

			<div
				id="menu"
				className={`transition-all bg-[#3b93ff35] py-8 px-4 mt-4 rounded-lg ${
					showMenu ? '' : 'hidden'
				} md:hidden`}>
				<NavLink
					to="/"
					className={({ isActive }) => activeLink(isActive)}
					onClick={() => onClickHamburger()}>
					<span className="block p-2 rounded-lg hover:bg-[#3b93ff17]">
						Home
					</span>
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => activeLink(isActive)}
					onClick={() => onClickHamburger()}>
					<span className="block p-2 rounded-lg hover:bg-[#3b93ff17]">
						About
					</span>
				</NavLink>
				<NavLink
					to="/portfolio"
					className={({ isActive }) => activeLink(isActive)}
					onClick={() => onClickHamburger()}>
					<span className="block p-2 rounded-lg hover:bg-[#3b93ff17]">
						Portfolio
					</span>
				</NavLink>
				<NavLink
					to="/blog"
					className={({ isActive }) => activeLink(isActive)}
					onClick={() => onClickHamburger()}>
					<span className="p-2 rounded-lg hover:bg-[#3b93ff17] flex gap-1 items-center justify-start">
						Blog
						<span>
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
					</span>
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) => activeLink(isActive)}
					onClick={() => onClickHamburger()}>
					<span className="block p-2 rounded-lg hover:bg-[#3b93ff17]">
						Get In Touch
					</span>
				</NavLink>
			</div>
		</>
	);
}
