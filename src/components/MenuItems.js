import React from 'react'
import { NavLink } from 'react-router-dom';


export default (props) => (
    <NavLink to="/" className="menuText" activeClassName="is-active" exact={true}>
        <div>
            <p>Alunos</p>
        </div>
    </NavLink>
)