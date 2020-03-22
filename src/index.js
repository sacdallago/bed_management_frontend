import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './storage/Auth';
import AuthView from './viewes/AuthView';
import BedView from './viewes/BedView';
import ApolloClient from 'apollo-boost';
import fetch from 'unfetch';
import { ApolloProvider } from 'react-apollo';

// Styles
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// Service worker
import * as serviceWorker from './serviceWorker';

// GraphQL
const client = new ApolloClient({
  uri: process.env.REACT_GRAPHQL_ENDPOINT || 'https://bed-tracking.gigalixirapp.com/api',
  fetch
});

let auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {auth.isAuthenticated() ? <BedView/> : <AuthView/>}
      {/*  <BedView/>*/}
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();