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
        case 'DELETE_CART':
            return {
            ...state,
            carts: state.carts.filter( a => a.id !== action.payload.id)
        }
        default:
            return state 
    }

}
// customerCartItem: state.customerCartItem.filter(item => item.id !== payload.id)
