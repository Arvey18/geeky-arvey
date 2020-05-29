import React, {ReactElement} from 'react';

// image
import Man from '../../../assets/images/arvey.png';

// styles
import './style.scss';

// data
import text from './data/text';

// interface
interface IProps {}

export default function About(props: IProps): ReactElement {
	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
		<div id="about" className='section about'>
			<div className='container'>
				<div className='section-header'>
					<h2>{text.sectionTitle}</h2>
				</div>
				<div className="content">
					<div className="content-image">
						<img src={Man} alt="profile"/>
					</div>
					<div className="content-text">
						<h4>{text.meTitle}</h4>
						<p>{text.meDescription[0]}</p>
						<p>{text.meDescription[1]}</p>
						<div className="content-contacts">
							<div>
								<div>
									<div className="contact-name">
										{text.meContacts[0].contactName}
									</div>
									<div className="contact-detail">
										{text.meContacts[0].contactDetail}
									</div>
								</div>
								<div>
									<div className="contact-name">
										{text.meContacts[1].contactName}
									</div>
									<div className="contact-detail">
										{text.meContacts[1].contactDetail}
									</div>
								</div>
							</div>
							<div>
								<div>
									<div className="contact-name">
										{text.meContacts[2].contactName}
									</div>
									<div className="contact-detail">
										{text.meContacts[2].contactDetail}
									</div>
								</div>
								<div>
									<div className="contact-name">
										{text.meContacts[3].contactName}
									</div>
									<div className="contact-detail">
										{text.meContacts[3].contactDetail}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
