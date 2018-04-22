import {repository} from 'Services'

const url = '/api/bills'

const getAll = () => {
    return repository.getAll(url).then(handleResponse)
}

const getById = (id) => {
    return repository.getById(url, id).then(handleResponse)
}

const add = (bill) => {
    return repository.add(url, bill).then(handleResponse)
}

const update = (id) => {
    return repository.getAll(url, bill).then(handleResponse)
}

const remove = (id) => {
    return repository.getAll(url, id).then(handleResponse)
}


const handleResponse = (response) => {
    if(response.status !== 200){
        return Promise.reject(response.statusText)
    }
    return response.data.json();
}

export const billService = {
    getAll,
    getById,
    add,
    update,
    remove
}