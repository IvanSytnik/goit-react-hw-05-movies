import fetchDetails from "../FetchData/FetchDetails"
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const ReviewsList = ({product}) => {
    return(
        <>
        {product !=="" ? 
        (<ul>{product.map(({id, author, content}) =>(
            <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
            </li>))}</ul>) : (<h2>We don't have any reviews for this movie</h2>)}
        
     </>
    )
}
function Reviews () {
    const [product, setFilms] = useState(null)
    const { id } = useParams();
    const top = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2ab76973979a35747718d3c676d235cc&language=en-US`
    
    useEffect(() => {
         
        
      fetchDetails(top, setFilms)
      
    
    
      
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 return(
    <>
    <div>
        
        {product  && (<ReviewsList product={product.results}/>) }
        </div>
    </>
 )
}

export default Reviews