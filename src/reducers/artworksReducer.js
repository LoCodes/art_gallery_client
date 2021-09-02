export const artworksReducer = ( state = [], action ) => {
    switch(action.type){
        case 'FETCH_ARTWORKS': 
            return action.payload
        case 'ADD_ARTWORK':
            return [...state, action.payload]
        case 'DELETE_ARTWORK':
            return state.filter(artwork => artwork !== action.payload)
        default:
            return state
    }

}


// 2 arguements: state, action