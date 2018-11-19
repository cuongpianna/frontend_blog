<template>
    <div class="wrapper">
        <side-bar></side-bar>
        <admin-pannel></admin-pannel>
    </div>
</template>

<script>
import SideBar from '../../features/admin/SideBar';
import AdminPannel from '../../features/admin/AdminPannel';

export default {
    name: 'Admin',
    components: {SideBar, AdminPannel}
}
</script>

<style scoped>

</style>