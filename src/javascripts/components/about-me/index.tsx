import React, {ReactElement} from 'react';

// styles
import './style.scss';

// components
import ImageWithTextBlock from '../image-with-text-block';

// images
import image1 from '../../../assets/images/promo1.jpg';

export default function AboutMe(props: any): ReactElement {
  return (
    <div id="About" className="section flex-center-all about-my-job">
      <div className="container">
        <div className="section-header-title">
          <h3 className="section-header-pre-title">
            Inspiration and creativity.
          </h3>
          <h1 className="section-header-main-title">What I Do</h1>
        </div>
        <div className="section-content">
          <div className="flex-row">
            <div className="flex-one">
              <ImageWithTextBlock
                title="Finding fresh ideas."
                image={image1}
                description="Pellentesque condimentum sed orci quis elementum. In faucibus vel erat volutpat laoreet. Nunc odio erat, cursus eu urna quis, mattis luctus eros. Etiam vel accumsan eros"
              />
            </div>
            <div className="flex-one">
              <ImageWithTextBlock
                title="Learn New Things"
                image={image1}
                description="Pellentesque condimentum sed orci quis elementum. In faucibus vel erat volutpat laoreet. Nunc odio erat, cursus eu urna quis, mattis luctus eros. Etiam vel accumsan eros"
              />
            </div>
            <div className="flex-one">
              <ImageWithTextBlock
                title="Create Amazing Websites"
                image={image1}
                description="Pellentesque condimentum sed orci quis elementum. In faucibus vel erat volutpat laoreet. Nunc odio erat, cursus eu urna quis, mattis luctus eros. Etiam vel accumsan eros"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
