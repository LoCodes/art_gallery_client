// react-redux, redux, thunk 
import './App.css'
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
import {loadState, saveState } from './localStorage'

// import { addArtwork } from './actions/ArtworksActions'
// import { addToCart } from './actions/CartsActions'
// create a store for redux => createStore 1. reducer, 2. devTools 

const persistedState = loadState(); 

const store = createStore( // cant pass in multiple reducers here 
    rootReducer,    // were going to combine all reducers into rootReducers 
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
    saveState({
      carts: store.getState().carts
    });
  });

// window.store = store 
// window.addArtwork = addArtwork
// window.addToCart = addToCart

ReactDom.render(
    <Provider store={store}>
        <Router >
            <App />        
        </Router>
    </Provider>,
    document.getElementById('root') 
)