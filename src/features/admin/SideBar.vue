<template>
    <div class="side-bar">
        <div class="logo">

        </div>
        <div class="sidebar-wrapper">
            <div class="user">
                
            </div>
            <div class="sidebar-content">
                <div class="div">
                    <h3>Dashboard</h3>
                </div>
                <div>
                    <h3>Component</h3>
                </div>
                <div>
                    <h3>Forms</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style scoped>
.side-bar{
    height: 100%;
    max-height: 100%;
    background-color: #212120;
    width: 260px;
    position: fixed;
    color: white
}
.logo{
    padding: 18px 0;
    box-shadow: inset -1px 0 0 0 #cfcfca;
    height: 75px;
}
.user{
    margin-top: 20px;
    color: #66615b;
    font-size: 14px;
    padding-bottom: 20px;
    position: relative;
    height: 60px;
}

.user::before{
    content: "";
    position: absolute;
    top: -20px;
    right: 15px;
    width: calc(100% - 30px);
    height: 1px;
    background-color: hsla(0,0%,100%,.3)   
}

.user::after{
    content: "";
    position: absolute;
    bottom: 0;
    right: 15px;
    width: calc(100% - 30px);
    height: 1px;
    background-color: hsla(0,0%,100%,.3)
}
</style>