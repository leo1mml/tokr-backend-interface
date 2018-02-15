import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddStudentpage from '../components/AddStudentPage'
import StudentsList from '../components/StudentsList'
import { push as Menu } from 'react-burger-menu'
import Header from '../components/Header'
import MenuItems from '../components/MenuItems'
import '../styles/components/BurgerMenu.css'

export default () => (
    <BrowserRouter>
    <div id="outer-container">
      <Header/>
        <Menu width={230} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <MenuItems/>
        </Menu>
        <div id="page-wrap">
          <Switch>
            <Route path="/" component={StudentsList} exact={true}/>
            <Route path="/addStudent" component={AddStudentpage}/>
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </div>
    </div>
    </BrowserRouter>
)