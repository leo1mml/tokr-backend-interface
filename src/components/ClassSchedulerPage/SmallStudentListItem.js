import React from 'react'

const SmallStudentListItem = ({name, cpf, profilePhotoUrl}) => {

    const profileImage = function(url) {
        if(!url){
            return (
                <img src={require('../../assets/mainPage/no-profile-image.png')} alt="sem foto de perfil" className="user-image-sm"/>
            )
        }
        return (
            <img src={url} alt="imagem de perfil" className="user-image-sm"/>
        )
    }

    return (
        <div className="sm-list-item-container">
            <div className="list-text-container">
                <span className="name-title"><p>{name.split(" ").map((namePiece, index) => {
                                if(index < 1){
                                    return namePiece + " "
                                }else if( index === 1) {
                                    return namePiece                                
                                }
                                return ''
                            } )}</p></span>
                <span className="cpf-text"><p>{cpf}</p></span>
            </div>
            {profileImage(profilePhotoUrl)}
        </div>
    )
}

export default SmallStudentListItem;