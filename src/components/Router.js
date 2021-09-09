// import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ArtworksContainer from './ArtworksContainer' // form
import About from './About'
import Home from './Home'
// import { CartsContainer } from './CartsContainer'
import CartsContainer from './CartsContainer'
import ArtworksForm from './ArtworksForm'

const Router = () => {
    
    return (
        
        <Switch>           
            <Route exact path="/" component={ Home } />
            <Route path="/artworks/new" component={ ArtworksForm } />
            <Route path="/artworks" component={ ArtworksContainer } />
            <Route path="/about" component={ About } />
            <Route path="/cart" component={ CartsContainer } />           
        </Switch>
    )
}

export default Router
