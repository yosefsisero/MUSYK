import React, { useState, useEffect} from 'react'
import axios from 'axios';
import './Search.css'
import 'bootstrap/dist/css/bootstrap.css'



function Search() {

    const [artista, setArtista] = useState ('');
    const [genero, setGenero] = useState ([]);
    const [resum, setResum] = useState ('');
    const [album, setAlbum] = useState ([]);
    const [similar, setSimilar] = useState([]);
    const [toFind, setToFind] = useState('');
    const [id, setId] = useState ('');
    const [tr, setTr] = useState ([]);
    const [nm, setNm] = useState ('');
    const [nom, setNom] = useState ([]);
    const [you, setYou] = useState ([]);
   

    const API = `http://ws.audioscrobbler.com/2.0/`;
    const KEY = 'ebbf1095239b4faa07ac8e41009d2575';
    const NAPKEY = `ZmU4YzdlNTAtNDVjNy00NmRjLTkxODItNDJmZTJhNDE1ZjQw`;
    const URLINFO = `${API}?method=artist.getinfo&artist=${toFind}&api_key=${KEY}&format=json&limit=5`;
    const URLALBUM = `${API}?method=artist.gettopalbums&artist=${toFind}&api_key=${KEY}&format=json&limit=6`;
    const NAPURLINFO = `https://api.napster.com/v2.1/artists/${toFind}?apikey=${NAPKEY}&limit=5`;
    const NAPTRACK = `https://api.napster.com/v2.1/artists/${id}/tracks/top?apikey=${NAPKEY}&limit=5`;
    const URLADBNOM = `https://theaudiodb.com/api/v1/json/1/search.php?s=${toFind}`;
    const URLADBYOU = `https://theaudiodb.com/api/v1/json/1/mvid.php?i=${nom}&limit=5`
    

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
     let tr1 = response.data.tracks
     let nm1 = response.data.tracks[0].name

       setTr(tr1)
       setNm(nm1)
       console.log(tr1)
       
    })
    .catch((error) => {
        console.log(error);
    })

      
}, [id])

useEffect(()=> {
    axios.get (URLADBNOM)

    .then((response) => {
     let nom1 = response.data.artists[0].idArtist
     

       setNom(nom1)
       console.log(nom1)
       
       
    })
    .catch((error) => {
        console.log(error);
    })

      
}, [toFind])

useEffect(()=> {
    axios.get (URLADBYOU)
    
    .then((response) => {

     let you1 = response.data.mvids
     let a = []
     
     for(let i = 0; i <= 5; i++){

         a.push(you1[i].strMusicVid)
     }
      let z = a.map((e)=>{
          return  e.replace("watch?v=", "embed/")
      })
      
      setYou(z)
      console.log(z)
    
    })
    .catch((error) => {
        console.log(error);
    })

      
}, [nom])





    return (

        <div className="fondo">
            <div className="row">
            <div className="col-sm-6 titulos">  
            <input id="input" placeholder=" Search Artist" onChange={(event)=>{setToFind(event.target.value)}}/>
            </div> 
            <div className="col-sm-6 titulos">  
            <u><h3> YouTube</h3></u>
            </div> 
            </div>
             
            <div className="container">
                <div className="row">

                    <div className="col-sm-5">                     
                     <u><h2 id="artista">{artista}</h2></u>
                     {tr.map((a) => {
                        return  <p key={a.name}><audio className="controles" controls src={a.previewURL}></audio>{a.name}</p>
                     })} 
                    </div>
                   

                    <div className="col-sm-7 YT">
                    
                            {you.map((vid) => {
                            return <iframe className="marco" width={250} height={180} src={vid} key={vid}></iframe>         
                            })}
                    
                    </div>

                   <div>
                   <u><h3 id="AL">Top Albums</h3></u>
                   <div className="discos">
                               {album.map((alb)=>{
                                    return ( 
                                        
                                        <div className="card-album" style={{width: '10rem'}}>
                                        <a key={alb.url} href={alb.url} target="_blank" title={alb.url}><img key={alb.img} src={alb.image[2]['#text']} className="card-img-top" alt="..." /></a>      
                                        <div className="card-body">
                                        <p className="card-text" key={alb.name}>{alb.name}</p>
                                        </div>
                                        </div>
                         )})}
                   </div>
                   </div>
   
                 <div className="w-100" />
                    <div className="col-sm-6 segunda">
                        <u><h3> Gender</h3></u>    
                        {genero.map((gen) =>{
                                return <h4 key={gen.name}>{gen.name}</h4>
                        })}                 
                    </div>

                    <div className="col-sm-6 segunda">
                            <u><h3>Similar Artists</h3></u> 
                            {similar.map((sim) => {
                            return <div>
                                        <h4 key={sim.name}>{sim.name}</h4>
                                    </div>
                            })}
                    
                    </div>
                </div>


             <div>                    
                <u><h3 className="summary1"> Summary</h3></u>  <h4 className="summary2">{resum}</h4>                   
             </div>

          </div>
        </div>
    )
}

export default Search

