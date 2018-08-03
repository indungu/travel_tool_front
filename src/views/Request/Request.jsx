import React, { Component } from 'react';
import { authenticationMessage } from '../../helper/toast';
import andelaLogo from '../../images/andela-logo.svg';

class Request extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <img src={andelaLogo} alt="Andela Logo" />
        <h3>
                 Request Page
        </h3>
      </div>
    );
  }
}

export default Request;
