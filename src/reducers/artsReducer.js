export const artsReducer = ( state = [], action ) => {
    switch(action.type){
        case 'FETCH_ARTS': 
            return action.payload
        default:
            return state 
    }

}