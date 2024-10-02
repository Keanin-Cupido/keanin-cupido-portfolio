import { Outlet } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Root() {
	return (
		<>
			<svg
				className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
				width="100%"
				height="100%">
				<filter id="noise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.80"
						numOctaves="4"
						stitchTiles="stitch"></feTurbulence>
				</filter>
				<rect width="100%" height="100%" filter="url(#noise)"></rect>
			</svg>
			<main
				className="
				bg-primary-bg 
				text-secondary-bg 
				min-h-[100vh]
				w-full
				px-6
				py-12
			">
				<section className="w-full max-w-[1200px] mx-auto">
					<Navbar />
					<Outlet />
					<Footer />
				</section>
			</main>
		</>
	);
}
