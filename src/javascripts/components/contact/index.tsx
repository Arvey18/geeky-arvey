import React, {ReactElement} from 'react';

// styles
import './style.scss';

// data
import text from './data/text';

// interface
interface IProps {}

export default function Experience(props: IProps): ReactElement {

	return (
		<div className='section contact'>
			<div className='container'>
				<div className="section-header">
					<h2>{text.sectionTitle}</h2>
				</div>
			</div>
		</div>
	);
}
