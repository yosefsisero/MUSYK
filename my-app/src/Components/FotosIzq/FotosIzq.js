import React from 'react'
import { Link }from 'react-router-dom'
import './FotosIzq.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

function FotosIzq() {
    return (
        <>
            
            <Link to="/buscar"><img className="tamaño" title="Vamos!!" src={img1}/></Link>
            <Link to="/buscar"><img className="tamaño" title="Vamos!!" src={img2}/></Link>
            <Link to="/buscar"><img className="tamaño" title="Vamos!!" src={img3}/></Link>
        </>
    )
}

export default FotosIzq
