import React, {ReactElement} from 'react';

// styles
import './style.scss';

// variables
interface IProps {
  title: string;
  cat: string;
  image: string;
}

export default function LogoBlock(props: IProps): ReactElement {
  // variables
  const {title, cat, image} = props;

  return (
    <div className="flex-center-all logo-block">
      <img className="logo-block-image" src={image} alt="" />
      <div className="logo-block-overlay">
        <div className="flex-center-all center-text">
          <div>
            <h4>{title}</h4>
            <div className="line" />
            <h5>{cat}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
