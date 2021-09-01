import React from 'react'
// import { addToCart } from '../actions/CartsActions'
import {useDispatch} from 'react-redux'
import { deleteFromCart } from '../actions/CartsActions'



const CartArt = ({artwork}) => {
    const dispatch = useDispatch()
    const removeFromCart = (artwork) => {
        dispatch(deleteFromCart(artwork))
    }

    return (
        <div>
              <div className="cart-art">
                <h3>Title: {artwork.title} </h3>
                <img src={artwork.img} alt={artwork.description} width="100" height="100" />
                {/* <p>Description: {artwork.description}</p> */}
                <h4>Price: {artwork.price} </h4>
                {/* <button onClick={() => this.props.addSaved(art)}> Add to Recipe Book </button>  */}
                {/* <button onClick={() => handleCart(artwork)}> Add to Cart</button>  */}
                <button onClick={() => removeFromCart(artwork)}> remove</button>

            </div>
            
        </div>
    )
}

export default CartArt

// put art here without the button and create remove button instead then  iterate in the cart 
// done 

//create remove handle 