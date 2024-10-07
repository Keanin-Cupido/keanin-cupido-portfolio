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

			{/* New gradient background with concentric circles */}
			<svg
				className="w-full pointer-events-none left-0 bottom-0 fixed opacity-50 inset-0 z-0"
				width="100%"
				height="100%">
				<defs>
					<radialGradient
						id="blueGradient"
						cx="50%"
						cy="50%"
						r="50%"
						fx="50%"
						fy="50%">
						<stop
							offset="0%"
							style={{
								stopColor: 'rgba(0, 98, 255, 0.4)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="25%"
							style={{
								stopColor: 'rgba(0, 98, 255, 0.3)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="50%"
							style={{
								stopColor: 'rgba(0, 98, 255, 0.1)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="75%"
							style={{
								stopColor: 'rgba(0, 98, 255, 0.05)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="100%"
							style={{
								stopColor: 'rgba(0, 98, 255, 0)',
								stopOpacity: 1,
							}}
						/>
					</radialGradient>
				</defs>
				<circle cx="50%" cy="0%" r="100%" fill="url(#blueGradient)" />
				{/* <circle cx="0" cy="0" r="50%" fill="url(#redGradient)" /> */}
				{/* <circle cx="100%" cy="100%" r="50%" fill="url(#redGradient)" /> */}
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
