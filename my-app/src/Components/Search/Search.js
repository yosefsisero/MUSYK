import React, { useState, useEffect} from 'react'
import axios from 'axios';



function Search() {

    const [artista, setArtista] = useState ('');
    const [genero, setGenero] = useState ('');
    const [resum, setResum] = useState ('');
    const [album, setAlbum] = useState ('');
    const [track, setTrack] = useState ('');
    const [image, setImage] = useState ('');
    const [musica, setMusica] = useState ('')
    const [similar, setSimilar] = useState('')

    const API = `http://ws.audioscrobbler.com/2.0/`;
    const KEY = 'ebbf1095239b4faa07ac8e41009d2575';
    const URLINFO = `${API}?method=artist.getinfo&artist=Cher&api_key=${KEY}&format=json`;
    const URLALBUM = `${API}?method=artist.gettopalbums&artist=cher&api_key=${KEY}&format=json`;
    const URLTRACK = `${API}?method=artist.gettoptracks&artist=cher&api_key=${KEY}&format=json`;

    useEffect(()=> {
            axios.get (URLINFO)
            .then((response) => {
             let nombre = response.data.artist.name
             let estilo = response.data.artist.tags.tag[0].name
             let resumen = response.data.artist.bio.summary
             let similar1 = response.data.artist.similar.artist[0].name
    
               setArtista(nombre)
               setGenero(estilo)
               setResum(resumen)
               setSimilar(similar1)
              
            })
            .catch((error) => {
                console.log(error);
            })
    
              
    }, [])
        

    useEffect(()=> {
       
   axios.get (URLALBUM)
      .then((response) => {
       let album1 = response.data.topalbums.album[0].name
       let foto1 = response.data.topalbums.album[0].image[1]['#text']

      setAlbum(album1)
      setImage(foto1)
                  
    })
     .catch((error) => {
     console.log(error);
     })        
}, [])

useEffect(()=> {
       
    axios.get (URLTRACK)
    .then((response) => {
     let track1 = response.data.toptracks.track[0].name
     let track2 = response.data.toptracks.track[0].url
    
       
       setTrack(track1)
       setMusica(track2)
     
     
    })
    .catch((error) => {
        console.log(error);
    })        
}, [])




    return (
        <>

               <p> Artist: {artista}</p> 
               <p> Gen: {genero}</p>
               <p> Summary: {resum}</p>
               <p> Album: {album}</p>
               <img src={image}/>
               <p> Track: {track}</p>
               <p>sonido: {musica}</p>
               <p>Similar: {similar}</p>
        </>
    )
}

export default Search

/*{ PENDIENTES
    
    CON DAVID
    1: hacer el map para albums,tracks,genero y similares
    2: como escuchar la musica 

    NUESTROS
    1:hacer el header y el footer
    2:hacer el input para buscar 
    3:hacer componente para el top 10 
    4:pensar de que poner en la pagina de home
    5:arreglar search con bootsrap con cards

 }*/
