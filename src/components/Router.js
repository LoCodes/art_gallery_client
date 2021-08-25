import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ArtworksContainer from './ArtworksContainer'
import About from './About'
import Home from './Home'

const Router = () => {
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <ArtworksContainer path="/artworks" component={ArtworksContainer} />
            <About path="/about" component={ About } />
        </Switch>
    )
}

export default Router
