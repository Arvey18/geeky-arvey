import React, {ReactElement} from 'react';

// images
import LoaderImage from '../../../assets/images/loader.svg';

// styles
import './style.scss';

export default function Loader(): ReactElement {
	return (
		<div className='loader'>
			<img src={LoaderImage} alt="loader" />
		</div>
	);
}
