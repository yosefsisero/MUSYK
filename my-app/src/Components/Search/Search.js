import React, { useState, useEffect} from 'react'
import axios from 'axios';



function Search() {

    const [artista, setArtista] = useState ('');
    const [genero, setGenero] = useState ([]);
    const [resum, setResum] = useState ('');
    const [album, setAlbum] = useState ([]);
    // const [track, setTrack] = useState ([]);
    // const [musica, setMusica] = useState ([])
    const [similar, setSimilar] = useState([])
    const [toFind, setToFind] = useState('');
    const [id, setId] = useState ('');
    const [tr, setTr] = useState ('');
    const [nm,setNm] = useState ('');

    const API = `http://ws.audioscrobbler.com/2.0/`;
    const KEY = 'ebbf1095239b4faa07ac8e41009d2575';
    const NAPKEY = `ZmU4YzdlNTAtNDVjNy00NmRjLTkxODItNDJmZTJhNDE1ZjQw`;
    const URLINFO = `${API}?method=artist.getinfo&artist=${toFind}&api_key=${KEY}&format=json&limit=5`;
    const URLALBUM = `${API}?method=artist.gettopalbums&artist=${toFind}&api_key=${KEY}&format=json&limit=5`;
    // const URLTRACK = `${API}?method=artist.gettoptracks&artist=${toFind}&api_key=${KEY}&format=json&limit=10`;
    const NAPURLINFO = `https://api.napster.com/v2.1/artists/${toFind}?apikey=${NAPKEY}&limit=5`;
    const NAPTRACK = `https://api.napster.com/v2.1/artists/${id}/tracks/top?apikey=${NAPKEY}&limit=5`
    

    useEffect(()=> {
            axios.get (URLINFO)
            .then((response) => {
             let nombre = response.data.artist.name
             let estilo = response.data.artist.tags.tag
             let resumen = response.data.artist.bio.summary
             let similar1 = response.data.artist.similar.artist
    
               setArtista(nombre)
               setGenero(estilo)
               setResum(resumen)
               setSimilar(similar1)
              
            })
            .catch((error) => {
                console.log(error);
            })
    
              
    }, [toFind])
        

    useEffect(()=> {
       
   axios.get (URLALBUM)
      .then((response) => {
       let album1 = response.data.topalbums

      setAlbum(album1.album)
        
    })
     .catch((error) => {
     console.log(error);
     })        
}, [toFind])

// useEffect(()=> {
       
//     axios.get (URLTRACK)
//     .then((response) => {
//      let track1 = response.data.toptracks.track
//      let track2 = response.data.toptracks.track[0].url
    
       
//        setTrack(track1)
//        setMusica(track2)
     
     
//     })
//     .catch((error) => {
//         console.log(error);
//     })        
// }, [toFind])

useEffect(()=> {
    axios.get (NAPURLINFO)
    .then((response) => {
     let id1 = response.data.artists[0].id
     

       setId(id1)
       console.log(id1)
    })
    .catch((error) => {
        console.log(error);
    })

      
}, [toFind])

useEffect(()=> {
    axios.get (NAPTRACK)
    .then((response) => {
     let tr1 = response.data.tracks[0].previewURL
     let nm1 = response.data.tracks[0].name
     

       setTr(tr1)
       setNm(nm1)
       
    })
    .catch((error) => {
        console.log(error);
    })

      
}, [id])




    return (
        <>
          
          <input placeholder=" Search Artist" onChange={(event)=>{setToFind(event.target.value)}}/>
          <button onClick={(event)=>{setToFind(event.target.value)}}>Search</button>  
               <p> Artist: {artista}</p> 
               <p><audio controls src={tr} ></audio>{nm}</p>
               <p> Gen: {genero.map((gen) =>{
                   return <p>{gen.name}</p>
               })}</p>

               <p> Summary: {resum}</p>

               <p> Top Albums: {
                    album.map((alb)=>{
                        return <div>
                            <p>{alb.name}</p>
                            <img src={alb.image[1]['#text']}/> 
                            </div>
                    })
                    }</p>


                    

               {/* <p> Track: {track.map((tra) =>{
                   return <p>{tra.name}</p>
               })}</p> */}

               {/* <iframe src={musica}/> */}

               


               <p>Similar Artists: {similar.map((sim) => {
                   return <div>
                       <p>{sim.name}</p>
                       </div>

               })}</p>
        </>
    )
}

export default Search

/*{ PENDIENTES
    
    CON DAVID
    2:hacer el input para buscar con boton

    NUESTROS
    1:hacer el header y el footer 
    3:hacer componente para el top 10 
    4:pensar de que poner en la pagina de home
    5:arreglar search con bootsrap con cards

 }*/
