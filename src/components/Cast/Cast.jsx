import fetchDetails from "../FetchData/FetchDetails"
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const CastList = ({product}) => {
    return(
        <>
        {product !=='' ? 
        (<>{product.map(({id, original_name, profile_path}) =>(
            <li key={id}>
                <img src={`https://image.tmdb.org/t/p/w400https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
                <h2>{original_name}</h2>
            </li>))}
            </>) : (<h2>We don't have any cast for this movie</h2>)}
        
     </>
    )
}
function Cast () {
    const [product, setFilms] = useState(null)
    const { id } = useParams();
    const top = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=2ab76973979a35747718d3c676d235cc&language=en-US`
    
    useEffect(() => {
         
        
      fetchDetails(top, setFilms)
      
    
    
      
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 return(
    <>
    <div>
        <ul>       
            {product && (<CastList product={product.cast.slice(0, 20)}/>) }
        </ul>
        </div>
    </>
 )
}

export default Cast