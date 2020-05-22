import React, {ReactElement} from 'react';

// styles
import './style.scss';

// components
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import About from '../../components/about';
import Skills from '../../components/skills';

export default function Home(props: any): ReactElement {
	return (
		<div id='home'>
			<Navigation />
			<Header />
			<About />
			<Skills />
		</div>
	);
}
