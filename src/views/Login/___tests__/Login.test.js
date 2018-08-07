import React from 'react';
import Login from '../Login';
import TextLink from '../../../components/text-link/TextLink';

it('should render Login page correctly', () => {
const wrapper = shallow(<Login />);
expect(wrapper.find(TextLink)).toHaveLength(2);
expect(wrapper.find('button')).toHaveLength(1);
expect(wrapper.find('img')).toHaveLength(3);
expect(wrapper.find('p')).toHaveLength(1);
});
