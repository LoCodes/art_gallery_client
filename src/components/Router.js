import { Switch, Route } from 'react-router-dom'

import ArtworksContainer from './ArtworksContainer' // form
import About from './About'
import Home from './Home'
import CartsContainer from './CartsContainer'
import ArtworksForm from './ArtworksForm'
import UsersContainer from './UsersContainer'

const Router = () => {
    
    return (
        
        <Switch>           
            <Route exact path="/" component={ Home } />
            <Route path="/artworks/new" component={ ArtworksForm } />
            <Route path="/artworks" component={ ArtworksContainer } />
            <Route path="/about" component={ About } />
            <Route path="/cart" component={ CartsContainer } />     
            <Route path="/users" component={ UsersContainer} />
        </Switch>
    )
}

export default Router
