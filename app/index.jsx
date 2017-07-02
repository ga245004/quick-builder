import React from 'react';
import { render } from 'react-dom';
import {Provider } from 'react-redux'


import { createStore , combineReducers } from 'redux';

import {createLogger} from 'redux-logger';

//require('devtron').install();

//  const DevTools = require('./utils/devTools');


var App = require('./ui/App');
const store = require('./reducers/rootReducer');


//const logger = createLogger();

//const store = createStore(reducers);


render(  <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>, document.getElementById('root'));