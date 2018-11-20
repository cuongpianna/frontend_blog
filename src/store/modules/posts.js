import {getPosts} from '../../api/posts';

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