import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import TopArtist from '../../TopArtist/TopArtist'
import TopTracks from '../../TopTracks/TopTracks'


function Home() {
    return (
        <>
            <Header/>
            <div className="home">
            <TopArtist/>
            <TopTracks/>
            </div>
            <Footer/>
        </>
    )
}

export default Home
