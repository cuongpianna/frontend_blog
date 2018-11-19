<template>
    <div class="header-pannel">
        <h3>Overview</h3>
        <div class="search-form">

            <input type="text" class="search-text" placeholder="Search...">
            <button>
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="right-header">
            afafgag
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderAdmin'
}
</script>

<style scoped>
.header-pannel{
    box-sizing: border-box;
    height: 75px;
    position: relative;
    padding: 0 15px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #777;
    overflow: hidden;
}
.header-pannel::after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0px;
    height: 1px;
    background-color: grey
}
h3{
    font-size: 22px;
    margin: 0;
    margin-right: 30px;
}

.search-form{
    box-sizing: border-box;
    display: block;
    width: 250px;
    height: 40px;
    border: 1px solid #c6c6c6;
    border-radius: 3px;
    overflow: hidden;
    display: flex;

}


.search-text{
    border: none;
    padding: 0 10px;
    height: 38px;
    width: 200px;
    background-color: #f4f3ef;
    transition: all ease 1s;
    box-shadow: none;
    
}

.search-text:focus{
    outline: none !important;
    background-color: white;
}

.search-text:focus ~ button{
    background-color: white;
}

button{
    height: 38px;
    border: none;
    background-color: #f4f3ef;
    width: 50px;
    transition: all ease 1s;
}

.right-header{
    margin-left: auto;
    order: 2;
}
</style>
