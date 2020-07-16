import React, { useState, useEffect} from 'react'
import { Link }from 'react-router-dom'
import axios from 'axios';
import './TopTracks.css'

function TopTracks() {

    const API = `http://ws.audioscrobbler.com/2.0/`;
    const KEY = 'ebbf1095239b4faa07ac8e41009d2575';
    const URLINFO = `${API}?method=geo.getToptracks&country=mexico&api_key=${KEY}&format=json&limit=10`;

    const [info, setInfo] = useState([]);

    useEffect(()=> {
       
        axios.get (URLINFO)
           .then((response) => {
            let info1 = response.data.tracks.track
       
           setInfo(info1)

         })
          .catch((error) => {
          console.log(error);
          })        
     },)
    return (
        <div>
            <u><h3>Tracks Top10
                </h3></u>
            {info.map((inf)=>{
              return (
            <Link to="/buscar"> <p className="summary1 top" title="Vamos!!" key={inf.name}>{inf.name}</p> </Link>
              
          )
      })}  
    
        </div>
    )
}

export default TopTracks
