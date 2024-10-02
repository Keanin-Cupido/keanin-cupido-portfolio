import React from 'react';
import { NavLink } from 'react-router-dom';

// images
import Logo from '/keanincupido.svg';

export default function Footer() {
	return (
		<footer className="w-full flex flex-col items-center justify-center gap-8 mb-16">
			<NavLink to="/">
				<span className="nabla-logo-k">K</span>
				<span className="nabla-logo-c">C</span>
			</NavLink>
			<nav className="flex items-center justify-center gap-4">
				<ul className="flex flex-col sm:flex-row items-center justify-center gap-8">
					<li>
						<NavLink to="/" exact className="hover:underline">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="hover:underline">
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/portfolio" className="hover:underline">
							Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink to="/blog">
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
					</li>
					<li>
						<NavLink to="/contact" className="hover:underline">
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
			<hr className="w-full my-8 border-t border-white opacity-5" />
			<p className="text-sm opacity-50 text-center">
				&copy; {new Date().getFullYear()} Keanin Cupido. All rights
				reserved.
			</p>
		</footer>
	);
}
