import React, {ReactElement} from 'react';

// styles
import './style.scss';

// interface
interface IProps {}

export default function Rocket(props: IProps): ReactElement {
	// use effects
	React.useEffect(() => {
		document.addEventListener('scroll', handleScrollEvent);
		return () => {
			document.removeEventListener('scroll', handleScrollEvent);
		};
	}, []);

	// custom functions
	const handleScrollEvent = () => {
		const scroll = window.scrollY;
		const element = document.getElementsByClassName('rocket');
		if(scroll >= 500){
			element[0].classList.add('show');
		}else{
			element[0].classList.remove('show');
		}
	};
	return (
		<div className='rocket'>
			<i className="fas fa-rocket"></i>
		</div>
	);
}
