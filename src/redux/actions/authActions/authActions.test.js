// DEPENDENCIES
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

// ACTIONS
import * as actions from './index';
import * as authService from '../../../services/authService';

// CONFIG
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
console.error = jest.fn();

describe('getAllPoolBetsAction', () => {

    let store;
    beforeEach(() => {
        store = mockStore({});
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    test('should complete successfully', async () => {

        const mockUser = { email: 'test@test.com', password: '12345' };
        const response = { guest_session_id: 'abcdefgd' };

        fetchMock.mock(authService.login(), response);

        const expectedActions = [
            { type: 'LOGIN_REQUEST' },
            { type: 'LOGIN_SUCCESS', payload: { user: mockUser, token: response.guest_session_id } },
            { type: 'SHOW_TOAST', payload: { message: "Has iniciado sesion", type: "SUCCESS" } }
        ];

        await store.dispatch(actions.loginAction(mockUser))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });

});