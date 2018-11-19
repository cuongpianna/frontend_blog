import axios from 'axios';


const ROOT_URL = 'http://127.0.0.1:5000/api'

export function createCategory(category){
    return axios.post(`${ROOT_URL}/category`, category)
}

export function getCategories(){
    return axios.get(`${ROOT_URL}/categories`)
}

export function deleteCategory(id){
    return axios.delete(`${ROOT_URL}/category/${id}`)
}