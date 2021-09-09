import React from 'react'
// import ArtworksList from './ArtworksList'
// import { connect } from 'react-redux'
import {useSelector} from 'react-redux'
import CartArt from './CartArt'


const Cart = () => {
        const artInCart = useSelector(state => state.carts.carts)

        // const getTotalCost = (artInCart)  =>{
            // // console.log(state)
            // return artInCart.reduce((sum, artwork) => artwork.qty * artwork.price + sum, 0); 
            // }
        const countCartItem = useSelector(state => state.carts.carts.length)
        // const total = artInCart.reduce((sum, item) => sum + countCartItem * item.price, 0);
            // console.log(artInCart.total)

            
        const getTotalPrice = (items) => items
            .map((item) => item.price)
            .reduce((acc, value) => acc + value, 0)
          
        const result = getTotalPrice(artInCart);        
        // console.log(Math.round(result * 100) / 100);

        let counter = -1

                
        return (
            <div className="cart">

                CART 
                <br />
                Items in Cart: {countCartItem}
                {artInCart.map((artwork, idx) => {
                    // return <Art key={artwork.id} artwork={artwork} /> 
                    counter++ 
                    return <CartArt key={idx} artwork={artwork} position={counter}/>
                    
                })}
                
                total: { Math.round(result * 100) / 100 }

            </div>
        )
    
}
export default Cart

