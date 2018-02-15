import React from 'react'
import '../App.css'

class Header extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <header className="App App-header">
            <img src={require('../assets/mainPage/logo_tokr.png')} height="60" alt="logo-site"/>
        </header>
    );
  }
}

export default Header