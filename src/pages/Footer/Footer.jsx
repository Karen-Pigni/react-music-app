import React, {Fragment} from 'react'
import './Footer.css'


 let fb ='www.nucba.com.ar'
const Footer = () => {
    return (
        
        <Fragment>	
           <footer class="footer">
           <div class="social">
                <a href={fb}><i class="fab fa-facebook fa-2x"></i></a>
                <a href={fb}><i class="fab fa-twitter fa-2x"></i></a>
                <a href={fb}><i class="fab fa-youtube fa-2x"></i></a>
                <a href={fb}><i class="fab fa-linkedin fa-2x"></i></a>
            </div>
      <p>Copyright © 2020 React - BootCamp Nucba</p>
    </footer>
    </Fragment>

    )
}

export default Footer
