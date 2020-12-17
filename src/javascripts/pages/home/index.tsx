import React, {ReactElement, Suspense, lazy} from 'react';

// styles
import './style.scss';

// components
import Loader from '../../components/loader';
const Navigation = lazy(() => import('../../components/navigation'));
const MobileNavigation = lazy(() => import('../../components/mobileNavigation'));
const Header = lazy(() => import('../../components/header'));
const About = lazy(() => import('../../components/about'));
const Skills = lazy(() => import('../../components/skills'));
const Experience = lazy(() => import('../../components/experience'));
const Contact = lazy(() => import('../../components/contact'));
const Footer = lazy(() => import('../../components/footer'));
const Rocket = lazy(() => import('../../components/rocket'));

export default function Home(props: any): ReactElement {
	// use states
	const [showNav, setShowNav] = React.useState(false);

	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// custom functions
	const handleShowNav = (status: boolean) => {
		setShowNav(status);
	};

	return (
		<div id='home'>
			<Suspense fallback={<Loader />}>
				<Rocket />
				<Navigation showNavMenu={showNav} setShowNavMenu={(status: boolean) => handleShowNav(status)} />
				<MobileNavigation showNavMenu={showNav} setShowNavMenu={(status: boolean) => handleShowNav(status)} />
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
