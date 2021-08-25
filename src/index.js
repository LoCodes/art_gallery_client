// react-redux, redux, thunk 

import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
//window.__Redux_devtools
import { rootReducer } from './reducers/rootReducer'

import { BrowserRouter as  Router } from 'react-router-dom'

import App from './components/App'

// create a store for redux => createStore 1. reducer, 2. devTools 

const store = createStore( // cant pass in multiple reducers here 
    rootReducer,    // were going to combine all reducers into rootReducers 
    composeWithDevTools(applyMiddleware(thunk))
    )


ReactDom.render(
    <Provider store={store}>
        <Router >
            <App />        

        </Router>
    </Provider>,

    document.getElementById('root') 
)