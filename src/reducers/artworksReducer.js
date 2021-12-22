export const artworksReducer = ( state = [], action ) => {
    switch(action.type){
        case 'FETCH_ARTWORKS': 
            return action.payload // return payload from that action
        case 'ADD_ARTWORK':
            return [...state, action.payload]
        case 'DELETE_ARTWORK':
            return state.filter(artwork => artwork.id !== action.payload.id)
        default:
            return state
    }

}


// update store state