// data and methods here 
// form will be here 

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchArtworks } from '../actions/ArtworksActions'

class ArtworksContainer extends Component {

    componentDidMount(){
        this.props.fetchArtworks()
    }

    render() {
        return (
            <div>
                ArtworksContainer!
            </div>
        )
    }
}

export default connect(null, {fetchArtworks} )( ArtworksContainer )