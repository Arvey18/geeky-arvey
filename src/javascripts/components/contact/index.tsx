import React, {ReactElement} from 'react';

// styles
import './style.scss';

// data
import text from './data/text';

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

		console.log(recaptcha);
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
		<div className='section contact'>
			<div className='container'>
				<div className="section-header">
					<h2>{text.sectionTitle}</h2>
				</div>
			</div>
		</div>
	);
}
