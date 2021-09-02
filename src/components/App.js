import React from 'react'
// import ArtworksContainer from './ArtworksContainer'
import Router from './Router'
import NavBar from './NavBar'
import { Switch } from 'react-router-dom'


const App = () => {

    // state = {
    //     cart: []
    // }

    return (
        <div className="app">
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


// const MSTP = (state) => {
//   return { cart: state.artworks}
// }

// export default connect(MSTP)(App)

export default App
