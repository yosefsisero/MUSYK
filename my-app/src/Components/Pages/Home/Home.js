import React from 'react'
import './Home.css'
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
           
     <div className="j">
        <div className="row margen">
          <div className="col-sm p">
          <FotosIzq/>
          </div>
          <div className="col-sm bordes">
          <TopArtist/>
          </div>
          <div className="col-sm bordes">
          <TopTracks/>   
          </div>
          <div className="col-sm bordes">
          <TopTag/>
          </div>
          <div className="col-sm u">
          <FotosDer/>
          </div>
        </div>
      </div>
           
                   
            <Footer/>
        </>
    )
}

export default Home
