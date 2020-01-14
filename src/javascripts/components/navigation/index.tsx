import React, {ReactElement} from 'react';
import classNames from 'classnames';

// styles
import './style.scss';

// images
import logoBlack from '../../../assets/images/geeky-arvey-logo-black.png';
import logo from '../../../assets/images/geeky-arvey-logo.png';

// variables
interface IProps {
  open: boolean;
  handleNavPanel: (status: boolean) => void;
}

export default function Navigation(props: IProps): ReactElement {
  // variables
  const {open, handleNavPanel} = props;

  // use states
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);

  // use effects
  React.useEffect(() => {
    document.addEventListener('load', handleScrollEvent);
    document.addEventListener('scroll', handleScrollEvent);
    return () => {
      document.removeEventListener('load', handleScrollEvent);
      document.removeEventListener('scroll', handleScrollEvent);
    };
  });

  React.useEffect(() => {
    setOpenNav(open);
  }, [open]);

  // custom functions
  const handleNav = () => {
    // setOpenNav(!openNav);
    handleNavPanel(!openNav);
  };

  const handleScrollEvent = () => {
    let scroll = window.scrollY;
    if (scroll >= 90) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

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

  const handleReturnHome = (element: any, duration: number, delay: number) => {
    handleNavPanel(false);
    setTimeout(() => {
      doScrolling(element, duration);
    }, delay);
  };

  return (
    <div
      className={classNames(
        'flex-row navigation ',
        scrolling === true ? 'scrolling' : '',
        openNav === true ? 'nav-opened' : ''
      )}
    >
      <div className="flex-one flex-center-vertical logo">
        <img
          className={classNames(openNav === false ? 'active-logo' : '')}
          src={logo}
          alt="logo-arvey-jimenez"
          onClick={() => handleReturnHome('#hero', 600, 0)}
        />
        <img
          className={classNames(openNav === true ? 'active-logo' : '')}
          src={logoBlack}
          alt="logo-black-arvey-jimenez"
          onClick={() => handleReturnHome('#hero', 600, 350)}
        />
      </div>
      <div className="flex-one flex-center-vertical hamburger-menu">
        <div
          className={classNames(
            'hamburger',
            openNav === true ? 'black-hamburger' : ''
          )}
          onClick={handleNav}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
