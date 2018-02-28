import React from 'react'

const TeacherListItem = ({_id, profilePhotoUrl, name, email, cellPhone, birthDate, cpf, address, instruments, operationalArea}) => (
    
    <div className="list-item">
        <p>Nome: {name}</p>
        <p>E-mail: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Área Operacional: {operationalArea}</p>
    </div>
)

export default TeacherListItem