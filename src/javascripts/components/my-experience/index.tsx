import React, {ReactElement, useRef} from 'react';

// styles
import './style.scss';

export default function MyExperience(props: any): ReactElement {
  // variables
  const conRef: any = useRef();

  // use effects
  React.useEffect(() => {
    window.addEventListener('load', handleOnScroll);
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      document.removeEventListener('load', handleOnScroll);
      document.removeEventListener('scroll', handleOnScroll);
    };
  });

  // custom functions
  const isInViewport = () => {
    const elementTop = conRef.current.offsetTop;
    const elementBottom = elementTop + conRef.current.offsetHeight;

    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight * 0.6;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  const handleOnScroll = () => {
    if (isInViewport()) {
      const work = document.getElementsByClassName('work-timeline-box');
      const workShow = document.getElementsByClassName(
        'show-work-timeline-box'
      );
      const workShowLength = workShow.length;
      const workLength = work.length;
      let x = 0;
      let time: any = null;
      if (workShowLength !== workLength) {
        time = setInterval(() => {
          work[x].classList.add('show-work-timeline-box');
          if (x === workLength - 1 || workShowLength === workLength) {
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
    <div
      ref={conRef}
      id="experience"
      className="section flex-center-horizontal my-experience"
    >
      <div className="container">
        <div className="section-header-title white-header-title">
          <h3 className="section-header-pre-title">
            Working Experience I have
          </h3>
          <h1 className="section-header-main-title">Experience</h1>
        </div>
        <div className="section-content">
          <div className="work-timeline">
          <div className="work-timeline-box ">
              <div className="work-timeline-box-content">
                <div>
                  <div className="year">March 2020 - Present</div>
                  <div className="company">QuadX Inc.</div>
                  <div className="title">Frontend Engineer</div>
                  <div className="job">
                  </div>
                </div>
              </div>
            </div>
            <div className="work-timeline-box ">
              <div className="work-timeline-box-content">
                <div>
                  <div className="year">Apr 2019 - March 2020</div>
                  <div className="company">Fast Venture Builder</div>
                  <div className="title">Software Developer</div>
                  <div className="job">
                    I'm doing Design and implement software products and
                    solutions. Proactively work with partners and venture teams
                    to improve their products. Attend client and internal calls
                    and meetings as required. Mentor and share knowledge with
                    junior colleagues. Participate in open source initiatives
                    with relevance to the company’s strategic vision. Contribute
                    to the creation of articles, blog posts, and other
                    publications. Stay abreast of new technologies and
                    programming languages.
                  </div>
                </div>
              </div>
            </div>
            <div className="work-timeline-box right-box">
              <div className="work-timeline-box-content">
                <div>
                  <div className="year">Jun 2014 - Apr 2019</div>
                  <div className="company">FLGS / Favorite Medium</div>
                  <div className="title">Web Developer</div>
                  <div className="job">
                    My roles on this job are: Design and implement software
                    products and solutions for both internal and client
                    projects. Proactively work with partners and clients to
                    improve their products. Attend client and internal calls and
                    meetings as required. Mentor and share knowledge with junior
                    colleague. Participate in open source initiatives with
                    relevance to the company’s strategic vision. Contribute to
                    creation of articles, blog posts, and other publications.
                    Stay abreast of new technologies and programming languages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
