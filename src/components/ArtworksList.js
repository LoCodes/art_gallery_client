import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { addToCart } from '../actions/CartsActions'
// import { useAuth0 } from '@auth0/auth0-react';
import Art from './Art'


class ArtworksList extends Component {
    render() {
        const artwork = this.props.artworks.map(artwork => {
            return (
                <Art key={artwork.id} artwork={artwork}  />
        )}) 
        
        return (
            <div id="art-container">
                {artwork}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {artworks: state.artworks }
}


export default connect(mapStateToProps)(ArtworksList)



// const ArtworksList = ( { artworks, addToCart  }) => {
   
//     // const art = this.props.artwork
//     // const { isLoading } = useAuth0();

//     // if (isLoading) return <div>Loading...</div>


//     const handleClick = (e, artwork) => {
//         e.preventDefault() 
//         addToCart(artwork)
       
//     }
//     return (
//         <div>
//             <h1> Art Gallery </h1> 

//             {/* this.props.artworks && this.props.artworks.map  */}

//             {artworks.map(artwork => 
//             <ul  key={artwork.id }>
//             <li> 
//                 title: { artwork.title } 
//                 < br />
//                 img: <img src={artwork.img} alt="sometext"  width="300" height="300"/>
//                 < br /> 
//                 description: {artwork.description}
//                 < br />
//                 price: {artwork.price }
//                 <button onClick={(e) => handleClick(e, artwork)}> Add to Cart</button> 

//                 {/* <button onClick={() => addToCart(artwork)}> Add to Cart</button>  */}
//             </li>
//             </ul>)}
            
//         </div>
//     )
// }



// const mapStateToProps = state => {
//     return {artworks: state.artworks }
// }

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         addToCart: (artwork) => dispatch( addToCart(artwork) )
            
// //     }
// // }

// export default connect(mapStateToProps, { addToCart })(ArtworksList);
