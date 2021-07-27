// ACTION / TYPES
import * as types from './types';

// SERVICES
import * as movieService from '../../../services/movieService';

// TYPES
import { Dispatch } from 'redux';

// GET USER LIST
export function getMovieListAction(data: any) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await movieService.getMovieList(data)
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

// GET AN USER BY ID
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