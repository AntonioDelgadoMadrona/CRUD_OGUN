// REDUCER
import authReducer, { initialState } from './index';

// TYPES
import * as types from '../../actions/authActions/types';

// LOGIN
describe('LOGIN', () => {

    test('should work LOGIN_REQUEST', () => {
        const reducer = authReducer(initialState, { type: types.LOGIN_REQUEST });
        expect(reducer).toEqual({ ...initialState, loggingIn: true });
    });

    test('should work LOGIN_SUCCESS', () => {
        const mockAction = {
            type: types.LOGIN_SUCCESS,
            payload: {
                user: { email: 'test@test.com', password: '13245' },
                token: 'abcdefg'
            }
        };

        const reducer = authReducer(initialState, mockAction);
        const expectedState = {
            ...initialState,
            email: 'test@test.com',
            logged: true,
            loggingIn: false,
        };
        expect(reducer).toEqual(expectedState);
    });

    test('should work LOGIN_FAILURE', () => {
        const reducer = authReducer(initialState, { type: types.LOGIN_FAILURE });
        expect(reducer).toEqual({ ...initialState, loggingIn: false });
    });

});