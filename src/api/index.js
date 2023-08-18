import axios from 'axios';

const axiosService = axios.create({
    baseURL: 'http://localhost:3000/',
   });

function registerUser(userData) {
    return axiosService.post('signup', userData, { withCredentials: true });
}

export { registerUser };