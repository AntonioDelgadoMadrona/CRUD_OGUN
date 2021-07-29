import queryString from 'querystring';

// ADD / CHANGE FILTER IN URL
export const updateURLFilters = (key: string, value: any, history: any) => {

    // UPDATE THE QUERY
    const query = queryString.decode(window.location.search.replace('?', ''));
    let newQuery = { ...query, [key]: value };

    // DELETE EMPTY KEYS
    for (let key in newQuery) {
        if (newQuery[key] === '' || newQuery[key] === null || newQuery[key] === undefined) delete newQuery[key]
    }

    // SAVE NEW QUERY
    const queryStringified = queryString.encode(newQuery);
    history.push({
        pathname: history.pathname,
        search: queryStringified,
    });
};