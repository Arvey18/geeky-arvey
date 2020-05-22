import React, {ReactElement} from 'react';
import classNames from 'classnames';

// styles
import './style.scss';

// images
import logo from '../../../assets/images/logo-red.svg';

// data
import menus from './data/menus';

// interface
interface IProps {}

interface MenusType {
	menu: string;
	url: string;
}

export default function Navigation(props: IProps): ReactElement {
	// use effects
	React.useEffect(() => {
		document.addEventListener('scroll', handleScrollEvent);
		return () => {
			document.removeEventListener('scroll', handleScrollEvent);
		};
	}, []);

	const handleScrollEvent = () => {
		const scroll = window.scrollY;
		console.log(scroll);
	};

	return (
		<div className={classNames('navigation flex-row')}>
			<div className='container'>
				<div className='logo-wrapper'>
					<img className='logo' src={logo} alt='logo' />
				</div>
				<div className='menus-wrapper'>
					{menus.map((val: MenusType, key: number) => (
						<div className={classNames(key === 0 && 'active')} key={key}>
							{val.menu}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
