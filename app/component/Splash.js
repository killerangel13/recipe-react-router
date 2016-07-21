import React from 'react';
import Component from './Component';
import store from '../store/store';
import Grid from './Grid';
import Cell from './Cell';
import Search from './Search';
import Recipe from './Recipe';
import øO from './../utils/øO';

export default class Splash extends Component {
    render = _=> (
        <div className='container'>
            <Search />
            <Grid>
                {this.state.cells.map(cell =>

                    <Cell {...øO(cell, {
                        
                        key: cell.id

                    })} />
                )}
            </Grid>
            {this.props.children && React.cloneElement(
                this.props.children, this.state.recipe
            )}
        </div>
    )
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        
        this.state = store.json;
    }
    change() {
        this.setState(store.json);
    }
    listen() {
        store.on('change', this.change);
    }
    componentDidMount () {
        this.listen();
    }
    componentWillUnmount () {
        store.removeListener('change', this.change);
    }
}