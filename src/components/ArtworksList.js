import React from 'react'
import { connect } from 'react-redux'

const ArtworksList = ( { artworks }) => {
    return (
        <div>
            <h1> Art Gallery </h1>

            {artworks.map(artwork => 
            <ul  key={artwork.id }>
            <li> 
                title: { artwork.title } 
                < br />
                img: <img src={artwork.img} alt="sometext"  width="300" height="300"/>
                < br /> 
                description: {artwork.description}
                < br />
                price: {artwork.price }
            </li>
            </ul>)}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {artworks: state.artworks }
}

export default connect(mapStateToProps)(ArtworksList);
