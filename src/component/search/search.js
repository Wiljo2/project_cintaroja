import React,{useState, useEffect} from "react";
import  './search.css';
import Axios from "axios";
import Card from './../card/card';



function Search (){

    const [texto,setTexto]= useState('');
    const [lugares,setLugares]= useState ([]);

    const api_key = 'AIzaSyAoh1PEZKlbQsozfP7CXm3bVrZm_pQVOaw';
    const resultadoBusquedad =() =>{
        Axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=${texto}&keyword=cruise&key=${api_key}`)
        .then (({data})=>{
            
            setLugares(data.results)
        })
        .catch ((error)=> console.log(error));
    };


    const handleChange =(event)=> {
        setTexto(event.target.value);
    };

    useEffect(()=>{
    resultadoBusquedad();
     
    },[texto]);

    return (<>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <label>Encuentra</label>
            <input type="text" placeholder="Que Deseas Buscar?" onChange={handleChange}/>
        </div>
        <div className="MyCard">
            {lugares.map((elemento)=>{
                    const result = {
                    	id: elemento.results.id,
                    	name: elemento.results.name,
                        open: elemento.results.opening_hours.open_now,
                        rating: elemento.results.rating
                    }
                    return <Card key={result.id} titulo ={result.name} img={result.open} texto={result.rating}/>;



                })
                
            }
            
            
        </div>
        </>  
    );


}

export default Search;