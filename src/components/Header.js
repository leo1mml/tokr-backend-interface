import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <header className="App App-header">
          <NavLink to="/"><img src={require('../assets/mainPage/logo_tokr.png')} height="60" alt="logo-site"/></NavLink>
        </header>
    );
  }
}

export default Header