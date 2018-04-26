import React from 'react'
import {createStringFromDateBR} from '../../helpers/DateHelper'

export default ({studentName, date, instrument, isSelected}) => (
    <div className={isSelected ? 'darkened' : undefined}>
        <div className="list-item">
            <p>Aluno: {studentName}</p>
            <p>Data: {createStringFromDateBR(date)}</p>
            <p>Instrumento: {instrument}</p>
        </div>
    </div>
)