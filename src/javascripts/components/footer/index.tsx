import React, {ReactElement} from 'react';

// image
import logoRed from '../../../assets/images/logo-red.svg';

// styles
import './style.scss';

// interface
interface IProps {}

export default function Footer(props: IProps): ReactElement {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className='footer'>
			<div className='container'>
				Copyright	© {year} <img src={logoRed} alt="logo" />. All rights reserved.
			</div>
		</div>
	);
}
