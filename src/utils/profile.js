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


export function editProfile(data) {

    axios.put("http://localhost:3001/api/v1/user/profile", data)
}

export async function createProfile(data) {

    return axios
    .post('http://localhost:3001/api/v1/user/signup', data)
    .then(response => {
        return { "status": response.data.status, "message": response.data.message };
    })
    .catch(error => {
        return { "status": error.response.data.status, "errorMessage": error.response.data.message };  
    })
}