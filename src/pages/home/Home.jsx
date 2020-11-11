import React, {Fragment,useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ResultadoCanciones from '../../components/ResultadoCanciones/ResultadoCanciones'
import useFetch from '../../components/Hooks/Usefetch';
const Home = () => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [canciones,setCanciones] = useState([])

    function getCanciones(){
        const {loading, data:canciones , error } = useFetch(`https://api.lyrics.ovh/suggest/queen`);
        setLoading(loading)
        setCanciones(canciones)
        setError(error)
    }

    return (
        <Fragment>
           <Header getCanciones={getCanciones} />
                <ResultadoCanciones canciones={canciones} error={error} loading={loading} />
           <Footer />
        </Fragment>
    )
}

export default Home
