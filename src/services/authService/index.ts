// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';

// LOGIN
export async function login(user: any) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return await fetch(`https://reqres.in/api/login?delay=1`, requestOptions).then(handleResponse, handleError);
};