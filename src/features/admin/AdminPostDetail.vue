<template>
    <div class="content">
        <vue-markdown :source='source'>
            {{source}}
        </vue-markdown>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'AdminPostDetail',
    components: {VueMarkdown},
    data(){
        return{
            source: "",
            test: 'dafasfa'
        }
    },
    computed: {
        ...mapGetters(['currentPost'])
    }
    ,
    methods:{
        ...mapActions(['getPost']),
    },
    created(){
        this.getPost(parseInt(this.$route.params.id)).then((result) => {
            this.source = result.data.item.body;
            console.log(result.data.item.body);
        }).catch((err) => {
            
        });;
        // this.source='dada'
    },
}
</script>

<style>
.content{
    padding: 20px 15px;
}
</style>
