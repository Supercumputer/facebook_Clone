import instance from './axios';

export const apiLogin = (data) => {
    return instance.post('/login', data);
};

export const apiRegister = (data) => {
    return instance.post('/register', data);
};

export const apiGetAcount = () => {
    return instance.get('/user/getacount');
};

export const apiLogout = () => {
    return instance.get('/logout');
};

export const getUser = (id) => {
    return instance.get(`/user/${id}`);
};

export const getfriend = (id) => {
    return instance.get(`/user/friend/${id}`);
};

export const getSpays = () => {
    return instance.get('/spay');
};

export const getAllPost = () => {
    return instance.get('/post');
};

export const postApi = (id, data) => {
    return instance.post(`/post/${id}`, data);
};

export const getVideos = () => {
    return instance.get('/video');
};


