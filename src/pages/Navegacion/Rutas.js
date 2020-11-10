import React from 'react'
import {Router,Switch,Route} from 'react-router-dom'

const Rutas = () => {
    return (
          <Router>
        <Switch>  
          <Route path="/" exact>
           Inicio
          </Route>
            <Route path="/Letra">
           Letra
          </Route>
        </Switch>
        
        </Router>
    )
}

export default Rutas
