import Flux from 'flux';

var dispatcher = (new Flux.Dispatcher()),

    dispatch = dispatcher.dispatch.bind(dispatcher),

    actions = {
        search: text => dispatch({
            type: 'search',
            text: text
        }),
        choose: id => dispatch({
            type: 'choose',
            id: id
        })
    };

export {actions, dispatcher};