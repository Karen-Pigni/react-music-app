import React from 'react'
import Boton from '../Boton/Boton'
import './SearchBar.css'

const SearchBar = () => {
    return (
       <form id="form">
             <input type="text" id="search" placeholder="Canción o Artista...." />
             <Boton />
      </form>
    )
}

export default SearchBar
