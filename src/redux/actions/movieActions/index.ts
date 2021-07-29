// ACTION / TYPES
import * as types from './types';
import * as alertActions from '../alertActions';

// SERVICES
import * as movieService from '../../../services/movieService';

// TYPES / INTERFACES
import { Dispatch } from 'redux';
import { IMovieDetails } from './../../../interfaces/IMovieDetails';

// GET MOVIE LIST
export function getMovieListAction(page: number) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await movieService.getMovieList(page)
            .then(response => {
                dispatch(success(response));
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_MOVIE_LIST_REQUEST } };
    function success(payload: any) { return { type: types.GET_MOVIE_LIST_SUCCESS, payload } };
    function failure() { return { type: types.GET_MOVIE_LIST_FAILURE } };
};

// GET MOVIE DETAILS
export function getMovieDetailsAction(id: string) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await movieService.getMovieDetails(id)
            .then(response => {
                dispatch(success(response));
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_MOVIE_DETAILS_REQUEST } };
    function success(payload: any) { return { type: types.GET_MOVIE_DETAILS_SUCCESS, payload } };
    function failure() { return { type: types.GET_MOVIE_DETAILS_FAILURE } };
};

// ADD MOVIE TO FAVOURITE LIST
export function addMovieToFavouritesAction(movieDetails: IMovieDetails) {

    return async function (dispatch: Dispatch) {

        dispatch(request(movieDetails))
        dispatch(alertActions.showToastAction({ message: "Has añadido la pelicula a favoritos", type: "SUCCESS" }));

    };

    function request(payload: IMovieDetails) { return { type: types.ADD_MOVIE_TO_FAVOURITE_LIST, payload } };
};

// DELETE MOVIE FROM FAVOURITE LIST
export function deleteMovieFromFavouritesAction(id: number) {

    return async function (dispatch: Dispatch) {

        dispatch(request(id))
        dispatch(alertActions.showToastAction({ message: "Has eliminado la pelicula de favoritos", type: "SUCCESS" }));

    };

    function request(payload: number) { return { type: types.DELETE_MOVIE_FROM_FAVOURITE_LIST, payload } };
};

// SET MOVIE REDUCER 
export function setMovieReducerAction(tuplesArray: any) {
    return { type: types.SET_MOVIE_REDUCER, payload: tuplesArray }
};

// SEARCH MOVIE
export function searchMovieAction(searchText: string) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await movieService.searchMovie(searchText)
            .then(response => {
                dispatch(success(response));
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.SEARCH_MOVIE_REQUEST } };
    function success(payload: any) { return { type: types.SEARCH_MOVIE_SUCCESS, payload } };
    function failure() { return { type: types.SEARCH_MOVIE_FAILURE } };
};