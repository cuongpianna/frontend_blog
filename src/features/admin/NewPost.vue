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
                <div class="upload-btn-wrapper">
                    <button class="btn">Upload a file</button>
                    <input type="file" name="myfile"  @change="uploadImage($event.target.files[0])"/>
                </div>
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
        },
        async uploadImage(image){
            const response = await this.$store.dispatch('uploadImage', image);
            console.log(response);
            this.source = this.source + `![${response.data.file_name}](${response.data.file_url})`;
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
    display: flex
}
.submit button{
    height: 34px;
    width: 90px;
    border-radius: 10px;
    /* margin-left: 880px; */
    order: 2;
    margin-left: auto;
    margin-right: 20px;
    font-weight: bold;
    color: white;
    background-color: springgreen
}
form{
    position: relative;
}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  width: 200px  !important;
  border: 2px solid gray !important;
  color: gray !important;
  background-color: white !important;
  border-radius: 8px !important;
  font-size: 20px !important;
  font-weight: bold !important;
  width: 200px !important;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
