import {getPosts, createPost} from '../../api/posts';

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