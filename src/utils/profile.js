import axios from 'axios';

export async function getProfile() {
    axios.defaults.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('authToken');
    
    return axios
    .post('http://localhost:3001/api/v1/user/profile')
    .then(response => console.log(response.data.body))
    .catch(function (error) {
        alert(error);})
}