import React from 'react'
import {createStringFromDateBR} from '../../helpers/DateHelper'

export default ({teacherName, date, instrument, isSelected}) => (
    <div className={isSelected ? 'darkened' : undefined}>
        <div className="list-item">
            <p>Professor: {teacherName}</p>
            <p>Data: {createStringFromDateBR(date)}</p>
            <p>Instrumento: {instrument}</p>
        </div>
    </div>
)