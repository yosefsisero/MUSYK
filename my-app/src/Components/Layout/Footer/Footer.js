import React from 'react'
import './Footer.css'
import Logo from '../Header/Logo.png'





function Footer() {
    return (
        <>
        <footer className="footer">
        
        <img className="logo" src={Logo}/>
        <i class="fab fa-affiliatetheme"></i>
        <p>© Yosef Sisero / Jacobo Zonana 2020 ® Musyk All Rigths Reserved</p>
        
        {/* <div className="redes">
           
           <i><a className="fab fa-facebook-square fa-2x" href="https://www.facebook.com/></a></i>
           <i><a className="fab fa-twitter fa-2x" href="https://twitter.com/"></a></i>
           <i><a className="fab fa-instagram fa-2x" href="https://www.instagram.com/"></a></i>
           <i><a className="fab fa-pinterest fa-2x" href="https://ar.pinterest.com/"></a></i>
           <i><a className="fab fa-linkedin fa-2x" href="https://www.linkedin.com/"></a></i>
       
        </div> */}
        


        </footer>  

    
            
        </>
    )
}

export default Footer
