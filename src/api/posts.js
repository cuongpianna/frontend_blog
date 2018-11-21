import axios from 'axios';


const ROOT_URL = 'http://127.0.0.1:5000/api'


export function deleteCategory(id){
    return axios.delete(`${API_URL}/category/${id}`)
}

export function createPost(post){
    return axios.post(`${ROOT_URL}/posts`, post)
    // return axios({
    //     url: API_URL+ '/upload',
    //     method: 'post',
    //     data: post,
    //     headers: { 'Content-Type': 'multipart/form-data' }
    // })
}

export async function uploadImage(image){
    var formData = new FormData();
    formData.append('file', image);
    return await axios.post(`${ROOT_URL}/upload`, formData);
}

export function getPosts(){
    return axios.get(`${API_URL}/posts`)
}