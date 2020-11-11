import React, {Fragment} from 'react'
import './Boton.css'

const Button = ({getCanciones}) => {
    return (
        <>
            <button onClick={getCanciones}>Search</button>
        </>
    )
}

export default Button
