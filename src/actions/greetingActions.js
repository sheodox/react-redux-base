import axios from 'axios';

export default () => {
    return {
        type: 'GET_GREETING',
        promise: axios.get('/api/hello')
    }
}