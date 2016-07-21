import React, {Component} from 'react';

export default class Grid extends Component {
    render = _=> (
        <div className='recipes'>
            {this.props.children}
        </div>
    )
}