import React from 'react'

const StudentListItem = ({_id, name, email, cellPhone, birthDate, cpf, address, instruments, musicStyles}) => (
    
    <div className="list-item">
        <p>Nome: {name}</p>
        <p>E-mail: {email}</p>
        <p>CPF: {cpf}</p>
    </div>
)

export default StudentListItem