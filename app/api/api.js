import {ajax} from 'jquery';
import auth from './../auth/auth';
import store from './../store/store';
import øO from './../utils/øO';
import {dispatcher} from './../action/actions';
var set = store.set,
    request;

dispatcher.register(action => {
    request && request.abort();
    request = {
        search:_=> ajax({
            type: 'get',
            url: 'http://api.yummly.com/v1/api/recipes',
            data: øO({
                q: action.text

            }, auth),
            success:_=>set('recipes',_)
        }),
        choose:_ => ajax({
            type: 'get',
            url: 'http://api.yummly.com/v1/api/recipe/'+action.id,
            data: auth,
            success:_=>set('recipe',_)
        })
    }[action.type]();

});