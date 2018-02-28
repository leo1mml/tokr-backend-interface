import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const TeacherListItemDetail = (props) => {
    const teacher = props.teacher

    const profileImage = function(url) {
        if(!url){
            return (
                <img src={require('../../assets/mainPage/no-profile-image.png')} alt="sem foto de perfil" className="user-image"/>
            )
        }
        return (
            <img src={url} alt="imagem de perfil" className="user-image"/>
        )
    }

    if(teacher){
        console.log(teacher);
        return (
            <div>
                <div className="name-image-title-container">
                    <div className="name-title">
                        <p>{teacher.name.split(" ").map((namePiece, index) => {
                                if(index < 1){
                                    return namePiece + " "
                                }else if( index === 1) {
                                    return namePiece                                }
                            } )}</p>
                    </div>
                    <div className="user-image-container">
                        {
                            profileImage(teacher.profilePhotoUrl)
                        }
                    </div>
                </div>
                <div className="details-container">
                    <p>CPF: {teacher.cpf}</p>
                    <p>Instrumentos: {teacher.instruments.map((instrument, index) => {
                            if(index !== (teacher.instruments.length - 1)){
                                return instrument + ", "
                            }
                            return instrument + "."
                        })}
                    </p>
                    <p>Status: {teacher.status ? teacher.status : "Pendente"}</p>
                    <p>Celular: {teacher.cellPhone}</p>
                    <p>Endereço: {teacher.address.map((addressPiece, index) => {
                            if(index !== (teacher.address.length - 1)){
                                return addressPiece + ", "
                            }
                            return addressPiece + "."
                        })}
                    </p>
                </div>
                <div className="bottom-buttons-container">
                    <button className="classes-btn">Aulas</button>
                    <button className="edit-btn">Editar</button>
                </div>
            </div>
        )
    }
    console.log(teacher);
    return (
        <div>
            <h3>Nenhum Professor Selecionado</h3>
        </div>
    )
    
}

export default TeacherListItemDetail