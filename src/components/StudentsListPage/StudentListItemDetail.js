import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const StudentListItemDetail = (props) => {
    const profiileImage = () => {
        if(props.profilePhotoUrl){
            return (
                <img src={props.profilePhotoUrl} alt="profile photo"/>
            )
        }else {
            return (
                <img src={require('../assets/mainPage/no-profile-image.png')} alt="no profile image"/>
            )
        }
    }
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
                {this.profiileImage}
            </div>
            <div>
                {console.log("PROOOOOOPS:", props)}
                <p>CPF: {props.cpf}</p>
                <p>Instrumentos: {props.instruments? props.instruments.toString() : ""}.</p>
                <p>Status: {props.status}</p>
                <p>Celular: {props.cellPhone}</p>
                <p>Endereço: {props.address}</p>
                <p>Data de Nascimento: {props.birthDate}</p>
            </div>
        
        </div>
    )
}

export default StudentListItemDetail