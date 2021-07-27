// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';


// GET USER LIST
export async function getMovieList(data: any) {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`https://reqres.in/api/users?delay=1&page=${data.currentPage}`, requestOptions).then(handleResponse, handleError);
};

// GET AN USER BY ID
export async function getMovieDetails(id: string) {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`https://reqres.in/api/users/${id}?delay=1`, requestOptions).then(handleResponse, handleError);
};
