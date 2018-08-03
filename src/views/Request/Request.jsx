import React, { Component } from 'react';

import NavBar from '../../components/nav-bar/NavBar';
import upic from '../../images/upic.svg';

class RequestPage extends Component {
  render() {
    const onNotificationToggle = () => ('Notification icon toggled');
    
    return (
      <div className="mdl-layout mdl-js-layout">
        <NavBar avatar={upic} onNotificationToggle={onNotificationToggle} />
      </div>
    );
  }
}

export default RequestPage;
