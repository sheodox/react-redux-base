import axios from 'axios';

//fully qualify the url if we're in node
axios.interceptors.request.use(config => {
    if (typeof process !== 'undefined') {
        config.url = `http://localhost:${process.env.PORT}${config.url}`;
    }

    return config;
});

export default axios;