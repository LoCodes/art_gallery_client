import React, { Component } from 'react'

class ArtworksForm extends Component {

    state = {
        title: '',
        description: '',
        img: '',
        price: ''
    }

    // handle onchange in each input, so client can type 
    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        }) 
    }

    // dispatch and post to api 

    // handleSubmit

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
