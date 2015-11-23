export default () => {
    return next => action => {
        const {promise, type, ...rest} = action;

        if (!promise) {
            next(action);
        }

        next({...rest, type: type + '_REQUEST'});

        return promise
            .then(res => {
                next({...rest, res, type: type});
                return true;
            })
            .catch(res => {
                next({...rest, res, type: type + '_FAILURE'});
                return false;
            });
    }
}