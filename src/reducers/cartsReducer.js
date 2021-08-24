export const usersReducer = ( state = [], action ) => {
    switch(action.type){
        case 'FETCH_CARTS': 
            return action.payload
        default:
            return state 
    }

}