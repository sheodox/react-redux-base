import axios from '../axios-intercepted';

export default () => {
    return {
        type: 'GET_GREETING',
        promise: axios.get('/api/hello')
    }
}