import React from 'react'
import {createStringFromDateBR} from '../../helpers/DateHelper'

export default ({teacherName, date, instrument}) => (
    <div>
        <div className="list-item">
            <p>Professor: {teacherName}</p>
            <p>Data: {createStringFromDateBR(date)}</p>
            <p>Instrumento: {instrument}</p>
        </div>
    </div>
)