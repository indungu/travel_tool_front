import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';

import store from '../../redux/store/store';
import Routes from '../../routes/index';
import '../../../node_modules/material-design-lite/material';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}


export default App;
