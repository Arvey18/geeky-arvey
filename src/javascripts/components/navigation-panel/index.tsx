import React, {ReactElement} from 'react';
import classNames from 'classnames';

// styles
import './style.scss';

interface IProps {
  open: boolean;
  handleNavPanel: (status: boolean) => void;
}

export default function NavigationPanel(props: IProps): ReactElement {
  // variables
  const {open, handleNavPanel} = props;

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

  const handleMenu = (event: any, element: any, duration: number) => {
    event.preventDefault();
    handleNavPanel(false);
    setTimeout(() => {
      doScrolling(element, duration);
    }, 350);
  };

  return (
    <div
      className={classNames('navigation-panel', open === true ? 'active' : '')}
    >
      <ul>
        <li className="left">
          <a href="#hero" onClick={event => handleMenu(event, '#hero', 600)}>
            Home
          </a>
        </li>
        <li className="right">
          <a
            href="#expertise"
            onClick={event => handleMenu(event, '#expertise', 600)}
          >
            Expertise
          </a>
        </li>
        <li className="left">
          <a
            href="#experience"
            onClick={event => handleMenu(event, '#experience', 600)}
          >
            Experience
          </a>
        </li>
        <li className="right">
          <a
            href="#contact"
            onClick={event => handleMenu(event, '#contact', 600)}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
