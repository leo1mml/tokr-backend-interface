import React from 'react'
import { NavLink } from 'react-router-dom';


export default (props) => (
    <div>
        <NavLink to="/" className="menuText" activeClassName="is-active" exact={true}>
            <div>
                <p>Agendar Aulas</p>
            </div>
        </NavLink>
        <NavLink to="/teachersList" className="menuText" activeClassName="is-active" exact={true}>
            <div>
                <p>Professores</p>
            </div>
        </NavLink>
        <NavLink to="/studentsList" className="menuText" activeClassName="is-active" exact={true}>
            <div>
                <p>Alunos</p>
            </div>
        </NavLink>
    </div>
    
)