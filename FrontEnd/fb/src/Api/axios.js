import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001',
});

instance.defaults.withCredentials = true
instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`

export default instance