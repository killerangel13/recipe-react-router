import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router} from 'react-router';
import api from './api/api';
import Splash from './component/Splash';
import Recipe from './component/Recipe';

render(<Router routes = {
    {
        path: '/',
        component: Splash,
        
        childRoutes: [{

            path: 'recipe/:id',
            component: Recipe
        }]
    }}
    
    history={browserHistory}

/>, document.getElementById("app"));