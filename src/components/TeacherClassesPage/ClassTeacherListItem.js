import React from 'react'
import {createStringFromDateBR} from '../../helpers/DateHelper'

export default ({studentName, date, instrument}) => (
    <div>
        <div className="list-item">
            <p>Aluno: {studentName}</p>
            <p>Data: {createStringFromDateBR(date)}</p>
            <p>Instrumento: {instrument}</p>
        </div>
    </div>
)