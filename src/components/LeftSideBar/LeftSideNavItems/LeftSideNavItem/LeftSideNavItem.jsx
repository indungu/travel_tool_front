import React, { Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ActiveDropdrown from '../../../../images/icons/dropdown_active.svg';
import InactiveDropdown from '../../../../images/icons/dropdown_inactive.svg';
import './LeftSideNavItem.scss';

export class LeftSideNavItem extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    link_to: PropTypes.string.isRequired,
    linkIcons: PropTypes.object.isRequired,
    isDropdown: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.object.isRequired),
    match: PropTypes.object.isRequired
  }

  static defaultProps = {
    children: [{}],
    isDropdown: false
  }

  constructor(props) {
    super(props);
    this.state = {
      dropdownActive: false,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextContext.activeNavItem !== this)
      this.setState({dropdownActive: false});
  }

  getDropdownElements = (children, dropdownStatus, linkIsActive) => {
    const dropdownItems = (
      <div className={`LeftSideNavItem__dropdownContent ${dropdownStatus}`}>
        {children}
      </div>
    );

    const dropdownIcon = (
      <div
        className={`dropdownIcon dropdownIcon--${dropdownStatus}`}
        style={{position: 'absolute', right: '30px', top: '17px'}}>
        <img src={linkIsActive? ActiveDropdrown: InactiveDropdown} alt="dropdown" />
      </div>
    );

    return {
      items: dropdownItems,
      icon: dropdownIcon
    };
  }

  isActive = (activeNavItem, link_to) => {
    const {match} = this.props;
    return (activeNavItem === this) && match.path.startsWith(link_to);
  }

  toggleDropdown = () => {
    const {setActiveNavItem} = this.context;
    setActiveNavItem(this);
    const {dropdownActive} = this.state;
    this.setState({dropdownActive: !dropdownActive});
  }

  render() {
    const {text, link_to, linkIcons, isDropdown, children, match } = this.props;
    const {activeNavItem} = this.context;
    const linkIsActive = this.isActive(activeNavItem, link_to);
    const { dropdownActive } = this.state;
    let dropdownStatus = dropdownActive? 'active': 'inactive';
    let dropdownElements;

    if (isDropdown)
      dropdownElements = this.getDropdownElements(children, dropdownStatus, linkIsActive);

    return (
      <Fragment>
        <NavLink onClick={this.toggleDropdown} to={link_to} className="LeftSideNavItem">
          <div className="LeftSideNavItem__leftIcon">
            <img src={linkIsActive? linkIcons.active: linkIcons.inactive} alt="icon" />
          </div>
          <div className="LeftSideNavItem__Nav-text">
            {text}
          </div>
          { dropdownElements? dropdownElements.icon: null}
        </NavLink>
        {dropdownElements? dropdownElements.items: null}
      </Fragment>
    );
  }
}

LeftSideNavItem.contextTypes = {
  activeNavItem: PropTypes.object.isRequired,
  setActiveNavItem: PropTypes.func.isRequired
}
export default withRouter(LeftSideNavItem);
