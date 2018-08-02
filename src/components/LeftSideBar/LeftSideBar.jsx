import React, {Component} from 'react';
import LeftSideNavItems from './LeftSideNavItems/LeftSideNavItems';
import ActiveBookmarkIcon from '../../images/icons/bookmark_active.svg';
import InactiveBookmarkIcon from '../../images/icons/bookmark_inactive.svg';
import ActiveSettingsIcon from '../../images/icons/settings_active.svg';
import InactiveSettingsIcon from '../../images/icons/settings_inactive.svg';
import './LeftSideBar.scss';

class LeftSideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeNavItem: {}
    };
  }

  setActiveNavItem = (clickedNavItem) => {
    this.setState({activeNavItem: clickedNavItem});
  }

  getNavigationIcons() {
      return {
        requestsIcon: {
          active: ActiveBookmarkIcon,
          inactive: InactiveBookmarkIcon
        },
        settingsIcon: {
          active: ActiveSettingsIcon,
          inactive: InactiveSettingsIcon
        },
      }
  }

  render() {
    const navIconSources = this.getNavigationIcons();
    const {activeNavItem} = this.state;

    return (
      <div className="LeftSideBar mdl-cell mdl-cell--2-col">
        <div className="LeftSideBar__fixed_wrapper">
          <div style={{overflowY: 'scroll', height: '100%'}}>
            <LeftSideNavItems
              activeNavItem={activeNavItem}
              navIconSources={navIconSources}
              setActiveNavItem={this.setActiveNavItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
