import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './index.css';
import App from './App';
import { AppContainer } from 'react-hot-loader';

import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root')

registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <App />
      </AppContainer>
    </ConnectedRouter>
  </Provider>,
  target
);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(App);
  });
}
