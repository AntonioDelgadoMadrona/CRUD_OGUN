// DEPENDENCIES
import { memo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "querystring";

// REDUX
import { connect, RootStateOrAny } from "react-redux";
import {
  getMovieListAction,
  searchMovieAction,
} from "../../redux/actions/movieActions";

// COMPONENTS
import { Table } from "../common/Table/Table";

// INTERFACES
import { IMovie } from "../../interfaces/IMovie";

// STYLED
import {
  movieListContainer as Container,
  StyledPosterImg,
  InputContainer,
} from "./styles";
import { Input } from "../common/Input/Input";
import { updateURLFilters } from "../../utils/urlFilters";

interface IProps {
  getMovieListAction(page: number): void;
  movieList: IMovie[];
  moviePagination: any;
  searchMovieAction(searchText: any): void;
}

const MovieList = memo<IProps>(
  ({ getMovieListAction, movieList, moviePagination, searchMovieAction }) => {
    // FILTERS FROM URL
    const history = useHistory();
    const { search } = useLocation();
    const { searchText, page } = queryString.decode(search.replace("?", ""));

    useEffect(() => {
      const currentPage = page ? Number(page) : 1;
      if (searchText) searchMovieAction(searchText);
      else getMovieListAction(currentPage);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, searchText]);

    // UPDATE URL FILTER BY KEY VALUE
    const handleChange = (event: any) => {
      const { name, value } = event.target;
      updateURLFilters(name, value, history);
    };

    // CHANGE THE PAGE FROM TABLE
    const handlePage = (selectedPage: number) => {
      updateURLFilters("page", selectedPage, history);
    };

    // SAVE THE CORRECT COLLECTION FOR SHOW IN ORDER
    let movies: any = [];
    if (movieList.length > 0) {
      movieList.map((movie: IMovie) => {
        const updatedItem = {
          image: (
            <StyledPosterImg>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
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
        <h1>Las más populares</h1>
        <InputContainer>
          <Input
            type="text"
            label="Busca tu pelicula favorita"
            name="searchText"
            value={searchText ?? ""}
            onChange={handleChange}
            disableError
          />
        </InputContainer>
        <Table items={movies} page={moviePagination} handlePage={handlePage} />
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
  searchMovieAction,
};

export { MovieList };

const movieListContainer = connect(mapState, mapDispatch)(MovieList);

export default movieListContainer;
