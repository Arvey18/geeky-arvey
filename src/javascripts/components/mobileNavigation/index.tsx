import React, {ReactElement} from 'react';
import classNames from 'classnames';

// utils
import doScrolling from '../../utils/scrollToSection';
import isElementInViewport from '../../utils/isElementOnViewport';

// styles
import './style.scss';

// images
import logo from '../../../assets/images/logo-red.svg';

// data
import menus from './data/menus';

// interface
interface IProps {}

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

	// use effects
	React.useEffect(() => {
		window.addEventListener('scroll', handleScrollEvent);
		window.addEventListener('load', handleLoadEvent);
		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
			window.removeEventListener('load', handleLoadEvent);
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
		
		for(let x = 0; x < menus.length; x++) {
			const el = document.querySelector(menus[x].target);
			if(isElementInViewport(el)){
				const menuEl = document.getElementById(menus[x].id);
				const menusNav = document.getElementsByClassName('menus-nav');
				if(menuEl !== null && el !== null){
					const animateEl = el.querySelectorAll('.animate-it');
					
					for (let i = 0; i < animateEl.length; i++) {
						const animation = animateEl[i].getAttribute('data-animation');
						if (animation !== null){
							if(!animateEl[i].classList.contains(animation)){
								animateEl[i].classList.add('animate__animated', animation);
							}
						}
					}

					for(let y = 0; y < menusNav.length; y++) {
						menusNav[y].classList.remove('active');
						if((y + 1) === menusNav.length){
							menuEl.classList.add('active');
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
		
		for(let x = 0; x < menus.length; x++) {
			const el = document.querySelector(menus[x].target);
			if(isElementInViewport(el)){
				const menuEl = document.getElementById(menus[x].id);
				const menusNav = document.getElementsByClassName('menus-nav');
				if(menuEl !== null && el !== null){
					const animateEl = el.querySelectorAll('.animate-it');
					
					for (let i = 0; i < animateEl.length; i++) {
						const animation = animateEl[i].getAttribute('data-animation');
						if (animation !== null){
							if(!animateEl[i].classList.contains(animation)){
								animateEl[i].classList.add('animate__animated', animation);
							}
						}
					}

					for(let y = 0; y < menusNav.length; y++) {
						menusNav[y].classList.remove('active');
						if((y + 1) === menusNav.length){
							menuEl.classList.add('active');
							break;
						}
					}
					break;
				}
			}
		}
	}

	const handleNavClick = (id: string, duration: number) => {
		doScrolling(id, duration);
	}

	return (
		<div id="mobile-navigation" className={classNames('mobile-navigation flex-row')}>
			
		</div>
	);
}
