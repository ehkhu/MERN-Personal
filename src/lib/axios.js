import Axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com';
const axios = Axios.create({
    baseURL: baseURL,
})

export default axios;