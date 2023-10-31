import instance from './axios';

const login = (email, passWord) => {
    return instance.post('/login', { email, passWord });
};

const register = (LastName, firstName, email, passWord, day, month, year, gioiTinh) => {
    return instance.post('/register', {LastName, firstName, email, passWord, day, month, year, gioiTinh})
}

// User Api -------------------------------------

const getUser = (id) => {
    return instance.get(`/user/${id}`)
}

const getfriend = (id) => {
    return instance.get(`/user/friend/${id}`)
}


const getSpays = () => {
    return instance.get('/spay')
}

// Post Api -------------------------------------

const getAllPost = () => {
    return instance.get('/post')
}

const postApi = (id, data) => {
    return instance.post(`/post/${id}`, data)
}

// Video Api -------------------------------------

const getVideos = () => {
    return instance.get('/video')
}


export { login, register, getUser, getfriend, getVideos, getSpays, getAllPost, postApi};
