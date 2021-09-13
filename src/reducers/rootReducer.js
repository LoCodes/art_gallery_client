import { combineReducers } from 'redux'   
import { usersReducer } from './usersReducer'
import { artworksReducer } from './artworksReducer'
import { cartsReducer } from './cartsReducer' 

export const rootReducer = combineReducers({ 
    // create keys with the values in the rootReducers, returns value of state set by each reducer 
    users: usersReducer,
    artworks: artworksReducer,
    carts: cartsReducer

})


