import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './storage/Auth';
import AuthView from './viewes/AuthView';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import * as serviceWorker from './serviceWorker';

let auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
      {auth.isAuthenticated() ? <AuthView/> : <AuthView/>}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
