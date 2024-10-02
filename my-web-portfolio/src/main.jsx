import * as React from 'react';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// css
import './index.css';

// fonts
import '@fontsource/poppins';
import '@fontsource-variable/signika-negative';
import '@fontsource-variable/montserrat';

// pages
import Root from './pages/Root.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/Error.jsx';
import FallBack from './pages/FallBack.jsx';
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/portfolio',
				element: <Portfolio />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/projects/:slug',
				element: <ProjectDetails />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<FallBack />}>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>,
);
