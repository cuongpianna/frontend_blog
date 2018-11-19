<template>
    <div class="admin-pannel">
        <admin-header></admin-header>
        <router-view></router-view>
    </div>
</template>

<script>
import AdminHeader from './AdminHeader';

export default {
    name: 'AdminPannel',
    components: {AdminHeader}
}
</script>

<style scoped>
.admin-pannel{
    height: 100vh;
    max-height: 100%;
    float: right;
    width: calc(100% - 260px);
    background-color: #f4f3ef;
    overflow: auto;
}
</style>