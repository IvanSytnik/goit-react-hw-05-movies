import {  useSearchParams, Outlet, useLocation } from "react-router-dom";
import React,{useState, useEffect, Suspense} from "react";
import { toast} from 'react-toastify';
import FilmList from "components/FilmList/FilmList";
import fetchData from "../FetchData/FetchData"
import Searchbar from "components/Searchbar/Searchbar";
 function ResultFilms () {

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setFilms] = useState(null)
  const [word, setWord] = useState('')
  const name = searchParams.get("qeury") ?? '';

    const handleQeury = event => {
      setWord(event.target.value)
    
    }
    const handleSubmit= event => {
        event.preventDefault();
        if(word.trim() === '') {
            console.log(word)
            return  toast.error("Please enter word")
        }
        console.log(word)
        setSearchParams(word ? { qeury: word} : {})
        console.log(name)
    }


  useEffect(() => {
    if(name) {
        fetchData(`https://api.themoviedb.org/3/search/movie?api_key=22fa368820f7f9af3c30ea0e6b34461d&query=${name}&page=1https://api.themoviedb.org/3/search/movie?api_key=2ab76973979a35747718d3c676d235cc&query=${name}&page=1`, setFilms )
    }
}, [name])

  
  return (<>
  <div>
  <Searchbar name={word} handleName={handleQeury}  handleSubmit={handleSubmit}></Searchbar> 
  <p>Name: {name}</p>
  {product && (<FilmList location={location} products={product}/>) }
  <Suspense fallback={<div>Loading page...</div>}>

  <Outlet/>
  </Suspense>

  </div>
    
  </>
  );
};
export default ResultFilms