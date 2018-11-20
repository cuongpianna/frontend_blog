<template>
    <div class="content">
        <form action="">
            <div class="title">
                <input type="text" placeholder="Tiêu đề" v-model="title">
            </div>
            <div class="tag">
                <select v-model="selected">
                    <option v-for="cate in allCategories" :value="cate.id" :key="cate.id">{{cate.name}}</option>
                </select>
            </div>
            <div class="body">
                <textarea v-model="source" placeholder="Nội dung bài viết"></textarea>
                <!-- <vue-markdown :source="source" class="md"></vue-markdown> -->
                <vue-markdown class="result-html full-height md" :source="source"></vue-markdown>
            </div>
            <div class="submit">
                <button @click="createPost">Lưu bài</button>
            </div>
        </form>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'NewPost',
    components: {
        VueMarkdown
    },
    data(){
        return{
            title: '',
            selected: 3,
            source: "",
            show: true,
            html: false,
            breaks: true,
            linkify: false,
            emoji: true,
            typographer: true,
            toc: false
        }
    },
    computed: mapGetters(['allCategories']),
    methods: {
        ...mapActions(['getCategories']),
        createPost(){
            this.$store.dispatch('createPost', {
                title: this.title,
                category_id: parseInt(this.selected),
                body: this.source
            })
        }
    },
    created() {
        this.getCategories();
    }
}
</script>

<style scoped>
.content{
    padding: 20px 15px;
}
.title{
    width: 100%;
}
.title input{
    width: 100%;
    height: 36px;
    border-radius: 4px;
    padding: 0 15px;
}
.body{
    margin-top: 35px;
    display: flex;
}
.body textarea{
    width: 50%;
    height: 550px;
    padding: 15px;
}
.md{
    width: 50%;
    height: 550px;
    border: 1px solid grey;
    padding: 10px;
    overflow: scroll;
}
.tag{
    margin-top: 30px;
}
.tag select{
    height: 40px;
    width: 300px;
    border-radius: 4px;
    padding: 0 10px;
    transition: all ease .5s;
}
.submit{
    margin-top: 20px;
}
.submit button{
    height: 34px;
    width: 90px;
    border-radius: 10px;
    margin-left: 880px;
    font-weight: bold;
    color: white;
    background-color: springgreen
}
</style>
