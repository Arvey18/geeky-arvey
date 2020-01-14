import React, {ReactElement} from 'react';

// styles
import './style.scss';

export default function BulletNavigation(props: any): ReactElement {
  return (
    <div className="bullet-navigation">
      <ul>
        <li>
          <div className="bullets active" />
        </li>
        <li>
          <div className="bullets" />
        </li>
        <li>
          <div className="bullets" />
        </li>
        <li>
          <div className="bullets" />
        </li>
      </ul>
    </div>
  );
}
