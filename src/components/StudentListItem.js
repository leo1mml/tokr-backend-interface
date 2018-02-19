import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const StudentListItem = ({_id, name, email, cellPhone, birthDate, cpf, address, instruments, musicStyles}) => (
    
    <tr>
        <td>{name}</td>
        <td>{cpf}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{instruments.map((instrument) => {
                return `${instrument}, `
            })}</td>
        <td>{musicStyles}</td>
    </tr>
)

export default StudentListItem