import React, {ReactElement} from 'react';

// styles
import './style.scss';

// components
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import About from '../../components/about';
import Skills from '../../components/skills';
import Experience from '../../components/experience';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import Rocket from '../../components/rocket';

export default function Home(props: any): ReactElement {
	return (
		<div id='home'>
			<Rocket />
			<Navigation />
			<Header />
			<About />
			<Skills />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}
