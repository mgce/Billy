import axios from 'axios';

const authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

const getAll = (url) => {
    return axios({
        method: 'GET',
        headers: authHeader(),
        url: url
    });
};

const getById = (url, id) => {
    return axios({
        method: 'GET',
        headers: authHeader(),
        url: url + "/" + id
    });
};

const add = (url, object) => {
    return axios({
        method: 'POST',
        headers: authHeader(),
        url: url,
        data: object
    });
};

const update = (url, object) => {
    return axios({
        method: 'PUT',
        headers: authHeader(),
        url: url,
        data: object
    });
};

const remove = (url, id) => {
    return axios({
        method: 'DELETE',
        headers: authHeader(),
        url: url + "/" + id
    });
};

export const repository = {
    getAll,
    getById,
    add,
    update,
    remove
}