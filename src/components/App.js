import React from 'react'
import Router from './Router'
import NavBar from './NavBar'


const App = () => {
    return (
        <div className="app">
            <NavBar/>          
            <Router />                       
        </div>
    )
}


export default App
