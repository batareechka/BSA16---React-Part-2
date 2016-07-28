import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import User from './components/user/user.js'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './components/user/reducers/userReducer'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    (<Provider store={store}>
       <User /> 
    </Provider>)
    , document.getElementById('app')
)