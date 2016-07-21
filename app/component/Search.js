import Component from './Component';
import React, {PropTypes} from 'react';
import {withRouter} from 'react-router';
import {actions} from './../action/actions';

class Search extends Component {
    render = _ =>(
        <input type='text'

            onKeyPress={this.search}

            ref={input => this.el = input}
            
            placeholder='Type something...'
        />
    )
    search() {
        clearTimeout(this.timer);
        this.timer = setTimeout(_ => {

            actions.search(this.text);

            this.props.router.replace({
                query: {
                    text: this.text
                },
                pathname: '/'
            });
        }, 175);
    }
    change() {
        if(!this.rendered)
            this.el.focus();

        if (this.rendered ||
           !this.location)
            return;

        this.el.value = this.location;
        
        this.search();
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }
    get text() {
        return this.el.value;
    }
    get location() {
        return decodeURIComponent(
            location.search.split('=').pop()
        )
            .replace(/\//g,'')
            .replace(/\+/g,' ');
    }
};

export default withRouter(Search);