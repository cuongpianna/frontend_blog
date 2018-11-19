<template>
    <div class="content-pannel">
        <div class="card">
            <form class="card-form" methods="post">
                <label>
                    Danh mục
                </label>
                <input type="text" class="text-form" v-model="name">
                <button @click="createCategory({'name':name})">Submit</button>
            </form>
        </div>
        <div class="card">
            <table class="table" width="100%">
                <thead class="thead-light">
                    <tr>
                        <th width="5%">#</th>
                        <th width="35%" align="left">Tên danh mục</th>
                        <th width="30%" align="left">Slug</th>
                        <th width="30%" align="left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cate, index) in allCategories" v-bind:key="cate.id">
                        <td width="10%" align="center">{{index+1}}</td>
                        <td width="30%"><a href="#">{{cate.name}}</a></td>
                        <td width="30%">{{cate.slug_name}}</td>
                        <td width="30%" class="">
                            <a href="#" style="margin-right:15px">
                                <i class="fas fa-edit" style="color:#f3bb45"></i>
                            </a>
                            <i class="fas fa-trash" style="color:red" @click="deleteCategory(cate.id)"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'AdminCategory',
    data(){
        return{
            name: '',
        }
    },
    computed: mapGetters(['allCategories']),
    methods: {
        ...mapActions(['getCategories']),
        async createCategory(category){
            await this.$store.dispatch('createCategory', category);
            this.getCategories();
        },
        async deleteCategory(category_id){
            await this.$store.dispatch('deleteCategory', category_id);
            this.getCategories();
        }
    },
    created() {
        this.getCategories();
    },

    
}
</script>

<style scoped>
.content-pannel{
    padding: 25px 25px;
    border-radius: 4px;
}
.card{
    padding: 10px;
    background-color: white;
    margin-bottom: 15px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}
.table{
    table-layout: fixed;
    font-size: 15px;
}
th, td{
    height: 40px;
    border-bottom: 1px solid #c6c6c6;
    color: #606266;
}
a{
    color: #606266;
}
tr{
    transition: all ease .5s;
}
tr:hover{
    background-color: beige;
}

.card-form{
    display: flex;
    align-items: center
}
label{
    font-size: 18px;
    margin-left: 25px;
}
.text-form{
    height: 34px;
    margin-left: 50px;
    width: 30%;
    padding: 0 15px;
    background-color: #f4f3ef;
    transition: all ease 0.5s;
}
.text-form:focus{
    background-color: white;
}
button{
    margin-left: 25px;
    height: 34px;
    width: 80px;
    border-radius: 10px;
    color: white;
    font-size:14px;
    font-weight: bold;
    transition: all ease 0.5s;
}
button:hover{
    background-color: #cccccc
}
.action{
    display: flex;
    align-items: center
}
</style>
