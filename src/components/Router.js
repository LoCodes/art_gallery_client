// import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ArtworksContainer from './ArtworksContainer' // form
import About from './About'
import Home from './Home'
import ArtworksList from './ArtworksList'
import ArtworksForm from './ArtworksForm'

const Router = () => {
    
    return (
        
        <Switch>           
            <Route exact path="/" component={Home} />
            <ArtworksContainer exact path="/artworksform" component={ArtworksContainer} />
            <About path="/about" component={ About } />
            <ArtworksList path="/artworkslist" component={ ArtworksList } />
            {/* <ArtworksForm path="/artworksform" component={ ArtworksForm } /> */}
        </Switch>
    )
}

export default Router
