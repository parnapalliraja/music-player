import React, { useState, useEffect } from 'react'
import Search from './Search'
import token from '../util/token'
import Artist from './Artist';
const URL = "https://api.spotify.com";

const apiHeaders = new Headers();
apiHeaders.append("Authorization",token.id);

const reqOptions = {
    method: 'GET',
    headers: apiHeaders,
    redirect:'follow'
}

function Music() {
    const [artist,setArtist] = useState([])

    const searchHandler = (artistName) => {
        fetch(`${URL}/v1/search?q=${artistName}&type=artist`,reqOptions)
        .then(res => res.json())
        .then(out => {
            console.log('artists =',out);
            setArtist(out.artists.items);
        })
        .catch(err => console.log(err.message))
    } 

    useEffect(()=>{
        searchHandler('Ilayaraja')
    },[])

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h3 className='display-3'>Music player </h3>
            </div>
        </div>
        <Search artistSearch={searchHandler} />
        <Artist artistInfo={artist} itemCount={6} />
    </div>
  )
}

export default Music