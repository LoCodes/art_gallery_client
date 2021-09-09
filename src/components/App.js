import React from 'react'
import Router from './Router'
import NavBar from './NavBar'
import { Switch } from 'react-router-dom'
// import ArtworksContainer from './ArtworksContainer'


const App = () => {
    return (
        <div className="app">
            <NavBar/>
            <Switch>
                <Router />            
            </Switch>
        </div>
    )
}


export default App
