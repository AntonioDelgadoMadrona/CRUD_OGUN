// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';

// API KEY
import { API_KEY } from '../../utils/apiKey';

// INTERFACES
import { IRequestOptionGet } from './../../interfaces/IRequestOptions';

// GET USER LIST
export async function getMovieList(page: number) {

    const requestOptions: IRequestOptionGet = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`, requestOptions).then(handleResponse, handleError);
};

// GET AN USER BY ID
export async function getMovieDetails(id: string) {

    const requestOptions: IRequestOptionGet = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`, requestOptions).then(handleResponse, handleError);
};
