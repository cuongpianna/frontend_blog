import {getPosts, createPost, uploadImage} from '../../api/posts';

const state = {
    posts: []
};

const getters = {

}

const actions = {
    async getPosts({commit}){
        const response = await getPosts();
        commit('setPosts', {posts: response.data.items})
    },
    async createPost({commit}, posts){
        console.log(posts);
        const response = await createPost(posts);
    },
    async uploadImage({commit}, image){
        console.log(image);
        const response = await uploadImage(image);
        return response;
    }
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
}


export default{
    state,
    getters,
    actions, 
    mutations
}