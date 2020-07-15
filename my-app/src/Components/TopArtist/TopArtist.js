import React, { useState, useEffect} from 'react'
import axios from 'axios';

function TopArtist() {
    const API = `http://ws.audioscrobbler.com/2.0/`;
    const KEY = 'ebbf1095239b4faa07ac8e41009d2575';
    const TOPART = `${API}?method=chart.gettopartists&api_key=${KEY}&format=json&limit=10`

    const [artist, setArtist] = useState([])

    useEffect(()=> {
       
        axios.get (TOPART)
           .then((response) => {
            let art = response.data.artists.artist
     
           setArtist(art)
             
         })
          .catch((error) => {
          console.log(error);
          })        
     },)
     
    return (
        <>
           {artist.map((a) => {
               return <div>
               <p>{a.name}</p>
               <img src={a.image[2]['#text']}/>
               </div>
            })}
           {/**/}
            
        </>
    )
}

export default TopArtist
