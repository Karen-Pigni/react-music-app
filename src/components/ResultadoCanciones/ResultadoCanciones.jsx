import React  from 'react'
import './ResultadoCanciones.css'

import Cancion from '../Cancion/Cancion'




const ResultadoCanciones = ({canciones,error,loading}) => {
//   const { loading, data:canciones , error } = useFetch(
//  `https://api.lyrics.ovh/suggest/queen`
//   );
 //   //debemos cambiarlo
  // `https://jsonplaceholder.typicode.com/posts`


  if (loading) {
    return <p className="loading">Loading....</p>;
  }


  if (error) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }
  return (
    <div className="canciones">
      {canciones?.data.map((cancion) => (
        <Cancion key={cancion.id} id={cancion.id} artista={cancion.body} title={cancion.title} />
      ))}
    </div>

    )
}




export default ResultadoCanciones
