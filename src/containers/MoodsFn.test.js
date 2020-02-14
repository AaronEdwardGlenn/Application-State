import React from 'react';
import { shallow } from 'enzyme';
import MoodsFn from './MoodsFn';

describe('MoodsFn', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<MoodsFn />);
    expect(wrapper).toMatchSnapshot();
  });
});
