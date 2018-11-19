import Vue from 'vue';
import App from './App';
import router from './router/index';
import store from './store/index';


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");