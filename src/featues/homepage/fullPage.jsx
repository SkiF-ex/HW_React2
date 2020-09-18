import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomepageHeader from './Header/header.jsx';
import HomepageStripHorizontal from '../../utils/HomepageStripHorizontal/horizontal.jsx';
import { mapState, mapDispatch } from '../../core/maps'
import HomepageContainer from './Container/container'
import getAllMovies from '../../utils/getters/getAllMovie'

let moviesArray;

class FullPage extends Component {
    async componentDidMount() {
        this.props.getFilms(await getAllMovies());
    };

    render() {
        const movies = this.props.allFilms;
        if (movies.length !== 0){
            moviesArray = movies;
            return (
                <>
                    <HomepageHeader />
                    <HomepageStripHorizontal />
                    <HomepageContainer />  
                </>
            );
        };
        return <div></div> 
    };
};

export default connect(mapState, mapDispatch)(FullPage);

export { moviesArray };

