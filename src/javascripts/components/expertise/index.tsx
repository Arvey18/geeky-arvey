import React, {ReactElement, useRef} from 'react';

// styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.scss';

// images
import BootstrapLogo from '../../../assets/images/bootstrap-logo.png';
import CssLogo from '../../../assets/images/css-logo.png';
import DrupalLogo from '../../../assets/images/drupal-logo.png';
import GruntLogo from '../../../assets/images/grunt-logo.png';
import GulpLogo from '../../../assets/images/gulp-logo.png';
import HtmlLogo from '../../../assets/images/html-logo.png';
import JQueryLogo from '../../../assets/images/jquery-logo.png';
import JsLogo from '../../../assets/images/js-logo.png';
import PolymerLogo from '../../../assets/images/polymer-logo.png';
import ReactJSLogo from '../../../assets/images/reactjs-logo.png';
import SassLogo from '../../../assets/images/sass-logo.png';
import WordpressLogo from '../../../assets/images/wordpress-logo.png';
import TypescriptLogo from '../../../assets/images/typescript-logo.png';
import ContentfulLogo from '../../../assets/images/contentful-logo.png';
import WebpackLogo from '../../../assets/images/webpack-logo.png';

// components
import LogoBlock from '../logo-block';
import {setInterval, clearInterval} from 'timers';

