import React, {ReactElement} from 'react';

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
						<div className="pre-title">I'M EXPERT ON</div>
						<div className="title">Let's Work Together</div>
						<div className="description">I mainly work on front-end using tech stack html, css, javasccript. I do also know working on CMS like wordpress and JavaScript framework ReactJS. I'm Git for versioning tool, Jira for task management and InVision, Sketch for UI reference.  Listed on the right are the most im comfortable creating website or web app.</div>
						<button>Contact Me</button>
					</div>
					<div className="content-skills">
						<div className="skill-block">
							<div className="skill-name">HTML</div>
							<div className="skill-line p95">
								<div className="skill-label">95%</div>
							</div>
						</div>
						<div className="skill-block">
							<div className="skill-name">JavaScript</div>
							<div className="skill-line p90">
								<div className="skill-label">90%</div>
							</div>
						</div>
						<div className="skill-block">
							<div className="skill-name">CSS</div>
							<div className="skill-line p93">
								<div className="skill-label">93%</div>
							</div>
						</div>
						<div className="skill-block">
							<div className="skill-name">Wordpress</div>
							<div className="skill-line p88">
								<div className="skill-label">88%</div>
							</div>
						</div>
						<div className="skill-block">
							<div className="skill-name">ReactJS</div>
							<div className="skill-line p93">
								<div className="skill-label">93%</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
