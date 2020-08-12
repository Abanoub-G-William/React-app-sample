import React, { Component } from 'react'
import './App.css';
import Navbar from'./components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'



import {Route} from 'react-router-dom'

export class App extends Component {
    render() {
    return (
      <div className = 'main-app'>
        <Navbar/>
        <Route exact path ='/' render = {()=>(<Portfolio/>)} />
        <Route path ='/About' render = {()=>(<About/>)} />
        <Route path ='/Contact' render = {()=>(<Contact/>)} />

        <Footer/>
      </div>
    )
  }
}

export default App
