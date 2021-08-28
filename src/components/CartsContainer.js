import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArtworksList from './ArtworksList'


export class CartsContainer extends Component {
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         saved: state.carts.saved
//     }
// }

export default connect(null, addToCart )(CartsContainer)
