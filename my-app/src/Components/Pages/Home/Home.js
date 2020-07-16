import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import TopArtist from '../../TopArtist/TopArtist'
import TopTracks from '../../TopTracks/TopTracks'
import TopTag from '../../TopTag/TopTag'


function Home() {
    return (
        <>
            <Header/>
           
     <div className="container">
        <div className="row">
          <div className="col-sm">
          <TopArtist/>
          </div>
          <div className="col-sm">
          <TopTracks/>   
          </div>
          <div className="col-sm">
          <TopTag/>
          </div>
        </div>
      </div>
           
                   
            <Footer/>
        </>
    )
}

export default Home
