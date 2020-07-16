import React, { useState, useEffect} from 'react'
import { Link }from 'react-router-dom'
import axios from 'axios';

function TopTag() {

    const API = `http://ws.audioscrobbler.com/2.0/`;
    const KEY = 'ebbf1095239b4faa07ac8e41009d2575';
    const URLINFO = `${API}?method=chart.gettoptags&api_key=${KEY}&format=json&limit=10`;

    const [info, setInfo] = useState([]);

    useEffect(()=> {
       
        axios.get (URLINFO)
           .then((response) => {
            let info1 = response.data.tags.tag
       
           setInfo(info1)

         })
          .catch((error) => {
          console.log(error);
          })        
     },)
    return (
        <div>
            <u><h3>Gender Top10</h3></u>
            {info.map((inf)=>{
              return ( 
              <Link to="/buscar"> <p className="summary1 top" title="Vamos!!" key={inf.name}>{inf.name}</p> </Link>
          )
      })}  
    
        </div>
    )
}

export default TopTag