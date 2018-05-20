import React from 'react'
import ReactDOM from 'react-dom'

import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './redux.js'
import {rootSaga} from './sagas.js'

import './index.html'
import './styles.css'

import App from './App'

require('babel-core/register')
require('babel-polyfill')

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store} children={<App />} />,
  document.getElementById('app')
)