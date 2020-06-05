import React, {ReactElement} from 'react';
import classNames from 'classnames';
import doScrolling from '../../utils/scrollToSection';

// styles
import './style.scss';

// data
import text from './data/text';

// interface
interface IProps {}

export default function Skills(props: IProps): ReactElement {
	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div id="skills" className='section skills'>
			<div className='container'>
				<div className="content">
					<div className="content-text">
						<div className="pre-title">{text.preTitle}</div>
						<div className="title">{text.title}</div>
						<div className="description">{text.description}</div>
						<button onClick={() => doScrolling('#contact', 600)}>{text.button}</button>
					</div>
					<div className="content-skills">
						{
							text.skills.map((val: any, key: number) => 
							<div key={key} className="skill-block">
								<div className="skill-name">{val.skill}</div>
								<div data-animation="expand" className={classNames("skill-line animate-it", "p" + val.percentage)}>
									<div className="skill-label">{val.percentage}%</div>
								</div>
							</div>	
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}
