import { Link } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "./FilmList.styled";
 const FilmList = ({ products, location }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Link to={`/movies/${product.id}`} state={{ from: location }}>
            <img src={`https://image.tmdb.org/t/p/w400https://image.tmdb.org/t/p/w500${product.poster_path}`} alt="" />
            <ProductName>{product.title}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default FilmList;
