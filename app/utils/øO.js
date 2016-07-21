// Deep extend that preserves Arrays/Objects

export default function(...objects) { // øO(a, b, c) | a < b < c

    var length = objects.length;
    if (length === 1)
        // shallow clone
        length = objects.unshift({});

    function every(ø, O, _) {
        if (_) for(var k=0,len=O.length;k<len;k++) {

            var el = O[k],
            
            type = type_of(el);

            switch (type) {

                case "object":

                    var sub = type_of (ø[k]) === type ? ø[k] : {};

                    ø[k] = every(sub, el);

                    break;

                case "array":

                    var sub = type_of (ø[k]) === type ? ø[k] : [];

                    ø[k] = every(sub, el, true);

                    break;

                default:
                    if (el !== undefined)
                        ø[k] = el;
            }
        } else for(var k in O) {
            var el = O[k],
            
            type = type_of(el);

            switch (type) {

                case "object":

                    var sub = type_of (ø[k]) === type ? ø[k] : {};

                    ø[k] = every(sub, el);

                    break;

                case "array":

                    var sub = type_of (ø[k]) === type ? ø[k] : [];

                    ø[k] = every(sub, el, true);

                    break;

                default:
                    if (el !== undefined)
                        ø[k] = el;
            }
        }
        return ø;
    }
    function type_of(el) {
        if (el === null || typeof el !== "object")
            return;
        if (Array.isArray(el))
            return "array";
        else if (Object.prototype.toString.call(el) === "[object Object]")
            return "object";
    }
    var ret;
    for(var i=0;i<length-1;i++) {
        ret = objects[i];
        objects[i+1] = every(ret, objects[i+1], false);
    }
    return ret;
}