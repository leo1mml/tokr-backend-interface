import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const StudentListItemDetail = (props) => {
    const student = props.student

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

    if(student){
        return (
            <div>
                <div className="name-image-title-container">
                    <div className="name-title">
                        <p>{student.name.split(" ").map((namePiece, index) => {
                                if(index < 1){
                                    return namePiece + " "
                                }else if( index === 1) {
                                    return namePiece                                }
                            } )}</p>
                    </div>
                    <div className="user-image-container">
                        {
                            profileImage(student.profileImageUrl)
                        }
                    </div>
                </div>
                <div className="details-container">
                    <p>CPF: {student.cpf}</p>
                    <p>Instrumentos: {student.instruments.map((instrument, index) => {
                            if(index !== (student.instruments.length - 1)){
                                return instrument + ", "
                            }
                            return instrument + "."
                        })}
                    </p>
                    <p>Status: {student.status ? student.status : "Pendente"}</p>
                    <p>Estilos Musicais: {student.musicStyles.map((style, index) => {
                            if(index !== (student.musicStyles.length - 1)){
                                return style + ", "
                            }
                            return style + "."
                        })}
                    </p>
                    <p>Celular: {student.cellPhone}</p>
                    <p>Endereço: {student.address.map((addressPiece, index) => {
                            if(index !== (student.address.length - 1)){
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
    
    return (
        <div>
            <h3>Nenhum Aluno Selecionado</h3>
        </div>
    )
    
}

export default StudentListItemDetail