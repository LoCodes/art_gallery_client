const initialState = {
    carts: []
}


//dispatch
export const cartsReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'ADD_CART': 
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        // case 'DELETE_CART':
        //     return {
        //     ...state,
        //     artworks: state.artworks.filter( a => a !== action.payload)
        // }
        default:
            return state 
    }

}
