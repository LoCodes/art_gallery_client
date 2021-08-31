import React, { Component } from 'react'
import { addArtwork }from '../actions/ArtworksActions.js'
import { connect } from 'react-redux'


class ArtworksForm extends Component {

    state = {
        title: '',
        description: '',
        img: '',
        price: '',
        user_id: 1, 
        cart_id: 1
    }

    // handle onchange in each input, so client can type 
    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        }) 
    }

    // dispatch and post to api 

    handleSubmit = e => {
        e.preventDefault()
        this.props.addArtwork(this.state)
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h1> Add Artwork </h1>
                <label>Title:</label>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="title" />
                < br /> 
                <label> Img:</label>
                <input type="text" value={this.state.img} onChange={this.handleChange} name="img" />
                < br /> 
                <label> Description:</label>
                <input type="text" value={this.state.description}onChange={this.handleChange} name="description" />
                < br /> 
                <label> price:</label>
                <input type="text" value={this.state.price} onChange={this.handleChange} name="price" />
                <br /> 
                <input type="hidden" defaultValue= {1} onChange={this.handleChange}  name="user_id" />
                <input type="hidden" defaultValue= {1} onChange={this.handleChange}  name="cart_id" />


                <input type="submit" value="Add Art" />
            </form>
        )
    }
}

export default connect(null, { addArtwork })(ArtworksForm)
