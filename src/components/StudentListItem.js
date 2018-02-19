import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const StudentListItem = ({_id, name, email, cellPhone, birthDate, cpf, address}) => (
    <div>
        <p>{name} cpf: {cpf}</p>
    </div>
)

export default StudentListItem