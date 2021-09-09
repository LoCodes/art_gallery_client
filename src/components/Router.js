// import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ArtworksContainer from './ArtworksContainer' // form
import About from './About'
import Home from './Home'
// import { CartsContainer } from './CartsContainer'
import Cart from './Cart'
import ArtworksForm from './ArtworksForm'

const Router = () => {
    
    return (
        
        <Switch>           
            <Route exact path="/" component={ Home } />
            <ArtworksForm path="/artworks/new" component={ ArtworksForm } />
            <ArtworksContainer path="/artworks" component={ ArtworksContainer } />
            <About path="/about" component={ About } />
            <Cart path="/cart" component={ Cart } />           
        </Switch>
    )
}

export default Router
