import axios from 'axios';

authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

getAll = ({url}) => {
    return axios({
        method: 'GET',
        header: authHeader(),
        url: url
    });
};

getById = ({url, id}) => {
    return axios({
        method: 'GET',
        header: authHeader(),
        url: url + "/" + id
    });
};

add = ({url, object}) => {
    return axios({
        method: 'POST',
        header: authHeader(),
        url: url,
        data: object
    });
};

update = ({url, object}) => {
    return axios({
        method: 'PUT',
        header: authHeader(),
        url: url,
        data: object
    });
};

remove = ({url, id}) => {
    return axios({
        method: 'DELETE',
        header: authHeader(),
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