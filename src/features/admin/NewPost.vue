<template>
    <div class="content">
        <div class="title">
            <input type="text" placeholder="Tiêu đề">
        </div>
        <div class="body">
            <textarea v-model="source" placeholder="Nội dung bài viết"></textarea>
            <!-- <vue-markdown :source="source" class="md"></vue-markdown> -->
            <vue-markdown class="result-html full-height md" :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
          :source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
          :emoji="emoji" :typographer="typographer" :toc="toc" v-on:rendered="allRight"
          v-on:toc-rendered="tocAllRight" toc-id="toc"></vue-markdown>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
    name: 'NewPost',
    components: {
        VueMarkdown
    },
    data(){
        return{
            source: "",
            show: true,
            html: false,
            breaks: true,
            linkify: false,
            emoji: true,
            typographer: true,
            toc: false
        }
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
    margin-top: 50px;
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
</style>
