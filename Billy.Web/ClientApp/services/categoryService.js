import {repository} from 'Services'

const url = '/api/categories'

const getAll = () => {
    return repository.getAll(url).then(handleResponse)
}

const add = (category) => {
    return repository.add(url, category).then(handleResponse)
}

const handleResponse = (response) => {
    if(response.status !== 200){
        return Promise.reject(response.statusText)
    }
    return response.data.json();
}

export const categoryService = {
    getAll,
    add
}