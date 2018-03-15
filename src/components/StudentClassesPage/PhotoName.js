import React from 'react'


export default ({profilePhotoUrl, name}) => (
    <div className="photo-name-container">
        <img src={profilePhotoUrl? profilePhotoUrl : require('../../assets/mainPage/no-profile-image.png')} alt="foto-perfil" className="user-image"/>
        <p className="name-title-classes">{name}</p>
    </div>
) 