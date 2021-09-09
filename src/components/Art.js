// import React, { Component } from 'react'
import { addToCart } from '../actions/CartsActions'
// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteArt } from '../actions/ArtworksActions'


const Art = ({ artwork }) => {

    const dispatch = useDispatch()

    const handleCart = (artwork) => {
        dispatch(addToCart(artwork))
    }

    const handleDelete = (artwork) => {
        dispatch(deleteArt(artwork))
    }

        return (
            <div className="art">
                <h3>Title: {artwork.title} </h3>
                <img src={artwork.img} alt={artwork.description} width="300" height="300" />
                <p>Description: {artwork.description}</p>
                <h4>Price: {artwork.price} </h4>
                <button onClick={() => handleCart(artwork)}> Add to Cart</button> 
                <button onClick={() => handleDelete(artwork)} > Delete Art</button>
            </div>
        )
    
}

export default Art

// export default connect(null, { addToCart })(Art);
