export const addToCart = (artwork) => ({ 
    type: "ADD_CART",
     payload: artwork
 })

// export const deleteFromCart = (artwork) => ({
//     type: "DELETE_CART",
//     payload: artwork
// })

// export const fetchCarts = () => {
//     return(dispatch) => {
//         fetch('http://127.0.0.1:3000/carts')
//         .then(resp => resp.json())
//         .then(artworks => dispatch({type: "FETCH_CARTS", payload: artworks}))
//     }
// }

// export const addToCart = (artwork) => {
//     return dispatch => {
//         // console.log(dispatch)
//         fetch('http://127.0.0.1:3000/carts', {
//             method: 'POST',
//             body: JSON.stringify(artwork),
//             headers: { 'Content-Type': 'application/json',  'Accept': 'application/json'} // fixed syntax error
//         })
//         .then(resp => resp.json())
//         .then(artwork => dispatch({ type: 'ADD_CART', payload: artwork}))
//     }
// }





// actionsCreators => action that returns our action object 
