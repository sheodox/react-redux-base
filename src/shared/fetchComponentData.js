export default (dispatch, components, params) => {
    const needs = components.reduce((done, current) => {
        let wrapped = current.WrappedComponent;

        return (current.needs || [])
            .concat((wrapped ? wrapped.needs : []) || [])
            .concat(done);
    }, []);

    const promises = needs.map(need => dispatch(need(params)));

    return Promise.all(promises);
}