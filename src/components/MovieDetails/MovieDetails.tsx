// DEPENDENCIES
import React, { useEffect } from "react";
import queryString from "querystring";
import { Link, useLocation } from "react-router-dom";

// REDUX
import { connect, RootStateOrAny } from "react-redux";
import { getMovieDetailsAction } from "../../redux/actions/movieActions";

// STYLED
import { StyledMovieDetails as Container, StyledDetails } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  getMovieDetailsAction(id: string): void;
  movieDetails: any;
}

const MovieDetails = React.memo<IProps>(
  ({
    getMovieDetailsAction,
    movieDetails,
  }) => {

    // FILTERS FROM URL
    const { search } = useLocation();
    const { id: movieId }: any = queryString.decode(search.replace('?', ''));

    useEffect(() => {
      getMovieDetailsAction(movieId);
    }, []);

    console.log(movieDetails);

    return (
      <Container>
        <Link to="/Movies">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
        <StyledDetails>
          <h2>{movieDetails?.title}</h2>
        </StyledDetails>
      </Container>
    );
  }
);

const mapState = (state: RootStateOrAny) => {
  const { movieReducer } = state;
  return {
    movieDetails: movieReducer.movieDetails,
  };
};

const mapDispatch = {
  getMovieDetailsAction
};

export { MovieDetails };

const MovieDetailsContainer = connect(mapState, mapDispatch)(MovieDetails);

export default MovieDetailsContainer;
