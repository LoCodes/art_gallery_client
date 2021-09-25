import React from 'react'
import Router from './Router'
import NavBar from './NavBar'
import ArtworksContainer from './ArtworksContainer'


const App = () => {
    return (
        <div className="app">
            <NavBar/>          
            <Router />   
                            
        </div>
    )
}


export default App
