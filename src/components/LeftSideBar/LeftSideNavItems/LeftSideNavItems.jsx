import React, { PureComponent, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import LeftSidebarNavItem from './LeftSideNavItem/LeftSideNavItem';
import DropdownItem from './DropdownItem/DropdownItem';


class LeftSideNavItems extends PureComponent {

  getChildContext() {
    const {setActiveNavItem, activeNavItem} = this.props;
    return {
      activeNavItem,
      setActiveNavItem
    }
  }

  render() {
    const { navIconSources, activeNavItem, setActiveNavItem} = this.props;
    return (
      <Fragment>
        <LeftSidebarNavItem isDropdown linkIcons={navIconSources.requestsIcon} link_to="/requests" text="Requests">
          <DropdownItem link_to="/requests/my-requests">
            My Requests
          </DropdownItem>
          <DropdownItem link_to="/requests/my-approvals">
            My Approvals
          </DropdownItem>
        </LeftSidebarNavItem>
        <LeftSidebarNavItem linkIcons={navIconSources.settingsIcon} link_to="/settings" text="Settings" />
      </Fragment>
    );
  }
}

LeftSideNavItems.childContextTypes = {
  activeNavItem: PropTypes.object.isRequired,
  setActiveNavItem: PropTypes.func.isRequired
}

export default LeftSideNavItems;
