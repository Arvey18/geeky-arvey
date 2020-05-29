import React, {ReactElement} from 'react';
import classNames from 'classnames';

// styles
import './style.scss';

// data
import text from './data/text';

// interface
interface IProps {}

export default function Skills(props: IProps): ReactElement {

	return (
		<div className='section skills'>
			<div className='container'>
				<div className="content">
					<div className="content-text">
						<div className="pre-title">{text.preTitle}</div>
						<div className="title">{text.title}</div>
						<div className="description">{text.description}</div>
						<button>{text.button}</button>
					</div>
					<div className="content-skills">
						{
							text.skills.map((val: any, key: number) => 
							<div key={key} className="skill-block">
								<div className="skill-name">{val.skill}</div>
								<div className={classNames("skill-line", "p" + val.percentage)}>
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
