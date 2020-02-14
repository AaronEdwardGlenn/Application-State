import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  it('can match the snap', () => {
    const wrapper = shallow(<Controls dispatch={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
