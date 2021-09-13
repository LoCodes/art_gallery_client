import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteFromCart } from '../actions/CartsActions'

const CartArt = ({artwork, position}) => {
    const dispatch = useDispatch()
    const removeFromCart = (position) => {
        dispatch(deleteFromCart(position))
    }

    return (
        <div>
              <div className="cart-art" id={position}>
                  
                <h3>Title: {artwork.title} </h3>
                <img src={artwork.img} alt={artwork.description} width="100" height="100" />
                <h4>Price: {artwork.price} </h4>
                <button onClick={() => removeFromCart(position)}> remove</button>

            </div>
            
        </div>
    )
}

export default CartArt
