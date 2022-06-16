import axios from 'axios';

export const key = 'a36cacb8a89d8df08f2783565a2fddec'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;