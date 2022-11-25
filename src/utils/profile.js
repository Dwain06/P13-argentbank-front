import axios from 'axios';

export async function getProfile() {
    let token = getToken();
    axios.defaults.headers['Authorization'] = 'Bearer ' + token;
    
    return axios
    .post('http://localhost:3001/api/v1/user/profile')
    .then(response => console.log(response.data.body))
    .catch(function (error) {
        console.log(error);})
}

function getToken(){
    if (localStorage.getItem('authToken')) {
        return localStorage.getItem('authToken');
    } else if (sessionStorage.getItem('authToken')) {
        return sessionStorage.getItem('authToken');
    } else {
        return undefined;
    }
}