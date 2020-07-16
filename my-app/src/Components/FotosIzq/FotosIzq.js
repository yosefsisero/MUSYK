import React from 'react'
import './FotosIzq.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

function FotosIzq() {
    return (
        <>
            <img className="tamaño" src={img1}/>
            <img className="tamaño" src={img2}/>
            <img className="tamaño" src={img3}/>
        </>
    )
}

export default FotosIzq
