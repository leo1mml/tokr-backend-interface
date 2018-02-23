import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const StudentListItem = ({_id, name, email, cellPhone, birthDate, cpf, address, instruments, musicStyles}) => (
    
    <div className="list-item">
        <p>Nome: {name}</p>
        <p>E-mail: {email}</p>
    </div>
)

export default StudentListItem