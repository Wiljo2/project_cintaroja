import React from 'react'
import axios from 'axios';

function peticion( ) {
   
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${}&radius=1500&type=${}&keyword=cruise&key=AIzaSyAoh1PEZKlbQsozfP7CXm3bVrZm_pQVOaw`)
    .then(({ data })=>{
        console.log(data.data);
    })
    .catch((err)=> console.log(err));
   
    return (
        <>




        </>
    )
}

export default peticion
