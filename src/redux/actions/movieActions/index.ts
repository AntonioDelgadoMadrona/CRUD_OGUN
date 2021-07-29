// ACTION / TYPES
import * as types from './types';

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
    return { type: types.ADD_MOVIE_TO_FAVOURITE_LIST, payload: movieDetails };
};

// DELETE MOVIE FROM FAVOURITE LIST
export function deleteMovieFromFavouritesAction(id: number) {
    return { type: types.DELETE_MOVIE_FROM_FAVOURITE_LIST, payload: id };
};

// SET MOVIE REDUCER 
export function setMovieReducerAction(tuplesArray: any) {
    return { type: types.SET_MOVIE_REDUCER, payload: tuplesArray }
};