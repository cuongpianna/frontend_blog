<template>
    <div class="content">
        <table class="ui single line table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tiêu đề</th>
                    <th>Ngày đăng</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(p, index) in allPosts" :key="p.id">
                    <td>{{index + 1}}</td>
                    <td><router-link :to="`${p.id}`">{{p.title}}</router-link></td>
                    <td>{{p.time_stamp}}</td>
                    <td>
                            <a href="#" style="margin-right:15px">
                                <i class="fas fa-edit" style="color:#f3bb45"></i>
                            </a>
                            <i class="fas fa-trash" style="color:red" @click="deleteCategory(cate.id)"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'AdminListPosts',
    computed: {
        ...mapGetters(['allPosts'])
    },
    methods:{
        ...mapActions(['getPosts'])
    },
    created(){
        this.getPosts();
    }
}
</script>   

<style scoped>
.content{
    padding: 20px;
}
</style>
