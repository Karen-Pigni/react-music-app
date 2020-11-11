import React, {Fragment} from 'react'

import './Footer.css'


 let fb ='https://www.nucba.com.ar'
const Footer = () => {
    return (
        
        <Fragment>	
           <footer className="footer">
           <div className="social">
               
               <a href={fb}><i className="fab fa-facebook fa-2x"></i></a>
                <a href={fb}><i className="fab fa-twitter fa-2x"></i></a>
                <a href={fb}><i className="fab fa-youtube fa-2x"></i></a>
                <a href={fb}><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
      <p>Copyright © 2020 React - BootCamp Nucba</p>
    </footer>
    </Fragment>

    )
}

export default Footer
