import {fromJS} from 'immutable';

export default (obj) => {
    let newObj = {};

    Object.keys(obj)
        .forEach(key => {
            newObj[key] = fromJS(obj[key]);
        });

    return newObj;
}