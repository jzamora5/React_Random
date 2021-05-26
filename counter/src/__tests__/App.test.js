import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders correcly', () => {
    shallow(<App />);
  });

  it('renders button', () => {
    const wrapper = mount(<App />);
    console.log(wrapper);
    expect(wrapper.find('div.App')).toHaveLength(1);
  });
});
