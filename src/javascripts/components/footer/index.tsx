import React, {ReactElement} from 'react';

// image
import logoRed from '../../../assets/images/logo-red.svg';

// styles
import './style.scss';

// interface
interface IProps {}

export default function Footer(props: IProps): ReactElement {

	// variables
	const date = new Date();
	const year = date.getFullYear();

	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='footer'>
			<div className='container'>
				Copyright	© {year} <img src={logoRed} alt="logo" />. All rights reserved.
			</div>
		</div>
	);
}
