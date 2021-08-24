// react-redux, redux, thunk 

import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
//window.__Redux_devtools

// create a store for redux => createStore 1. reducer, 2. devTools 

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    )


