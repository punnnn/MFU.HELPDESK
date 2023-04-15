<script setup>
    import data from "../data/data.json"
    import ProblemCate from '../componenets/ProblemCate.vue';
    import {ref} from "vue"

    const cates = ref(data)
    

</script>

<template>
    <div class="cate-container">
        <ProblemCate style="text-decoration: none; color: inherit;"
            v-for="(cate, index) in cates"
            :key="cate.id"
            :cate="cate"
            :data-index="index"
        />
        <router-link to="/history" style="text-decoration: none; color: inherit;">
            <div class="card" >
                <img src="https://cdn-icons-png.flaticon.com/512/2550/2550251.png">
                <h4>History</h4>
                <p>All Report History</p>
            </div>
        </router-link>  
        <router-link to="/history" style="text-decoration: none; color: inherit;">
            <div class="card" >
                <img src="https://cdn-icons-png.flaticon.com/512/4012/4012375.png">
                <h4>Status Tracking</h4>
                <p>All Report Statue Tracking</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped>

.cate-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}

.card {
    height: 180px;
    width: 180px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 10px;
   
}
.card img{
    height: 80px;
    width: 80px;
    margin-top: 20px;
}

.card h4{
    font-weight: bold;
    text-decoration: none;
}
.card p {
    font-size: 11px;
}

</style>