import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import is_image_light from './../utils/is-image-light';

class Cell extends Component {
    render = _=> (
        <Link to = {`/recipe/${this.props.id}`}>
            <div className='cell'>
                <img
                    src={this.props.img}
                    
                    // Image host Allow Origin* to uncomment
                    // -------------------------------------
                    // ref={img => is_image_light({
                    //  img: img,
                    //  next: yes => img.classList.add(yes ?

                    //      'light':'dark'
                    //  ),
                    //  top: '61.8%'
                    // })}
                />
                <div className='tint' />
                <h3>{this.props.name}</h3>
            </div>
        </Link>
    )
}

Cell.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Cell;