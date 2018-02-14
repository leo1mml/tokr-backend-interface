import React from 'react'

class Header extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <header>
            <img src={require('../assets/mainPage/logo_tokr.png')} height="60" alt="logo-site"/>
        </header>
    );
  }
}

export default Header