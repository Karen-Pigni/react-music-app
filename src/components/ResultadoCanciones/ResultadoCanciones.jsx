import React  from 'react'
import './ResultadoCanciones.css'
import useFetch from '../Hooks/Usefetch';
import Cancion from '../Cancion/Cancion'


const ResultadoCanciones = () => {
  const { loading, data: canciones, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

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
      {canciones?.map((cancion) => (
        <Cancion key={cancion.id} id={cancion.id} artista={cancion.body} title={cancion.title} />
      ))}
    </div>




//************************** */

    )
}




export default ResultadoCanciones
