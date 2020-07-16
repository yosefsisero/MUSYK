import React from 'react'
import { Link }from 'react-router-dom'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import TopArtist from '../../TopArtist/TopArtist'

function Top10() {
    return (
        <>
            
            <Link to="/buscar"> <Header/></Link>
            <TopArtist /> 
            <Footer/>
        </>
    )
}

export default Top10
