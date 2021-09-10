// data and methods here 
// form will be here ??

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchArtworks } from '../actions/ArtworksActions'
// import ArtworksForm from './ArtworksForm'
import ArtworksList from './ArtworksList'


class ArtworksContainer extends Component {
    // I DONT NEED THIS?
    componentDidMount(){
        this.props.fetchArtworks()
        // debugger
    }

    render() {
        return (
            <div className="art-container">
                ArtworksContainer!
                <ArtworksList /> 
                {/* <ArtworksForm /> */}
            </div>
        )
    }
}

export default connect(null, {fetchArtworks} )( ArtworksContainer )