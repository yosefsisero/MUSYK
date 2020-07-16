import React from 'react'
import { Link }from 'react-router-dom'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'


function FotosDer() {
    return (
        <div>
            <Link to="/buscar"><img className="tamaño" title="Vamos!!" src={img4}/></Link>
            <Link to="/buscar"><img className="tamaño" title="Vamos!!" src={img5}/></Link>
            <Link to="/buscar"><img className="tamaño" title="Vamos!!" src={img6}/></Link>
        </div>
    )
}

export default FotosDer
