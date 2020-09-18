import {getFilms, sortByLike, sortByStars, searchByName, searchReset, selectMovie} from './actions';

const mapState = (state) => {
    return {
        allFilms: state.reducer.allFilms,
        currentFilms: state.reducer.currentFilms,
        selectedMovie: state.reducer.selectedMovie,
    };
};

const mapDispatch = {
    getFilms,
    sortByLike,
    sortByStars,
    searchByName,
    searchReset,
    selectMovie,
};

export {mapState, mapDispatch};