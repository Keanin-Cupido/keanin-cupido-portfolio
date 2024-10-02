import { NavLink, useRouteError } from 'react-router-dom';
import Button from '../components/Button';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="flex flex-col gap-8 items-center justify-center h-screen bg-[#030516] text-secondary-bg">
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
			<div className="text-center flex flex-col items-center justify-center gap-4">
				<h1 className="text-10xl font-bold font-['Wosker']">OOPS!</h1>
				<p className="text-3xl">
					Sorry, an unexpected error has occurred.
				</p>
				<p className="text-xl opacity-60">
					<i>{error.statusText || error.message}</i>
				</p>
			</div>

			<Button link="/" size="sm" text="Back" />
		</div>
	);
}
