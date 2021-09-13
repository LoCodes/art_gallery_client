// create action that will fetch artworks from api 

// GET
export const fetchArtworks = () => {
    return(dispatch) => {  
        fetch('http://127.0.0.1:3000/artworks')
        .then(resp => resp.json()) // returning another promise so we need to retrun another function
        .then(artworks => dispatch({type: "FETCH_ARTWORKS", payload: artworks}))
    } 
}

// POST
export const addArtwork = (artwork) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/artworks', {
            method: 'POST',
            body: JSON.stringify(artwork),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(artwork => dispatch({ type: 'ADD_ARTWORK', payload: artwork}))
    }
}

export const deleteArt = (artwork) => ({
    type: "DELETE_ARTWORK",
    payload: artwork
})
