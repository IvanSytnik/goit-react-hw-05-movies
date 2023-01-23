import React,{useState, useEffect} from "react";
import { Box } from "components/Box/Box";
import { Outlet } from 'react-router-dom';
import Films from "./Films";
import FetchData from "components/FetchData/FetchData";
const top = 'https://api.themoviedb.org/3/trending/movie/week?api_key=2ab76973979a35747718d3c676d235cc'
export default function TopMovies() {
    // const [name, setName] = useState('')
    // let [namePhoto, setSubmit] = useState('')
    // const [images, setImages] = useState([])
    // const [isLoading, setLoading] = useState(false)
    // const [isError, setError] = useState(false)
    // const [page, setPage] = useState(1)
    // const [showButton, setShowButton] = useState(false)
    // const [showModal, setShowModal] = useState(false)
    // const [photo, setPhoto] = useState('')
    const [films, setFilms] = useState(null)
   
   
   
//    const openButton = (data) => {
//        if(data.totalHits === 0) {
//          return toast.error(`No photo with ${namePhoto}`)
//        }
//        if(page*12 >= data.totalHits) {
//            setShowButton(false)
//          return toast.error(`No more photo`)
//        }
//          setShowButton(true)
       
//       }
   
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

       {films && (<Films films={films}/>) }
      <Outlet/>
       </Box>
       </>
     )
   }