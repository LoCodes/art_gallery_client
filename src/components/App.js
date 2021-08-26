import React from 'react'
// import ArtworksContainer from './ArtworksContainer'
import Router from './Router'
import NavBar from './NavBar'
import { Switch } from 'react-router-dom'


const App = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
            Hello World - APP 
            {/* <ArtworksContainer /> */}
            {/* <NavBar /> */}
            <Router />

            </Switch>
        </div>
    )
}

export default App
