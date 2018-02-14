import React, { Component } from 'react';
import Header from './components/Header'
import MenuItem from './components/MenuItem'
import { push as Menu } from 'react-burger-menu'
import './styles/components/BurgerMenu.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <div className="App App-header">
          <Header/>
        </div>
        <Menu width={230} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <MenuItem title="Home"/>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <div id="page-wrap"  className="App App-container">
          <h1>Comecei aqui</h1>
        </div>
      </div>
    );
  }
}

export default App;
