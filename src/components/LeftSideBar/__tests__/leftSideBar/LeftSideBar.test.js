import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import LeftSideBar from '../../LeftSideBar';
import LeftSideNavItems from '../../LeftSideNavItems/LeftSideNavItems';
import { LeftSideNavItem } from '../../LeftSideNavItems/LeftSideNavItem/LeftSideNavItem';
import DropdownItem from '../../LeftSideNavItems/DropdownItem/DropdownItem';


describe('<LeftSideBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LeftSideBar />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('<LeftSideNavItems />', () => {
    let wrapper;

    beforeEach(() => {
      const navIconSources = {
        requestsIcon: {
          active: 'test.svg',
          inactive: 'test.svg'
        },
        settingsIcon: {
          active: 'test.svg',
          inactive: 'test.svg'
        },
      };
      wrapper = shallow(
        <LeftSideNavItems
          activeNavItem={{}}
          navIconSources={navIconSources}
          setActiveNavItem={jest.fn}
        />
      );
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('it renders two dropdown items', () => {
      const dropDownItems = wrapper.find('DropdownItem');
      expect(dropDownItems).toHaveLength(2);
    });
  });
});

describe('<LeftSideNavItem />', () => {

  let match, iconSrc, wrapper;

  beforeEach(() => {
    match = {path: '/test-link'};
    iconSrc = () => {};
    const context = {
      setActiveNavItem: jest.fn,
      activeNavItem: {}
    };
    wrapper = shallow(
      <LeftSideNavItem
        text="Test link"
        isDropdown
        linkIcons={{active: 'test.svg', inactive: 'test.svg'}}
        match={match}
        link_to="/test-link" />, {context}
    );
  });

  it('renders the LeftSideNavItem', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('<LeftSideNavItem /> with dropdown', () => {
    beforeEach(() => {
      wrapper.setProps({isDropdown: true});
    });

    it('renders as dropdown', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('toggles dropdown', () => {
      const expectedStateOnClick = { dropdownActive: true };

      wrapper.find('NavLink').simulate('click');
      const stateOnClick = wrapper
        .instance()
        .state;
      expect(stateOnClick).toEqual(expectedStateOnClick);
    });

    it('closes dropdown its when it is not the active item', () => {
      const expectedStateOnClick = { dropdownActive: false };
      wrapper.setContext({activeNavItem: {}});
      const stateOnNewProps = wrapper.instance().state;
      expect(stateOnNewProps).toEqual(expectedStateOnClick);
    });
  });
});

describe('<DropdownItem />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <DropdownItem link_to="/test-link/test-endpoint">
        Test Link
      </DropdownItem>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
