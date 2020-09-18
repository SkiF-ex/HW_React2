export const getFilms = (payload) => ({
    type: 'GET_MOVIES',
    payload,
});

export const sortByLike = () => ({
    type: 'SORT_BY_LIKES',
});

export const sortByStars = () => ({
    type: 'SORT_BY_STARS',
});

export const searchByName = (payload) => ({
    type: 'SEARCH_BY_NAME',
    payload,
});

export const searchReset = () => ({
    type: 'SEARCH_RESET',
});

export const selectMovie = (payload) => ({
    type: 'SELECT_MOVIE',
    payload,
});