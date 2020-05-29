import React, {ReactElement} from 'react';
import classNames from 'classnames';
import {sendFeedback, refreshRecaptcha} from './email-sender';

// styles
import './style.scss';

// data
import text from './data/text';

// images
import Loader from '../../../assets/images/loader.svg';

// interface
interface IProps {}

export default function Experience(props: IProps): ReactElement {

	// use states
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [message, setMessage] = React.useState('');

	const [errorEmail, setErrorEmail] = React.useState(false);
	const [reqFields, setReqFields] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState('');
	const [successMessage, setSuccessMessage] = React.useState(false);
	const [sending, setSending] = React.useState(false);

	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// custom functions
	const validateEmail = (email: string) => {
		// eslint-disable-next-line
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const handleFormFields = (event: any, fieldName: string) => {
		const val = event.target.value;
		if (fieldName === 'name') {
			setName(val);
		}

		if (fieldName === 'email') {
			setEmail(val);
			if (validateEmail(val)) {
				setErrorEmail(false);
				setErrorMessage('');
			} else {
				setErrorEmail(true);
				setErrorMessage('Invalid Email Address');
			}
		}

		if (fieldName === 'phone') {
			setPhone(val);
		}

		if (fieldName === 'message') {
			setMessage(val);
		}
	};

	const resetField = () => {
		setName('');
		setEmail('');
		setPhone('');
		setMessage('');
		setErrorEmail(false);
		setReqFields(false);
		setErrorMessage('');
		setSuccessMessage(false);
		setSending(false);
		refreshRecaptcha();
		localStorage.setItem('recaptcha', '');
	};

	const handleSubmit = async () => {
		let recaptcha = localStorage.getItem('recaptcha');
		
		if (name !== '' && email !== '') {
			const templateId = 'my_website';
			setSending(true);
			if (recaptcha === '') {
				setSuccessMessage(false);
				setSending(false);
				setErrorMessage('Please click Recaptcha');
			} else {
				sendFeedback(templateId, {
					name: name,
					email: email,
					phone: phone,
					message: message,
					'g-recaptcha-response': recaptcha,
				}).then((res: string) => {
					if (res === 'OK') {
						setReqFields(false);
						setErrorMessage('');
						setSuccessMessage(true);
						setSending(false);
						setTimeout(() => {
							resetField();
						}, 5000);
					} else {
						setSuccessMessage(false);
						setSending(false);
						setErrorMessage('Error Occured. Please Try Again!');
					}
				});
			}
		} else {
			setReqFields(true);
			setErrorMessage('Fill in Required Fields');
			setSuccessMessage(false);
		}
	};

	return (
		<div id="contact" className='section contact'>
			<div className='container'>
				<div className="section-header">
					<h2>{text.sectionTitle}</h2>
					<p>{text.sectionDescription}</p>
				</div>
				<div className="content">
					<div className="one form-fields">
						<div
							className={classNames(
								'form-field-group',
								sending && 'sending-form'
							)}
						>
							<div className={classNames("form-loader", sending && 'sending-form')}>
								<img src={Loader} alt="form-loader" />
							</div>
							<div className="flex-row">
								<div className="flex-one">
									<div
										className={classNames(
											'input-con',
											reqFields && name === '' ? 'error' : '',
											sending ? 'sending' : ''
										)}
									>
										<input
											value={name}
											onChange={event => handleFormFields(event, 'name')}
											type="text"
											placeholder="Name *"
											disabled={sending}
										/>
									</div>
								</div>
								<div className="flex-one">
									<div
										className={classNames(
											'input-con',
											errorEmail || (reqFields && email === '') ? 'error' : '',
											sending ? 'sending' : ''
										)}
									>
										<input
											value={email}
											onChange={event => handleFormFields(event, 'email')}
											type="email"
											placeholder="Email *"
											disabled={sending}
										/>
									</div>
								</div>
							</div>
							<div className={classNames('input-con', sending ? 'sending' : '')}>
								<input
									value={phone}
									onChange={event => handleFormFields(event, 'phone')}
									type="text"
									placeholder="Phone"
									disabled={sending}
								/>
							</div>
							<div
								className={classNames(
									'input-con no-margin',
									sending ? 'sending' : ''
								)}
							>
								<textarea
									value={message}
									onChange={event => handleFormFields(event, 'message')}
									placeholder="Message"
									disabled={sending}
								/>
							</div>
						</div>
						<div className="input-con">
							<div id="recaptchaCon" data-size="normal"></div>
						</div>
						<div className="flex-row form-buttons">
							<div className="flex-one">
								<div className="button-con">
									<div
										onClick={handleSubmit}
										className={classNames(
											'submit-button',
											sending ? 'sending-form' : ''
										)}
									>
										Send
									</div>
								</div>
							</div>
							<div className="flex-one">
								<div className="resume-button-con">
									<a
										className="resume"
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.dropbox.com/s/nxhz3k66lkl3ng1/Resume%20-%20Arvey%20Jimenez.docx?dl=0"
									>
										Download Resume
									</a>
								</div>
							</div>
						</div>
						<div
							className={classNames(
								'form-message error-message',
								errorMessage !== '' ? 'show' : ''
							)}
						>
							{errorMessage}
						</div>
						<div
							className={classNames(
								'form-message success-message',
								successMessage ? 'show' : ''
							)}
						>
							Your Message was successfully sent!
							<br />
							Have a great Day!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
