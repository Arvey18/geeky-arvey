import React, {ReactElement} from 'react';

// styles
import './style.scss';

// variables
interface IProps {
  title: string;
  image: string;
  description: string;
}

export default function AboutMe(props: IProps): ReactElement {
  // variables
  const {title, image, description} = props;

  return (
    <div className="image-with-text-block">
      <h1>{title}</h1>
      <img className="img-responsive" src={image} alt="img" />
      <p>{description}</p>
    </div>
  );
}
