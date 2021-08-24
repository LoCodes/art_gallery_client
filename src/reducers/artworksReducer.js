export const artworksReducer = ( state = [], action ) => {
    switch(action.type){
        case 'FETCH_ARTWORKS': 
            return action.payload
        default:
            return state 
    }

}