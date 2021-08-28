import React, { Component } from 'react'

class Art extends Component {

    render() {
        const art = this.props.artwork
        return (
            <div className="art">
                <h3>Title: {art.title} </h3>
                <img src={art.img} alt={art.description} width="300" height="300" />
                <p>Description: {art.description}</p>
                <h4>Price: {art.price} </h4>
                <button onClick={() => this.props.addSaved(art)}> Add to Recipe Book </button> 
                
            </div>
        )
    }
}

export default Art
