import React from 'react'
import { Link }from 'react-router-dom'
import Logo from './Logo.png'
import './Header.css'

function Header() {
    return (
        <>
     <header>
        <nav className="navbar navbar-lg" id="a">
        <img className="logo" src={Logo}/>
        <h1 className="navbar-brand pagina">MUSYK</h1>
        <div className="menu1">
           
            <Link className="menu" to="/">Home</Link>
        
            <Link className="menu" to="/buscar">Search</Link>
            
        </div>
      </nav>
   </header>

  
        </>
    )
}

export default Header
