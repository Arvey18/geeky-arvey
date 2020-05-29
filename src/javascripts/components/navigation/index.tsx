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
  const getElementY = (query: any) => {
    return (
      window.pageYOffset +
      document.querySelector(query).getBoundingClientRect().top
    );
  };

  const doScrolling = (element: any, duration: number) => {
    let startingY = window.pageYOffset;
    let elementY = getElementY(element);
    // If element is close to page's bottom then window will scroll only to some position above the element.
    let targetY =
      document.body.scrollHeight - elementY < window.innerHeight
        ? document.body.scrollHeight - window.innerHeight
        : elementY;
    let diff = targetY - startingY;
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    let easing = (t: any) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    let start = 0;

    if (!diff) return;

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      // Elapsed miliseconds since start of scrolling.
      let time = timestamp - start;
      // Get percent of completion in range [0, 1].
      let percent = Math.min(time / duration, 1);
      // Apply the easing.
      // It can cause bad-looking slow frames in browser performance tool, so be careful.
      percent = easing(percent);

      window.scrollTo(0, startingY + diff * percent);

      // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
	};
	
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

	const handleNavClick = (id) = {

	}

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
