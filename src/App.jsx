/* eslint-disable react/no-children-prop */
// src/App.js
import React, {Component} from 'react';
import {hashHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import createRouter from './routes';
import createStore from './store';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Router history={hashHistory} children={createRouter()} />
        </div>
      </Provider>
    );
  }
}

export default App;
