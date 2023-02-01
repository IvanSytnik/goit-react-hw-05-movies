import React,{useState, useEffect} from "react";
import { Box } from "components/Box/Box";
import { Outlet, useLocation } from 'react-router-dom';
import FilmList  from "../FilmList/FilmList"
import FetchData from "components/FetchData/FetchData";
const top = 'https://api.themoviedb.org/3/trending/movie/week?api_key=2ab76973979a35747718d3c676d235cc'
 function TopMovies() {

    const [films, setFilms] = useState(null)
    const location = useLocation();
   
   
   
useEffect(() => {
    console.log(films)
}, [films])
   useEffect(() => {
       
      
         FetchData(top, setFilms)
         
       
       
         
       
       // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []
   )
   
   
    return(
       <>
           <Box display="flex" justifyContent="center" flexDirection="column">

       {films && (<FilmList location={location} products={films}/>) }
      <Outlet/>
       </Box>
       </>
     )
   }
   export default TopMovies