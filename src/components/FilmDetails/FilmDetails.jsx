import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import React,{useState, useEffect, Suspense} from "react";

import fetchDetails from "../FetchData/FetchDetails"

 function FilmDetails () {
    const [product, setFilms] = useState(null)
  const { id } = useParams();
  const location = useLocation();
  const top = `https://api.themoviedb.org/3/movie/${id}?api_key=2ab76973979a35747718d3c676d235cc&language=en-US`
  const backLinkHref = location.state?.from ?? '/';
  console.log(location)

  useEffect(() => {
       
      
    fetchDetails(top, setFilms)
    
  
  
    
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []
)
  console.log(product)
  return (<>
        <Link to={backLinkHref}>Back to </Link>

    {product && (<main>
        <div>
                  <img src={`https://image.tmdb.org/t/p/w200/${product.poster_path}`} alt="" />
  
          <h2>
              
            Product - {product.title} - {id}
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
            a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
            atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
            praesentium ipsum quos unde voluptatum?
          </p>

        </div>
        <ul key={"dop"}>
        <li style={{color: "red"}}>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li style={{color: "red"}}>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading page...</div>}>

        <Outlet/>
        </Suspense>

      </main>)}
      </>
  );
};

export default FilmDetails;