import { SearchBy } from '../utils/seacrhByName/searchByName';

const searchBy = new SearchBy();

const _ = require('lodash');

const initialState = {
    allFilms: [],
    currentFilms: [],
    selectedMovie: [],
    byLikes: [],
    byStars: [],
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {...state, allFilms: action.payload, currentFilms: action.payload, byLikes: false, byStars: false};

        case 'SORT_BY_LIKES':
            if (state.byLikes === false) {
                return {...state, byLikes: true, currentFilms:_.sortBy(state.currentFilms, 'likes').reverse()};
            } else {
                return {...state, byLikes: false, currentFilms: _.sortBy(state.currentFilms, 'likes')};
            };

        case 'SORT_BY_STARS':
            if (state.byStars === false) {
                return {...state, byStars: true, currentFilms: _.sortBy(state.currentFilms, 'stars').reverse()};
            } else {
                return {...state, byStars: false, currentFilms: _.sortBy(state.currentFilms, 'stars')};
            };

        case 'SEARCH_BY_NAME':
            const input = document.getElementById('searchInput')
            return {...state, currentFilms: searchBy.searchByName(input, state.allFilms)};

        case 'SEARCH_RESET':
            document.getElementById('searchInput').value = '';
            return {...state, currentFilms: state.allFilms};

        case 'SELECT_MOVIE':
            const title = action.payload.target.innerHTML;
            let movie;
            state.allFilms.forEach((el) => {if (el.title === title) {movie = el}});
            return {...state, selectedMovie: movie};

        default:
            return state;
    };
};

export default reducer;