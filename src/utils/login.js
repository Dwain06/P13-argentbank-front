import axios from 'axios';

export async function loginUser(username, password, rememberLogin) {
    return axios
        .post('http://localhost:3001/api/v1/user/login', { email: username, password: password })
        .then(response => {
            rememberLogin ?
            window.localStorage.setItem('authToken', response.data.body.token)
            :
            window.sessionStorage.setItem('authToken', response.data.body.token);
            return { "status": response.data.status, "token": response.data.body.token }; 
        })
        .catch(error => {
            return { "status": error.request.status, "token": undefined };
        })
}

export function isToken(){
    if (localStorage.getItem('authToken') || sessionStorage.getItem('authToken') !== null) {
        return true;
    } else {
        return false;
    }
}

export function logout() {
    window.localStorage.removeItem('authToken');
    window.sessionStorage.removeItem('authToken');
    delete axios.defaults.headers['Authorization'];
}