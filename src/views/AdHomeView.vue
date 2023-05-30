<script setup>
    import data from "../data/data.json"
    import ProblemCate from '../componenets/ProblemCate.vue';
    import {ref} from "vue"

</script>

<template>
    <div class="cate-container">
        <ProblemCate style="text-decoration: none; color: inherit;"
            v-for="(cate, index) in cates"
            :key="cate.id"
            :cate="cate"
            :data-index="index"
        />
        <router-link to="/historyadmin" style="text-decoration: none; color: inherit;">
            <div class="card" >
                <img src="../images/report.png" alt="very basic report.png">
                <h4>Report</h4>
            </div>
        </router-link>  
        <router-link to="/history" style="text-decoration: none; color: inherit;">
            <div class="card" >
                <img src="../images/history.png" alt="very basic history.png">
                <h4>History</h4>
            </div>
       
        </router-link>  
        
        <router-link to="/Dashboard" style="text-decoration: none; color: inherit;">
            <div class="card"  >
                <img src="https://cdn-icons-png.flaticon.com/128/7792/7792127.png" alt="very basic cancel.png">
                <h4>Dashboard</h4>
            </div>
            
        </router-link>
        <router-link to="/Overview" style="text-decoration: none; color: inherit;">
            <div class="card"  >
                <img src="https://cdn-icons-png.flaticon.com/128/1587/1587554.png" alt="very basic cancel.png">
                <h4>Overview</h4>
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
    margin-top: 35px;
}

.card h4{
    font-weight: bold;
    text-decoration: none;
}
.card p {
    font-size: 11px;
}

</style>