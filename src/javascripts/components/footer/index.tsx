import React, {ReactElement} from 'react';

// styles
import './style.scss';

export default function Footer(props: any): ReactElement {
  // variables
  const date = new Date();

  return (
    <div id="footer" className="section footer">
      <div className="copyright">
        <p>&copy; Arvey Jimenez {date.getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  );
}
