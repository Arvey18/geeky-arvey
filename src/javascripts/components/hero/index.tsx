import React, {ReactElement} from 'react';
import classNames from 'classnames';

// styles
import './style.scss';

export default function Hero(props: any): ReactElement {
  const [showText, setShowText] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500);
  });
  return (
    <div id="hero" className="flex-center-all hero">
      <div className="overlay" />
      <div
        className={classNames('text-center hero-text', showText ? 'show' : '')}
      >
        <h3 className="color-gold hero-pre">Gamer, Traveler,</h3>
        <h1 className="color-white hero-title">Web Developer</h1>
        <h3 className="color-gold hero-name">ArveyJ.07</h3>
      </div>
    </div>
  );
}
