import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1>Canciones Piolas</h1>
            <SearchBar/>
        </header>
    )
}

export default Header
