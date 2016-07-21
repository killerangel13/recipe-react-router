import Component from './Component';
import React, {PropTypes} from 'react';
import {withRouter} from 'react-router';
import {actions} from './../action/actions';

class Recipe extends Component {
    
    render = _=>(
        <div className={'recipe'+ (this.loading?' loading':'')}>

            <button onClick={_=>history.back()}>
                Back
            </button>

            <img src={this.props.img} key={(new Date()).getTime()+"_"+this.props.id} />
            
            <h3>{this.props.name}</h3>
            
            <ul>{this.props.list.map(li => (

                <li key={li}>{li}</li>)
            )}</ul>
        </div>
    )
    get loading() {
        return this.props.id !== this.props.params.id;
    }
    change(props) {
        if(!this.rendered ||
            props.params.id !==
            this.props.params.id)
            actions.choose(
                props.params.id
            );
    }
}

Recipe.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
};

export default withRouter(Recipe);