import React, {Fragment} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ResultadoCanciones from '../../components/ResultadoCanciones/ResultadoCanciones'

const Home = () => {
    return (
        <Fragment>
           <Header />
                <ResultadoCanciones />
           <Footer />
        </Fragment>
    )
}

export default Home
