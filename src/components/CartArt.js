import React from 'react'
// import { addToCart } from '../actions/CartsActions'


const CartArt = ({artwork}) => {
    return (
        <div>
              <div className="art">
                <h3>Title: {artwork.title} </h3>
                <img src={artwork.img} alt={artwork.description} width="300" height="300" />
                {/* <p>Description: {artwork.description}</p> */}
                <h4>Price: {artwork.price} </h4>
                {/* <button onClick={() => this.props.addSaved(art)}> Add to Recipe Book </button>  */}
                {/* <button onClick={() => handleCart(artwork)}> Add to Cart</button>  */}
                <button> remove from cart </button>

            </div>
            
        </div>
    )
}

export default CartArt

// put art here without the button and create remove button instead then  iterate in the cart 