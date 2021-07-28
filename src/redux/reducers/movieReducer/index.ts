// TYPES
import * as types from "../../actions/movieActions/types";

// INTERFACES
import { IMovie } from "../../../interfaces/IMovie";

const initialState = {
  movieList: [],
};

export default function movieReducer(state = initialState, action: any) {
  switch (action.type) {
    // GET MOVIE LIST
    case types.GET_MOVIE_LIST_REQUEST:
      return { ...state, gettingmovieList: true };
    case types.GET_MOVIE_LIST_SUCCESS:
      const { page, total_pages, total_results, results } = action.payload;
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
        gettingmovieList: false,
        movieList: updatedList,
        moviePagination: {
          itemsPerPage: 20,
          totalItems: total_results,
          totalPages: total_pages,
          currentPage: page
        }
      };
    case types.GET_MOVIE_LIST_FAILURE:
      return { ...state, gettingmovieList: false };
    // GET MOVIE DETAILS
    case types.GET_MOVIE_DETAILS_REQUEST:
      return { ...state, gettingUserDetails: true };
    case types.GET_MOVIE_DETAILS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        gettingUserDetails: false,
      };
    case types.GET_MOVIE_DETAILS_FAILURE:
      return { ...state, gettingUserDetails: false };

    default:
      return { ...state };
  }
};