import axios from 'axios';

export async function getProfile() {

    return axios
    .post('http://localhost:3001/api/v1/user/profile')
    .then(response => {
        return { "status": response.data.status, "userData": response.data.body };
    })
    .catch(error => {
        return { "status": error.request.status, "userData": undefined };    
    })
}