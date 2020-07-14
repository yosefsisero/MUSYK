import React from 'react'
import './Footer.css'
import Logo from '../Header/Logo.png'





function Footer() {
    return (
        <>
        <footer className="footer">
        
        <img className="logo" src={Logo}/>
        <i className="fab fa-affiliatetheme"></i>
        <p>© Yosef Sisero / Jacobo Zonana 2020 ® Musyk All Rigths Reserved</p>
        
         <div className="redes">
           
         <a  href="https://www.facebook.com"><i className="fa fa-facebook fa-2x"></i></a>
           <a href="https://twitter.com/"><i className="fa fa-twitter fa-2x" ></i></a>
           <a href="https://www.instagram.com/"><i className="fa fa-instagram fa-2x"></i></a>
           <a href="https://ar.pinterest.com/"><i className="fa fa-pinterest fa-2x"></i></a>
           <a href="https://www.linkedin.com/"><i className="fa fa-linkedin fa-2x"></i></a>
       
        </div> 
        


        </footer>  

    
            
        </>
    )
}

export default Footer
