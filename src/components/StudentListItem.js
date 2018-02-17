import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const StudentListItem = ({_id, name, email, cellPhone, birthDate, cpf, address}) => (
    <div>
        <h3>{name}</h3>
    </div>
)

export default StudentListItem