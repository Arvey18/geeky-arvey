import React, {ReactElement} from 'react';

// styles
import './style.scss';

// components
import Hero from '../../components/hero';
import Navigation from '../../components/navigation';
import NavigationPanel from '../../components/navigation-panel';
// import NavigationBullet from '../../components/bullet-navigation';
// import AboutMe from '../../components/about-me';
import Expertise from '../../components/expertise';
import Experience from '../../components/my-experience';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

export default function Home(props: any): ReactElement {
  // use states
  const [openNavPanel, setOpenNavPanel] = React.useState(false);

  // custom functions
  const handleNavPanel = (status: boolean) => {
    setOpenNavPanel(status);
  };

  return (
    <div id="home">
      <Navigation
        open={openNavPanel}
        handleNavPanel={(status: boolean) => handleNavPanel(status)}
      />
      <NavigationPanel
        open={openNavPanel}
        handleNavPanel={(status: boolean) => handleNavPanel(status)}
      />
      {/* <NavigationBullet /> */}
      <Hero />
      {/* <AboutMe /> */}
      <Expertise />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
