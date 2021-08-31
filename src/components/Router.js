// import React, { Component } from 'react'
import ArtworksList from './ArtworksList'
import { Switch, Route } from 'react-router-dom'
import ArtworksContainer from './ArtworksContainer' // form
import About from './About'
import Home from './Home'
import { CartsContainer } from './CartsContainer'
// import ArtworksForm from './ArtworksForm'

const Router = () => {
    
    return (
        
        <Switch>           
            <Route exact path="/" component={Home} />
            <ArtworksContainer exact path="/artworks/new" component={ArtworksContainer} />
            <About path="/about" component={ About } />
            <ArtworksList path="/artworks" component={ ArtworksList } />
            <CartsContainer path="/cart" component={ CartsContainer} />
            {/* <ArtworksForm path="/artworksform" component={ ArtworksForm } /> */}
            
        </Switch>
    )
}

export default Router
