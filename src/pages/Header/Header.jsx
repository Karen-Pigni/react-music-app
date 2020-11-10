import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Navegacion from '../Navegacion/Navegacion'
import './Header.css'

const Header = () => {
    return (
        <header>
      <Navegacion/>
            <h1>Canciones Piolas</h1>
            <SearchBar/>
        </header>
    )
}

export default Header
