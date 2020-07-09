import React from 'react'
import { Link }from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
          <ul className="navbar-nav">
            <li className="nav-item active">
             <Link to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/top10">Top 10</Link>
            </li>
          </ul>
      </nav>
   </header>
        </>
    )
}

export default Header
