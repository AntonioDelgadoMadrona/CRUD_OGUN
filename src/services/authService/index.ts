// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';
import { API_KEY } from '../../utils/apiKey';

// INTERFACES
import { ILoginUser } from '../../interfaces/ILoginUser';
import { IRequestOptionGet } from './../../interfaces/IRequestOptions';

// LOGIN
export async function login(user: ILoginUser) {

    const requestOptions: IRequestOptionGet = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`, requestOptions).then(handleResponse, handleError);
};