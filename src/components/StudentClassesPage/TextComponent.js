import React from 'react'

export default (props) => (
    <div className="text-container">
        <p>
            {props.text? props.text : "Sem resumo ainda"}
        </p>
    </div>
)