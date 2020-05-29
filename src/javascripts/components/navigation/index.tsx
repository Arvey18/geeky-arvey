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

	// variable
	let lastScrollTop = 0;

	// use effects
	React.useEffect(() => {
		document.addEventListener('scroll', handleScrollEvent);
		return () => {
			document.removeEventListener('scroll', handleScrollEvent);
		};
	});

	// custom functions
	const handleScrollEvent = () => {
		const scroll = window.scrollY;
		let st = window.pageYOffset || document.documentElement.scrollTop;
		const element = document.getElementById('navigation'); 
		if(element !== null){
			if(scroll !== 0){
				if (st > lastScrollTop){
					element.classList.remove('show');
					element.classList.add('hide');
				} else {
					element.classList.remove('hide');
					element.classList.add('show');
				}
				lastScrollTop = st <= 0 ? 0 : st;
			}else{
				element.classList.remove('show');
				element.classList.remove('hide');
				element.classList.remove('with-bg');
			}

			if(scroll > 400){
				element.classList.add('with-bg');
			}
		}
	};

	return (
		<div id="navigation" className={classNames('navigation flex-row')}>
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
