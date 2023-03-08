import { Link } from "react-router-dom";
 const FilmList = ({ products, location }) => {
  return (
    <ul class="cards__list">
      {products.map((product) => (
        <li class="cards__item" key={product.id}>
          <Link to={`/movies/${product.id}`} state={{ from: location }}>
            <img src={`https://image.tmdb.org/t/p/w400https://image.tmdb.org/t/p/w500${product.poster_path}`} alt="" />
            <h2 class="cards__name">{product.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
