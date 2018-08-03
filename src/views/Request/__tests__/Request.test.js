import React from 'react';
import { shallow } from 'enzyme';
import Request from '../../Request/Request';


describe('Request Component', () => {
    it('should render Request page correctly', () => {
        const tree  = shallow(<Request />);
        expect(tree).toMatchSnapshot();
        });
});
