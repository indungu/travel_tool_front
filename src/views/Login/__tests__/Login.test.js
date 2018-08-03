import React from 'react';
import sinon from 'sinon';
import { Login } from '../Login';

const props = {
    setCurrentUser: () => {},
    isAuthenticated: true,
    history: {
        push: jest.fn()
    }
};

const shallowWrapper = shallow(<Login {...props} />);

describe('Login Component', () => {
    it('should render Login page correctly', () => {
        const tree = shallow(<Login {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it('calls onClick event when login button is click', () => {
        sinon.spy(shallowWrapper.instance(), 'login');
        shallowWrapper.instance().login();
        expect(shallowWrapper.instance().login.calledOnce).toEqual(true);
    });
});
