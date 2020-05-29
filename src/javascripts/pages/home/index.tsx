import React, {ReactElement, Suspense, lazy } from 'react';

// styles
import './style.scss';

// components
import Loader from '../../components/loader';
const Navigation = lazy(() => import('../../components/navigation'));
const Header = lazy(() => import('../../components/header'));
const About = lazy(() => import('../../components/about'));
const Skills = lazy(() => import('../../components/skills'));
const Experience = lazy(() => import('../../components/experience'));
const Contact = lazy(() => import('../../components/contact'));
const Footer = lazy(() => import('../../components/footer'));
const Rocket = lazy(() => import('../../components/rocket'));

export default function Home(props: any): ReactElement {
	
	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div id='home'>	
			<Suspense fallback={<Loader />}>
				<Rocket />
				<Navigation />
				<Header />
				<About />
				<Skills />
				<Experience />
				<Contact />
				<Footer />
			</Suspense>
		</div>
	);
}
