// ACTION / TYPES
import * as types from './types';

// SERVICES
import * as authService from '../../../services/authService';

// TYPES
import { Dispatch } from 'redux';

// INTERFACES
import { ILoginUser } from './../../../interfaces/ILoginUser';

// UTILS
import { history } from '../../../utils/history';

// LOGIN
export function loginAction(user: ILoginUser) {

    return async function (dispatch: Dispatch) {

        dispatch(request());

        await authService.login(user)
            .then(response => {
                dispatch(success({ user, token: response?.guest_session_id }));
                history.replace("/Movies");
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.LOGIN_REQUEST } };
    function success(payload: any) { return { type: types.LOGIN_SUCCESS, payload } };
    function failure() { return { type: types.LOGIN_FAILURE } };
};

// LOGOUT
export function logoutAction() {

    return function (dispatch: Dispatch) {
        dispatch(request());
        history.replace("/Login");
    };

    function request() { return { type: types.LOGOUT_REQUEST } };
};