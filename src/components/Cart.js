import React, { Component } from 'react'
import ArtworksList from './ArtworksList'
import { connect } from 'react-redux'


const Cart = ({artworks}) => {
   
        // debugger
        // const artworks = this.props.carts.map(cart => console.log(cart))
        return (
            <div className="cart">
                {artworks = this.props.carts.map(cart => console.log(cart))}
                <h3> CART </h3>


                
            </div>
        )
    
}

const mapStateToProps = state => {
    return {artworks: state.artworks }
}

export default connect(mapStateToProps)(Cart)
