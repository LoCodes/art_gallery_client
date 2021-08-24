import React, { Component } from 'react'

class ArtworksForm extends Component {

    state = {
        title: '',
        description: '',
        img: '',
        price: ''
    }

    render() {
        return (
            <form>
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
                <input type="submit" value="Add Art" />
            </form>
        )
    }
}

export default ArtworksForm
