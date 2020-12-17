import React, {ReactElement} from 'react';
import classNames from 'classnames';

// utils
import doScrolling from '../../utils/scrollToSection';
import isElementInViewport from '../../utils/isElementOnViewport';

// styles
import './style.scss';

// images
import logo from '../../../assets/images/logo-red.svg';
import closeIcon from '../../../assets/images/close-icon.svg';

// data
import menus from './data/menus';

// interface
interface IProps {
	showNavMenu: boolean;
	setShowNavMenu: (status: boolean) => void;
}

interface MenusType {
	id: string;
	menu: string;
	url: string;
	target: string;
	duration: number;
}

export default function MobileNavigation(props: IProps): ReactElement {
	// variable
	let lastScrollTop = 0;
	const {showNavMenu, setShowNavMenu} = props;

	// use effects
	React.useEffect(() => {
		window.addEventListener('scroll', handleScrollEvent);
		window.addEventListener('load', handleLoadEvent);
		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
			window.removeEventListener('load', handleLoadEvent);
		};
	});

	React.useEffect(() => {
		setShowNav(showNavMenu);
	}, [showNavMenu]);

	// use states
	const [showNav, setShowNav] = React.useState(false);

	// custom functions
	const handleScrollEvent = () => {
		const scroll = window.scrollY;
		let st = window.pageYOffset || document.documentElement.scrollTop;
		const element = document.getElementById('navigation');
		if (element !== null) {
			if (scroll !== 0) {
				if (st > lastScrollTop) {
					element.classList.remove('show');
					element.classList.add('hide');
				} else {
					element.classList.remove('hide');
					element.classList.add('show');
				}
				lastScrollTop = st <= 0 ? 0 : st;
			} else {
				element.classList.remove('show');
				element.classList.remove('hide');
				element.classList.remove('with-bg');
			}

			if (scroll > 400) {
				element.classList.add('with-bg');
			}
		}

		for (let x = 0; x < menus.length; x++) {
			const el = document.querySelector(menus[x].target);
			if (isElementInViewport(el)) {
				const menuEl = document.getElementById(menus[x].id);
				const menuEls = document.querySelectorAll('#' + menus[x].id);
				const menusNav = document.getElementsByClassName('menus-nav-mobile');
				if (menuEl !== null && el !== null) {
					const animateEl = el.querySelectorAll('.animate-it');
					for (let i = 0; i < animateEl.length; i++) {
						const animation = animateEl[i].getAttribute('data-animation');
						if (animation !== null) {
							if (!animateEl[i].classList.contains(animation)) {
								animateEl[i].classList.add('animate__animated', animation);
							}
						}
					}

					for (let y = 0; y < menusNav.length; y++) {
						menusNav[y].classList.remove('active');
						if (y + 1 === menusNav.length) {
							menuEl.classList.add('active');
							menuEls[1].classList.add('active');
							break;
						}
					}
					break;
				}
			}
		}
	};

	const handleLoadEvent = () => {
		const scroll = window.scrollY;
		let st = window.pageYOffset || document.documentElement.scrollTop;
		const element = document.getElementById('navigation');
		if (element !== null) {
			if (scroll !== 0) {
				if (st > lastScrollTop) {
					element.classList.remove('show');
					element.classList.add('hide');
				} else {
					element.classList.remove('hide');
					element.classList.add('show');
				}
				lastScrollTop = st <= 0 ? 0 : st;
			} else {
				element.classList.remove('show');
				element.classList.remove('hide');
				element.classList.remove('with-bg');
			}

			if (scroll > 400) {
				element.classList.add('with-bg');
			}
		}

		for (let x = 0; x < menus.length; x++) {
			const el = document.querySelector(menus[x].target);
			if (isElementInViewport(el)) {
				const menuEl = document.getElementById(menus[x].id);
				const menusNav = document.getElementsByClassName('menus-nav-mobile');
				if (menuEl !== null && el !== null) {
					const animateEl = el.querySelectorAll('.animate-it');

					for (let i = 0; i < animateEl.length; i++) {
						const animation = animateEl[i].getAttribute('data-animation');
						if (animation !== null) {
							if (!animateEl[i].classList.contains(animation)) {
								animateEl[i].classList.add('animate__animated', animation);
							}
						}
					}

					for (let y = 0; y < menusNav.length; y++) {
						menusNav[y].classList.remove('active');
						if (y + 1 === menusNav.length) {
							menuEl.classList.add('active');
							break;
						}
					}
					break;
				}
			}
		}
	};

	const handleNavClick = (id: string, duration: number) => {
		doScrolling(id, duration);
		handleShowNav(false);
	};

	const handleShowNav = (status: boolean) => {
		setShowNavMenu(status);
	};

	return (
		<div id='mobile-navigation' className={classNames('mobile-navigation', showNav && 'active')}>
			<div className='logo-container'>
				<img src={logo} alt='geeky-arvey-logo' className='logo' />
			</div>
			<div className='close-icon-container'>
				<img onClick={() => handleShowNav(false)} src={closeIcon} alt='close-icon' />
			</div>
			<div className='menu-wrapper'>
				{menus.map((val: MenusType, key: number) => (
					<div
						id={val.id}
						onClick={() => handleNavClick(val.target, val.duration)}
						className={classNames('menus-nav menus-nav-mobile', key === 0 && 'active')}
						key={key}
					>
						{val.menu}
					</div>
				))}
			</div>
		</div>
	);
}
