import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


import './Navegacion.css'

export const Navegacion = () => {
    return (
    <Fragment>
      
           <div className="navbar">
           <h1 className="logo">
            <span><i className="fab fa-react"></i> 1era. App React</span>
          </h1>
          <nav>
            <ul>
              <li>
               <Link to="/" className="">Inicio</Link>
              </li>
              <li>
                 <Link to="/Letra" className="">Nosotros</Link>
              </li>
              <li>
                <Link to="/Contacto" className="">Contacto</Link>
              </li>
            </ul>
          </nav>
           </div>
     </Fragment>  
      



    )
}
export default Navegacion