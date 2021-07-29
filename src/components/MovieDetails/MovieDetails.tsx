// DEPENDENCIES
import { memo, useEffect } from "react";
import queryString from "querystring";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";

// REDUX
import { connect, RootStateOrAny } from "react-redux";
import {
  getMovieDetailsAction,
  addMovieToFavouritesAction,
  deleteMovieFromFavouritesAction,
  setMovieReducerAction,
} from "../../redux/actions/movieActions";

// COMPONENTS
import { Button } from "../common/Button/Button";

// INTERFACES
import { IMovieDetails } from "../../interfaces/IMovieDetails";

// STYLES
import { StyledMovieDetails as Container, StyledDetails } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  getMovieDetailsAction(id: string): void;
  movieDetails: IMovieDetails;
  addMovieToFavouritesAction(movie: IMovieDetails): void;
  favMovieList: IMovieDetails[];
  deleteMovieFromFavouritesAction(id: number): void;
  setMovieReducerAction(tuplesArray: any): void;
}

const MovieDetails = memo<IProps>(
  ({
    getMovieDetailsAction,
    movieDetails,
    addMovieToFavouritesAction,
    favMovieList,
    deleteMovieFromFavouritesAction,
    setMovieReducerAction,
  }) => {
    // FILTERS FROM URL
    const history = useHistory();
    const { search } = useLocation();
    const { id: movieId }: any = queryString.decode(search.replace("?", ""));

    useEffect(() => {
      getMovieDetailsAction(movieId);
      return (() => setMovieReducerAction([['movieDetails', {}]]))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // CHECKS IF THE MOVIE IS ADDED TO FAV LIST
    const isFav = favMovieList?.some(
      (movie: IMovieDetails) => movie.id === movieDetails?.id
    );

    return (
      <Container>
        <span onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <StyledDetails>
          <img
            className="movieDetails__backImg"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails?.backImage}`}
            alt={`${movieDetails?.title} backImage`}
          />
          <div>
            <div className="movieDetails__posterImg">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails?.posterImage}`}
                alt={movieDetails?.title}
              />
            </div>
            <div className="movieDetails__votes">
              <h4>
                <FontAwesomeIcon icon={faStar} color="red" />{" "}
                {movieDetails?.voteAverage}
              </h4>
              <h4>
                <FontAwesomeIcon icon={faUser} /> {movieDetails?.voteCount}
              </h4>
            </div>
          </div>
          <div className="movieDetails__info">
            <h1>{movieDetails?.title}</h1>
            <h3>
              Fecha estreno:{" "}
              {moment(movieDetails?.releaseDate).format("DD/MM/YYYY")}
            </h3>
            <h4>Genero: {movieDetails?.genres}</h4>
            <h4>Descripcion: </h4>
            <h4>{movieDetails?.overview}</h4>
          </div>
          <Button
            size="large"
            color={`${isFav ? "danger" : "primary"}`}
            onClick={() =>
              isFav
                ? deleteMovieFromFavouritesAction(movieDetails?.id)
                : addMovieToFavouritesAction(movieDetails)
            }
          >
            <FontAwesomeIcon icon={faStar} />
            {isFav ? "Eliminar de favoritos" : "Añadir a favoritos"}
          </Button>
        </StyledDetails>
      </Container>
    );
  }
);

const mapState = (state: RootStateOrAny) => {
  const { movieReducer } = state;
  return {
    movieDetails: movieReducer.movieDetails,
    favMovieList: movieReducer.favMovieList,
  };
};

const mapDispatch = {
  getMovieDetailsAction,
  addMovieToFavouritesAction,
  deleteMovieFromFavouritesAction,
  setMovieReducerAction,
};

export { MovieDetails };

const MovieDetailsContainer = connect(mapState, mapDispatch)(MovieDetails);

export default MovieDetailsContainer;
