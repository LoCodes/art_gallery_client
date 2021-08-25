export const artworksReducer = ( state = [], action ) => {
    switch(action.type){
        case 'FETCH_ARTWORKS': 
            return action.payload
        case 'ADD_ARTWORK':
            return [...state, action.payload]
        default:
            return state
    }

}