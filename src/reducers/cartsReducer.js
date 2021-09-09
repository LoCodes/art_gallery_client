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
            let newCart = []
            for (let i = 0 ; i < state.carts.length ; i++){
                if (i != action.payload) {
                    newCart.push(state.carts[i])
                }
            }
            return {
            ...state,
            // carts: state.carts.filter( a => a.id !== action.payload.id)
            carts: newCart
        }
        default:
            return state 
    }

}
// carts: Object.assign(state.carts, {[action.payload.title]: action.payload})


// customerCartItem: state.customerCartItem.filter(item => item.id !== payload.id)