export default function Expertise(props: any): ReactElement {
  // variables
  const conRefExp: any = useRef();

  // use effects
  React.useEffect(() => {
    window.addEventListener('resize', handleOnResize);
    window.addEventListener('load', handleOnScroll);
    window.addEventListener('scroll', handleOnScroll);
    const windowWidth = window.innerWidth;
    setTimeout(() => {
      const sliderCon: any = document.getElementById('logoSlider');
      const slider: any = document.getElementById('logoBlockSlider');
      const sliderConWidth: number = sliderCon.clientWidth;
      const sliderElems: any = document.getElementsByClassName(
        'logo-block-container'
      );
      let sliderElemWidth: any = 0;
      let parseSliderWidth: any = 0;

      if (windowWidth <= 992) {
        sliderElemWidth = sliderConWidth / 1;
        parseSliderWidth = parseInt(sliderElemWidth, 10);
      } else if (windowWidth <= 1200) {
        sliderElemWidth = sliderConWidth / 2;
        parseSliderWidth = parseInt(sliderElemWidth, 10);
      } else {
        sliderElemWidth = sliderConWidth / 3;
        parseSliderWidth = parseInt(sliderElemWidth, 10);
      }

      slider.style.width = parseSliderWidth * sliderElems.length + 'px';

      [].forEach.call(sliderElems, (el: any) => {
        el.style.width = parseSliderWidth + 'px';
      });
    }, 100);

    return () => {
      document.removeEventListener('resize', handleOnResize);
      document.removeEventListener('load', handleOnScroll);
      document.removeEventListener('scroll', handleOnScroll);
    };
  });

  // custom functions
  const handleOnResize = () => {
    const windowWidth = window.innerWidth;
    setTimeout(() => {
      const sliderCon: any = document.getElementById('logoSlider');
      const slider: any = document.getElementById('logoBlockSlider');
      const sliderConWidth: number = sliderCon.clientWidth;
      const sliderElems: any = document.getElementsByClassName(
        'logo-block-container'
      );

      let sliderElemWidth: any = 0;
      let parseSliderWidth: any = 0;

      if (windowWidth <= 992) {
        sliderElemWidth = sliderConWidth / 1;
        parseSliderWidth = parseInt(sliderElemWidth, 10);
      } else if (windowWidth <= 1200) {
        sliderElemWidth = sliderConWidth / 2;
        parseSliderWidth = parseInt(sliderElemWidth, 10);
      } else {
        sliderElemWidth = sliderConWidth / 3;
        parseSliderWidth = parseInt(sliderElemWidth, 10);
      }

      slider.style.width = parseSliderWidth * sliderElems.length + 'px';

      [].forEach.call(sliderElems, (el: any) => {
        el.style.width = parseSliderWidth + 'px';
      });
    }, 100);
  };

  const sliderNav = (flow: string) => (event: object) => {
    const sliderCon: any = document.getElementById('logoBlockSlider');
    const sliderElemLength: any = document.getElementsByClassName(
      'logo-block-container'
    ).length;
    const sliderElem: any = document.getElementsByClassName(
      'logo-block-container'
    )[0];
    const sliderElemLast: any = document.getElementsByClassName(
      'logo-block-container'
    )[sliderElemLength - 1];
    let marginLeft: any = '0px';
    sliderCon.classList.add('active');

    if (flow === 'left') {
      sliderCon.classList.remove('active');
      const removedElem = sliderCon.removeChild(sliderElemLast);
      sliderCon.insertAdjacentElement('afterBegin', removedElem);
      marginLeft = '-' + sliderElem.clientWidth + 'px';
      sliderCon.style.marginLeft = marginLeft;
      setTimeout(() => {
        sliderCon.classList.add('active');
        sliderCon.style.marginLeft = '0px';
      }, 200);
    }

    if (flow === 'right') {
      marginLeft = '-' + sliderElem.clientWidth + 'px';
      sliderCon.style.marginLeft = marginLeft;
      setTimeout(() => {
        sliderCon.classList.remove('active');
        const removedElem = sliderCon.removeChild(sliderElem);
        sliderCon.appendChild(removedElem);
        sliderCon.style.marginLeft = '0px';
      }, 200);
    }
  };

  const isInViewport = () => {
    const elementTop = conRefExp.current.offsetTop;
    const elementBottom = elementTop + conRefExp.current.offsetHeight;

    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight * 0.4;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  const handleOnScroll = () => {
    if (isInViewport()) {
      const skills = document.getElementsByClassName('logo-block-image');
      const skillsShow = document.getElementsByClassName(
        'show-logo-block-image'
      );
      const skillsShowLength = skillsShow.length;
      const skillsLength = skills.length;
      let x = 0;
      let time: any = null;
      if (skillsShowLength !== skillsLength) {
        time = setInterval(() => {
          skills[x].classList.add('show-logo-block-image');
          if (x === skillsLength - 1 || skillsShowLength === skillsLength) {
            clearInterval(time);
            x = 0;
          } else {
            x++;
          }
        }, 200);
      } else {
        clearInterval(time);
      }
    }
  };

  return (
    <div ref={conRefExp} id="expertise" className="section my-expertise">
      <div className="flex-content">
        <div className="my-expertise-text">
          <div className="flex-center-vertical">
            <div className="section-header-title">
              <h3 className="section-header-pre-title">
                Tools, Frameworks, CMS I Know
              </h3>
              <h1 className="section-header-main-title">My Expertise</h1>
              <p>
                Use carousel to see all the skills I have so far. All the listed
                skills on the slider are what I've been using in creating
                websites or webapps. I am not that super professional with all
                of it but I can guarantee that I have the experience using it
                all.
              </p>
              <div id="sliderNavCon">
                <div
                  onClick={sliderNav('left')}
                  className="slider-navs slider-nav-left"
                >
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div
                  onClick={sliderNav('right')}
                  className="slider-navs slider-nav-right"
                >
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="logoSlider" className="logo-slider">
          <div id="logoBlockSlider">
            <div className="logo-block-container">
              <LogoBlock title="HTML" cat="Web Builder Tool" image={HtmlLogo} />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="CSS / CSS3"
                cat="Web Styling Tool"
                image={CssLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="Javascript"
                cat="Web Action Tool"
                image={JsLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="Bootstrap"
                cat="Web Grid Tool"
                image={BootstrapLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="SASS / SCSS"
                cat="CSS Preprocessor"
                image={SassLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock title="JQuery" cat="JS Framework" image={JQueryLogo} />
            </div>
            <div className="logo-block-container">
              <LogoBlock title="Wordpress" cat="CMS" image={WordpressLogo} />
            </div>
            <div className="logo-block-container">
              <LogoBlock title="Drupal" cat="CMS" image={DrupalLogo} />
            </div>
            <div className="logo-block-container">
              <LogoBlock title="Contentful" cat="CMS" image={ContentfulLogo} />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="Grunt"
                cat="Environment Builder Tool"
                image={GruntLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="Gulp"
                cat="Environment Builder Tool"
                image={GulpLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="Webpack"
                cat="Environment Builder Tool"
                image={WebpackLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="ReactJS"
                cat="JS Framework"
                image={ReactJSLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="TypeScript"
                cat="JavaScript Typed Superset"
                image={TypescriptLogo}
              />
            </div>
            <div className="logo-block-container">
              <LogoBlock
                title="Polymer"
                cat="JS Framework"
                image={PolymerLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
