import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';
import store from './store';

ReactDom.render(
  <App store={store} />,
  document.getElementById('root')
);
