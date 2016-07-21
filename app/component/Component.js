import React from 'react';
export default class View extends React.Component {

    change() {}
    
    componentDidMount() {
        this.change(this.props);
        this.rendered = true;
    }
    componentWillReceiveProps(props) {
        this.change(props);
    }
}