// TYPES
import * as types from "../../actions/movieActions/types";

// INTERFACES
import { IMovie } from "../../../interfaces/IMovie";
import { IMovieDetails } from "../../../interfaces/IMovieDetails";

const initialState = {
  movieList: [],
  favMovieList: []
};

export default function movieReducer(state = initialState, action: any) {
  switch (action.type) {
    // GET MOVIE LIST
    case types.GET_MOVIE_LIST_REQUEST:
      return { ...state, gettingMovieList: true };
    case types.GET_MOVIE_LIST_SUCCESS:
      const { page, total_pages, total_results, results } = action.payload;
      // GET ONLY SOME PROPERTIES
      let updatedList: IMovie[] = [];
      results.map((movie: any) => {
        const updatedMovie: IMovie = {
          title: movie.title,
          image: movie.poster_path,
          id: movie.id,
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count,
        };
        return updatedList = [...updatedList, updatedMovie];
      })
      return {
        ...state,
        gettingMovieList: false,
        movieList: updatedList,
        moviePagination: {
          itemsPerPage: 20,
          totalItems: total_results,
          totalPages: total_pages,
          currentPage: page
        }
      };
    case types.GET_MOVIE_LIST_FAILURE:
      return { ...state, gettingMovieList: false };
    // GET MOVIE DETAILS
    case types.GET_MOVIE_DETAILS_REQUEST:
      return { ...state, gettingMovieDetails: true };
    case types.GET_MOVIE_DETAILS_SUCCESS:
      const { id, backdrop_path, homepage, overview, poster_path, release_date, title, vote_average, vote_count, genres } = action.payload;
      const movieDetails: IMovieDetails = {
        id,
        backImage: backdrop_path,
        externalLink: homepage,
        overview,
        posterImage: poster_path,
        releaseDate: release_date,
        title,
        voteAverage: vote_average,
        voteCount: vote_count,
        genres: genres.map((genre: any) => genre.name).join().replace(/,/g, '|'),
      };
      return {
        ...state,
        gettingMovieDetails: false,
        movieDetails: { ...movieDetails },
      };
    case types.GET_MOVIE_DETAILS_FAILURE:
      return { ...state, gettingMovieDetails: false };
    // ADD MOVIE TO FAVOURITE LIST
    case types.ADD_MOVIE_TO_FAVOURITE_LIST:
      return {
        ...state,
        favMovieList: [...state.favMovieList, action.payload]
      };
    // DELETE MOVIE FROM FAVOURITE LIST
    case types.DELETE_MOVIE_FROM_FAVOURITE_LIST:
      const updatedFavMovieList = state.favMovieList.filter((movie: IMovieDetails) => movie.id !== action.payload);
      return {
        ...state,
        favMovieList: [...updatedFavMovieList]
      };
    // SET MOVIE REDUCER
    case types.SET_MOVIE_REDUCER:
      let newState = { ...state };
      action.payload.map((tuple: any) => {
        const [key, value] = tuple;
        return newState = {
          ...newState,
          [key]: value
        }
      });
      return state = { ...newState };

    default:
      return { ...state };
  };
};