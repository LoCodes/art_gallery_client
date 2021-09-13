import React, { Component } from 'react'
import { connect } from 'react-redux'

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
