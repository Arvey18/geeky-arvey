import React from 'react';
import {mount} from 'enzyme';
import {createBrowserHistory} from 'history';

// components
import Hero from '../../components/hero';
import Navigation from '../../components/navigation';

const customHistory = createBrowserHistory();

describe('load home', () => {
  it('load home', () => {
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

  it('load hero', () => {
    const wrapper = mount(<Hero />);
    expect(wrapper).toExist();
  });
});
