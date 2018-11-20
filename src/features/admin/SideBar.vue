<template>
    <div class="side-bar">
        <div class="logo">
            <img src="../../assets/zed-classic.png" width="40px">
            <h4>Cuong Nguyen</h4>
        </div>
        <div class="sidebar-wrapper">
            <div class="user">
                
            </div>
            <div class="sidebar-content">
                <div class="dashboard" v-on:click.prevent="dropDown=!dropDown">
                    <div class="dashboard-header">
                        <i class="fas fa-chart-line"></i>
                        <h3 class="dashboard-text">Dashboard</h3>
                        <i class="fas dropdown" style="order:2; margin-left: auto;" :class="{'fa-caret-down':!dropDown, 'fa-caret-up':dropDown}"></i>
                        <!-- <i class="fas" style="order:2; margin-left: auto;" :class="fa-caret-down"></i> -->

                    </div>
                    <transition name="slide-fade">
                        <ul v-if="dropDown" class="dropdown">
                            <li>Overview</li>
                            <li>Stats</li>
                        </ul>
                    </transition>
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
    name: 'SideBar',
    data(){
        return{
            dropDown: false
        }
    }
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
    display: flex;
    align-items: center
}
.logo img{
    border-radius: 100%;
}
.logo h4{
    margin: 0;
    padding-left: 10px;
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
.sidebar-content{
    padding: 30px 25px;
    color: grey;
}
.dashboard{
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
}
.dashboard-header{
    display: flex;
    width: 100%;
    align-items: center;
}
.dashboard-text{
    transition: all ease 0.2s;
}
.dashboard ul{
    padding-left: 40px;
    list-style-type: none;
}
.dashboard li{
    transition: all ease 0.2s;
    height: 30px;
}
.dashboard li:first-child{
    padding-top: 5px !important;
}
.dashboard li:hover{
    color: white;
}
h3{
    margin: 0;
    margin-left: 15px;
}
.dashboard-text:hover    {
    color: white;
}
.logo{
    padding-left: 20px;
}
.dropdown{
    transition: all ease 1s;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter { 
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
 transform: translateY(-50px);
  opacity: 0; 
}
</style>