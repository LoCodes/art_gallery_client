export const cartsReducer = ( state = [], action ) => {
    switch(action.type){
        case 'ADD_CART': 
            return {
                ...state,
                saved: [...state.saved, action.payload]
            }
        default:
            return state 
    }

}