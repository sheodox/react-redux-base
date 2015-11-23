export default (dispatch, components, params) => {
    const needs = components.reduce((done, current) => {
        return current ? (current.needs || []).concat(done) : done;
    }, []);

    const promises = needs.map(need => dispatch(need(params)));

    return Promise.all(promises);
}