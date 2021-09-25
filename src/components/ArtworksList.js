import React, { Component } from 'react'
import { connect } from 'react-redux'

import Art from './Art'


class ArtworksList extends Component {

    state = {
        search: ""
    }

    handleSearch = e =>{

        this.setState({search: e.target.value})
    }

    searchTitle = () => {
        return this.props.artworks.filter(artwork => 
            artwork.title.toLowerCase().includes(this.state.search.toLowerCase()))
    }

    render() {
        const {search} = this.state
        // const artwork = this.props.artworks.map(artwork => {
        //     return (
        //         <Art key={artwork.id} artwork={artwork}  />
        // )})        
        return (
            <div id="art-container">
                <input type="text" placeholder="Search by Title" 
                onChange={this.handleSearch}value={search}></input>
                
                {this.searchTitle().map(artwork => {
                    return <Art key={artwork.id} artwork={artwork} />
                })} 
                {/* {artwork} */}               
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {artworks: state.artworks }
}

export default connect(mapStateToProps)(ArtworksList)
