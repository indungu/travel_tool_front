import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './views/App/App';
import registerServiceWorker from './registerServiceWorker';

const app = <App />;
ReactDOM.render(
  app,
document.getElementById('root'));

registerServiceWorker();
