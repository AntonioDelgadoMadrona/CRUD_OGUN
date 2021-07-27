// TYPES
import * as types from "../../actions/movieActions/types";

const initialState = {
  userList: [],
};

export default function movieReducer(state = initialState, action: any) {
  switch (action.type) {
    // GET MOVIE LIST
    case types.GET_MOVIE_LIST_REQUEST:
      return { ...state, gettingUserList: true };
    case types.GET_MOVIE_LIST_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        gettingUserList: false,
      };
    case types.GET_MOVIE_LIST_FAILURE:
      return { ...state, gettingUserList: false };
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