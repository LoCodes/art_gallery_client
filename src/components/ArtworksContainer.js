// data and methods here 
// form will be here 

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchArtworks } from '../actions/ArtworksActions'
import ArtworksForm from './ArtworksForm'
// import ArtworksList from './ArtworksList'

class ArtworksContainer extends Component {

    componentDidMount(){
        this.props.fetchArtworks()
    }

    render() {
        return (
            <div>
                ArtworksContainer!
                <ArtworksForm />
                {/* <ArtworksList />  */}
            </div>
        )
    }
}

export default connect(null, {fetchArtworks} )( ArtworksContainer )