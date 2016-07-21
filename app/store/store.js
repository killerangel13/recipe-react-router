import EventEmitter from 'events';

class Store extends EventEmitter {
    _ = {
        recipes: {matches:[]},
        recipe: {images:[]}
    }
    get json() {
        return {
            cells: this._.recipes.matches.map(match => ({
                id: String(match.id),
                img: String(match.smallImageUrls[0]),
                name: String(match.recipeName)
            })),
            recipe: {
                id: String(this._.recipe.id),
                img: String(this._.recipe.images[0] &&
                    this._.recipe.images[0].hostedLargeUrl||''),
                name: String(this._.recipe.name||''),
                list: Array.from(this._.recipe.ingredientLines||[])
            }
        }
    }
    set(k, value) {
        this._[k] = value;

        this.emit('change');
    }
    constructor() {
        super();

        this.set = this.set.bind(this);
    }
}

var store = new Store();

export default store;