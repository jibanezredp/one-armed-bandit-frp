import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';

const FRUITS = {
  0: { id: 0, name: 'spinner', color: 'black' },
  1: { id: 1, name: 'spinner', color: 'black' },
  2: { id: 2, name: 'spinner', color: 'black' },
  3: { id: 3, name: 'spinner', color: 'black' },
  4: { id: 4, name: 'spinner', color: 'black' },
};

ReactDom.render(
  <App fruits={FRUITS} />,
  document.getElementById('root')
);
