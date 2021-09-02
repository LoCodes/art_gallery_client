import React from 'react'
// import ArtworksList from './ArtworksList'
// import { connect } from 'react-redux'
import {useSelector} from 'react-redux'
import CartArt from './CartArt'



const Cart = () => {
        const artInCart = useSelector(state => state.carts.carts)
        return (
            <div className="cart">

                CART 

                {artInCart.map(artwork => {
                    // return <Art key={artwork.id} artwork={artwork} /> 
                    return <CartArt key={artwork.id} artwork={artwork} />
                })}

                { }
                
            </div>
        )
    
}
export default Cart

// const mapStateToProps = state => {
//     return {artworks: state.artworks }
// }

// export default connect(mapStateToProps)(Cart)
