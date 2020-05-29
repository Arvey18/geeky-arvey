import React, {ReactElement} from 'react';
import classNames from 'classnames';

// styles
import './style.scss';

// data
import text from './data/text';

// interface
interface IProps {}

export default function Experience(props: IProps): ReactElement {
	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});
	
	return (
		<div id="experience" className='section experience'>
			<div className='container'>
				<div className="section-header">
					<h2>{text.sectionTitle}</h2>
				</div>
				<div className="experiences">
					{
						text.experiences.map((val: any, key: number) => 
							<div key={key} className={classNames("experience-block", key % 2 === 0 && 'right')}>
								<div>
									<div className="year">{val.year}</div>
									<div className="company">{val.company}</div>
									<div className="role">{val.role}</div>
									<div className="job">{val.job}</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	);
}
