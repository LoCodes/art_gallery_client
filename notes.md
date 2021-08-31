
// export const addToCart = (artwork) => {
//     return (dispatch) => {
//         console.log(dispatch)
//         fetch('http://127.0.0.1:3000/carts', {
//             method: 'POST',
//             body: JSON.stringify(artwork),
//             headers: { 'Content-Type': 'application/json'}
//         })
//         .then(resp => resp.json())
//         .then(artwork => dispatch({ type: 'ADD_CART', payload: artwork}))
//     }
// }



added user_id state and input in artworklist to be able to send specific art to carts in the back end. NOT FIXED 