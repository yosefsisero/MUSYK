import React from 'react'
import { Link }from 'react-router-dom'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import TopArtist from '../../TopArtist/TopArtist'
import TopTracks from '../../TopTracks/TopTracks'
import TopTag from '../../TopTag/TopTag'
import FotosIzq from '../../FotosIzq/FotosIzq'
import FotosDer from '../../FotosDer/FotosDer'


function Home() {
    return (
        <>
            <Header/>
           
     <div className="container">
        <div className="row">
          <div className="col-sm">
          <FotosIzq/>
          </div>
          <div className="col-sm">
          <TopArtist/>
          </div>
          <div className="col-sm">
          <TopTracks/>   
          </div>
          <div className="col-sm">
          <TopTag/>
          </div>
          <div className="col-sm">
          <FotosDer/>
          </div>
        </div>
      </div>
           
                   
            <Footer/>
        </>
    )
}

export default Home
