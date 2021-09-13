import React from 'react'
// import ArtworksList from './ArtworksList'
// import { connect } from 'react-redux'
import {useSelector} from 'react-redux'
import CartArt from './CartArt'


const CartsContainer = () => {
        const artInCart = useSelector(state => state.carts.carts)

        const countCartItem = useSelector(state => state.carts.carts.length)

        const getTotalPrice = (items) => 
            items.map((item) => item.price).reduce((total, value) => total + value, 0)
          
        const result = getTotalPrice(artInCart);        

        let counter = -1
                
        return (
            <div className="cart">

                CART 
                <br />
                Items in Cart: {countCartItem}
                {artInCart.map((artwork, idx) => {
                    counter++ 
                    return <CartArt key={idx} artwork={artwork} position={counter}/>
                    
                })}
                
                total: { Math.round(result * 100) / 100 }
            </div>
        )
}
export default CartsContainer

