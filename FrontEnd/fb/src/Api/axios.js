import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000',
});

instance.defaults.withCredentials = true

export default instance