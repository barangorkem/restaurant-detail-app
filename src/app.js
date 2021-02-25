import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Restaurant from './containers/Restaurant/Restaurant';

import Layout from './layout/Layout';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';

import './app.scss';

const App = () => (
  <div>
    <Layout>
      <Restaurant />
    </Layout>
  </div>
);

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode,
);
