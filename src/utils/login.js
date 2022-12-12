import axios from 'axios';
import jwtDecode from 'jwt-decode';

export async function loginUser(username, password, rememberLogin) {
    return axios
        .post('http://localhost:3001/api/v1/user/login', { email: username, password: password })
        .then(response => {
            if (rememberLogin) {
                window.localStorage.setItem('authToken', response.data.body.token);
                axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.body.token;

            } else {
                axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.body.token;
            }



            return { "status": response.data.status, "token": response.data.body.token };
        })
        .catch(error => {
            return { "status": error.request.status, "token": undefined };
        })
}

export function isToken() {

    let token = axios.defaults.headers['Authorization'];

    if (token === undefined) {
        if (window.localStorage.getItem('authToken') !== null) {
            token = window.localStorage.getItem('authToken');
            axios.defaults.headers['Authorization'] = 'Bearer ' + token;
        } else {
            token = undefined;
        }
    }

    if (token !== undefined) {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 > Date.now()) {
            return true
        }
        else {
            window.slocalStorage.removeItem('authToken');
            return false;
        }

    } else {
        return false;
    }
}

export function logout() {
    window.localStorage.removeItem('authToken');
    delete axios.defaults.headers['Authorization'];
}