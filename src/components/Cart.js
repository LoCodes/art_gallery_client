import React, { Component } from 'react'
import ArtworksList from './ArtworksList'
import { connect } from 'react-redux'


export class Cart extends Component {
    render() {
        const artwork = this.props.cart
        return (
            <div className="cart">
                <h3> CART </h3>


                
            </div>
        )
    }
}

export default Cart
