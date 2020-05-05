import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Details from './components/pages/Details';

import { Route, Switch } from 'react-router-dom'


export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route path='/details' component={Details} />
          <Route component={NotFound} />

        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App
