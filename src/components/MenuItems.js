import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/components/MenuItem.css'

export default (props) => (
    <div>
        <NavLink to="/" className="menuText" activeClassName="is-active" exact={true}>Alunos</NavLink> <br/>
        {/* <NavLink to="/addStudent" className="menuText" activeClassName="is-active">Professores</NavLink> */}
    </div>
)