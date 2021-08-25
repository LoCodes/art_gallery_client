// create action that will fets artworks from api 

// GET
export const fetchArtworks = () => {
    return(dispatch) => {
        fetch('http://127.0.0.1:3000/artworks')
        .then(resp => resp.json())
        .then(artworks => dispatch({type: "FETCH_ARTWORKS", payload: artworks}))
    }
}

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

