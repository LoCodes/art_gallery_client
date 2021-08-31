import React, { Component } from 'react'

class Art extends Component {

    // art = this.props.artwork


    // handleClick = (e, artwork) => {
    //     e.preventDefault() 
    //     addToCart(artwork)
    //     // console.log(e.value)
    // }

    render() {
        const art = this.props.artwork
        return (
            <div className="art">
                <h3>Title: {art.title} </h3>
                <img src={art.img} alt={art.description} width="300" height="300" />
                <p>Description: {art.description}</p>
                <h4>Price: {art.price} </h4>
                {/* <button onClick={() => this.props.addSaved(art)}> Add to Recipe Book </button>  */}
                {/* <button onClick={(e) => handleClick(e, artwork)}> Add to Cart</button>  */}

            </div>
        )
    }
}

export default Art
