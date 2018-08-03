import React from 'react';
import Authenticate from '../authHoc';
import Request from '../../views/Request/Request';

const components = Authenticate(Request);

const { WrappedComponent } = components;

let props;
let mountedComponent;

const getComponent = () => {
  if (!mountedComponent) {
    mountedComponent = shallow(<WrappedComponent {...props} />);
  }
  return mountedComponent;
};


describe('Component: isAuthenticated User', () => {
  beforeEach(() => {
    props = {
      isAuthenticated: false,
      auth: {
        isAuthenticated: false,
        user: null
      },
      history: {
        push: jest.fn()
      }
    };
    mountedComponent = undefined;
  });

describe('Protected Routes test suite', () => {
    it('Redirects user to homepage if they are not authenticated', () => {
      props.isAuthenticated = false;
      expect(getComponent()).toMatchSnapshot();
    });
  });
});

