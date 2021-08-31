import React from 'react'
// import ArtworksList from './ArtworksList'
// import { connect } from 'react-redux'
import {useSelector} from 'react-redux'
import Art from './Art'



const Cart = () => {
        const artInCart = useSelector(state => state.carts.carts)
        // debugger
        // const artworks = this.props.carts.map(cart => console.log(cart))
        return (
            <div className="cart">
                {/* {artworks = this.props.carts.map(cart => console.log(cart))} */}

                CART 

                {artInCart.map(artwork => {
                    return <Art key={artwork.id} artwork={artwork} />
                })}
            </div>
        )
    
}
export default Cart

// const mapStateToProps = state => {
//     return {artworks: state.artworks }
// }

// export default connect(mapStateToProps)(Cart)
