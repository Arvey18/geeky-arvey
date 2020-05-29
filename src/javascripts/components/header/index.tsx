import React, {ReactElement} from 'react';
import doScrolling from '../../utils/scrollToSection';

// images
import Man from '../../../assets/images/arvey.png';

// styles
import './style.scss';

// data
import text from './data/text';
import socialLinks from './data/socialLinks';

// interface
interface socialLinksType {
	icon: any;
	url: string;
}

export default function Header(): ReactElement {
	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div id="header" className='header'>
			<div className='container'>
				<div className='content'>
					<div className='social-links'>
						{socialLinks.map((val: socialLinksType, key: number) => (
							<a href={val.url} target='_blank' rel='noopener noreferrer' key={key}>
								<i className={val.icon}></i>
							</a>
						))}
						<div></div>
					</div>
					<div className='title'>{text.title}</div>
					<div className='description'>{text.description}</div>
					<div className='cta'>
						<button onClick={() => doScrolling('#contact', 600)}>{text.button}</button>
					</div>
				</div>
				<div className='content-image'>
					<img src={Man} alt='profile' />
				</div>
			</div>
		</div>
	);
}
