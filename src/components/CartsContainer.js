import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ArtworksList from './ArtworksList'


export class CartsContainer extends Component {
    // state = {
    //     cart: []
    // }

    componentDidMount(){
        this.props.fetchCarts()
    }
    
    render() {
        // console.log(this.props.carts)
        // const artworks = this.props.artworks.map( artwork => <ArtworksList artwork={artwork} />)
        return (
            <div id="cart-container">
               {/* {artworks}  */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.carts.cart
    }
}

export default connect(null, mapStateToProps )(CartsContainer)
