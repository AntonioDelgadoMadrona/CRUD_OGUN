// DEPENDENCIES
import { memo, useEffect, useState } from "react";

// REDUX
import { connect, RootStateOrAny } from "react-redux";
import { getMovieListAction } from "../../redux/actions/movieActions";

// COMPONENTS
import { Table } from "../common/Table/Table";

// UTILS
import { history } from "../../utils/history";
// import { IUser } from "../../interfaces/IUser";

// INTERFACES
import { IMovie } from "../../interfaces/IMovie";

// STYLED
import { movieListContainer as Container, StyledPosterImg } from "./styles";

interface IProps {
  getMovieListAction(page: number): void;
  movieList: IMovie[];
  moviePagination: any;
}

interface IState {
  currentPage: number;
};

const MovieList = memo<IProps>(
  ({ getMovieListAction, movieList, moviePagination }) => {
    const initialState: IState = {
      currentPage: 1,
    };

    const [state, setState] = useState<IState>(initialState);

    useEffect(() => {
      getMovieListAction(state.currentPage);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);       

    // CHANGE THE PAGE FROM TABLE
    const handlePage = (selectedPage: number) => {
      setState((prevState) => ({ ...prevState, currentPage: selectedPage }));
    };

    // SAVE THE CORRECT COLLECTION FOR SHOW IN ORDER
    let movies: any = [];
    if (movieList.length > 0) {
      movieList.map((movie: IMovie) => {
        const updatedItem = {
          image: (
            <StyledPosterImg>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt={movie.title}></img>
            </StyledPosterImg>
          ),
          title: movie.title,
          voteAverage: movie.voteAverage,
          voteCount: movie.voteCount,
          id: movie.id
        };
        return (movies = [...movies, updatedItem]);
      });
    }

    return (
      <Container>
        <h1>Las más populares</h1>
        <Table
          items={movies}
          page={moviePagination}
          handlePage={handlePage}
        />
      </Container>
    );
  }
);

const mapState = (state: RootStateOrAny) => {
  const { movieReducer } = state;
  return {
    movieList: movieReducer.movieList,
    moviePagination: movieReducer.moviePagination,
  };
};

const mapDispatch = {
  getMovieListAction,
};

export { MovieList };

const movieListContainer = connect(mapState, mapDispatch)(MovieList);

export default movieListContainer;
