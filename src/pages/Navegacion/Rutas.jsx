import React from 'react'
import {Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Letra from './pages/Letra/Letra';

const Rutas = () => {
    return (
        <Router>
        <Switch>  
          <Route path="/" exact>
           <Home />
          </Route>
            <Route path="/Letra">
           <Letra/>
          </Route>
           <Route path="/Contacto">
           Contacto
          </Route>
        </Switch>
        
        </Router>
    )
}

export default Rutas
