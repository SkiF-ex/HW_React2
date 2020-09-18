import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapState, mapDispatch } from '../../../core/maps';
import starCount from '../../../utils/starCount/stars';

class ClassComponent extends Component {
    render() {
        const block = this.props.selectedMovie;
        if (block.length !== 0) {
            return (
                <>
                    <div className="homepage_right-block-rating">
                        <h4 className="homepage_right-block-rating-title">{block.title}</h4>
                        <h4 className="homepage_right-block-rating-likes">Likes: {block.likes}</h4>
                        <div className={starCount(block.stars) + " homepage_right-block-rating-stars"}></div>
                    </div>
                    <div className="homepage_right-block-details">
                        <img alt="posterImg" className="homepage_right-block-details-image" src={block.posterUrl}/>
                        <h4 className="homepage_right-block-details-director"><b>Director:</b> {block.director}</h4>
                        <h4 className="homepage_right-block-details-actors"><b>Actors:</b> {block.actors[0]+"..."}</h4>
                        <h4 className="homepage_right-block-details-genres"><b>Genres:</b> {block.genres}</h4>
                        <h4 className="homepage_right-block-details-description"><b>Description:</b> {block.description}</h4>
                    </div>
                </>
            );
        };
        return (<div style={{color: 'white'}}>Please, choise movie</div>);
    };
};

export default connect(mapState, mapDispatch)(ClassComponent);