import React, { useState, useEffect} from 'react'
import axios from 'axios';



function Search() {

    const [artista, setArtista] = useState ('');
    const [genero, setGenero] = useState ('');
    const [resum, setResum] = useState ('');
    const [album, setAlbum] = useState ('');
    

    const API = `http://ws.audioscrobbler.com/2.0/`;
    const KEY = 'ebbf1095239b4faa07ac8e41009d2575';
    const URLINFO = `${API}?method=artist.getinfo&artist=Cher&api_key=${KEY}&format=json`;
    const URLALBUM = `${API}?method=artist.gettopalbums&artist=cher&api_key=${KEY}&format=json`;

    const getinfo = () =>{
        axios.get (URLINFO)
        .then((response) => {
         let nombre = response.data.artist.name
         let estilo = response.data.artist.tags.tag[0].name
         let resumen = response.data.artist.bio.summary

           setArtista(nombre)
           setGenero(estilo)
           setResum(resumen)
          
        })
        .catch((error) => {
            console.log(error);
        })

        };  
        
        getinfo()

            

        // const getalbum = () =>{
        //     axios.get (URLALBUM)
        //     .then((response) => {
        //      let album1 = response.data.topalbums.album[0].name
             
    
        //        setAlbum(album1)
              
              
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    
        //     };  
            
        //     getinfo()


    return (
        <>
               <p> Artist: {artista}</p> 
               <p> Gen: {genero}</p>
               <p> Summary: {resum}</p>
               <p> Summary: {album}</p>
        </>
    )
}

export default Search
