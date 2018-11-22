import {getPosts, createPost, uploadImage, getPost} from '../../api/posts';

const state = {
    posts: [],
    post: {}
};

const getters = {
    allPosts: state => state.posts.posts,
    currentPost: (state) => state.post
}

const actions = {
    async getPosts({commit}){
        const response = await getPosts();
        console.log(response.data.items);
        commit('setPosts', {posts: response.data.items})
    },
    async getPost({commit}, id){
        // console.log(id);
        const response = await getPost(id);
        // console.log(response.data.item);
        commit('setPost', response.data.item)
        return response;
    },
    async createPost({commit}, posts){
        console.log(posts);
        const response = await createPost(posts);
    },
    uploadImage({commit}, image){
        console.log(image);
        const response =  uploadImage(image);
        return response;
    }
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
    setPost: (state, post) => state.post = post
}


export default{
    state,
    getters,
    actions, 
    mutations
}