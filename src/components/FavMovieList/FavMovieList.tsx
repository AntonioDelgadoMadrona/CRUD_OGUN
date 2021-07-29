// DEPENDENCIES
import { memo } from "react";

// REDUX
import { connect, RootStateOrAny } from "react-redux";
import { getMovieListAction } from "../../redux/actions/movieActions";

// COMPONENTS
import { Table } from "../common/Table/Table";

// INTERFACES
import { IMovieDetails } from "../../interfaces/IMovieDetails";

// STYLED
import { movieListContainer as Container, StyledPosterImg } from "./styles";

interface IProps {
  favMovieList: IMovieDetails[];
}

const FavMovieListComponent = memo<IProps>(({ favMovieList }) => {
  // SAVE THE CORRECT COLLECTION FOR SHOW IN ORDER
  let movies: any = [];
  if (favMovieList.length > 0) {
    favMovieList.map((movie: IMovieDetails) => {
      const updatedItem = {
        image: (
          <StyledPosterImg>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.posterImage}`}
              alt={movie.title}
            ></img>
          </StyledPosterImg>
        ),
        title: movie.title,
        voteAverage: movie.voteAverage,
        voteCount: movie.voteCount,
        id: movie.id,
      };
      return (movies = [...movies, updatedItem]);
    });
  }

  return (
    <Container>
      <h1>Tus favoritos</h1>
      <Table items={movies} handlePage={() => {}} />
    </Container>
  );
});

const mapState = (state: RootStateOrAny) => {
  const { movieReducer } = state;
  return {
    favMovieList: movieReducer.favMovieList,
  };
};

const mapDispatch = {
  getMovieListAction,
};

export { FavMovieListComponent };

const FavMovieListContainer = connect(
  mapState,
  mapDispatch
)(FavMovieListComponent);

export default FavMovieListContainer;
