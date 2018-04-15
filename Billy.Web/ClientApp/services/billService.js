import axios from 'axios';
import {repository} from 'Services'

const url = '/bills'

getAll = () => {
    return repository.getAll(url).then(handleResponse)
}

getById = (id) => {
    return repository.getById(url, id).then(handleResponse)
}

add = (bill) => {
    return repository.add(url, bill).then(handleResponse)
}

update = (id) => {
    return repository.getAll(url, bill).then(handleResponse)
}

remove = (id) => {
    return repository.getAll(url, id).then(handleResponse)
}


handleResponse = (response) => {
    if(response.status !== 200){
        return Promise.reject(response.statusText)
    }
    return response.data.json();
}