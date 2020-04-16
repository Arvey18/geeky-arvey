import React from 'react';
import {mount} from 'enzyme';
import {createBrowserHistory} from 'history';

// components
import Hero from '../../components/hero';
import Navigation from '../../components/navigation';
import NavigationPanel from '../../components/navigation-panel';
import Expertise from '../../components/expertise';
import Experience from '../../components/my-experience';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

const customHistory = createBrowserHistory();

describe('load home', () => {
  it('visit home', () => {
    expect(customHistory.location.pathname).toEqual('/');
  });

  it('load navigation', () => {
    const handleNavPanel = (status: boolean) => {
      console.log(status);
    };
    const wrapper = mount(
      <Navigation open={false} handleNavPanel={handleNavPanel} />
    );
    expect(wrapper).toExist();
    expect(wrapper).toHaveProp('open', false);
    expect(wrapper).toHaveProp('handleNavPanel', handleNavPanel);
  });

  it('load navigation panel', () => {
    const handleNavPanel = (status: boolean) => {
      console.log(status);
    };
    const wrapper = mount(
      <NavigationPanel open={false} handleNavPanel={handleNavPanel} />
    );
    expect(wrapper).toExist();
    expect(wrapper).toHaveProp('open', false);
    expect(wrapper).toHaveProp('handleNavPanel', handleNavPanel);
  });

  it('load hero', () => {
    const wrapper = mount(<Hero />);
    expect(wrapper).toExist();
  });

  it('load expertise', () => {
    const wrapper = mount(<Expertise />);
    expect(wrapper).toExist();
  });

  it('load experience', () => {
    const wrapper = mount(<Experience />);
    expect(wrapper).toExist();
  });

  it('load contact', () => {
    const wrapper = mount(<Contact />);
    expect(wrapper).toExist();
  });

  it('load footer', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toExist();
  });
});
