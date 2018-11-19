import {getCategories, createCategory, deleteCategory} from '../../api/categories';

const state = {
    categories: []
};

const getters = {
    allCategories: state => state.categories.categories
}

const actions = {
    async getCategories({commit}){
        const response = await getCategories();
        commit('setCategories', {categories: response.data.items});
    },
    async createCategory({commit} ,category){
        console.log(category);
        await createCategory(category);
    },
    async deleteCategory(context, category_id){
        await deleteCategory(category_id);
    }
}

const mutations = {
    setCategories: (state, categories) =>{
        state.categories = categories;
    }
}


export default{
    state,
    getters,
    actions, 
    mutations
}