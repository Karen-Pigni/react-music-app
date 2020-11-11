import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Navegacion from '../Navegacion/Navegacion'
import './Header.css'

const Header = ({getCanciones}) => {
    return (
        <header>
      <Navegacion/>
            <h1>Canciones Piolas</h1>
            <SearchBar getCanciones={getCanciones}/>
        </header>
    )
}

export default Header
