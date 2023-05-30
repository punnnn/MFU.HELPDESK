<script setup>
import data from "../data/data.json"
import ProblemCate from '../componenets/ProblemCate.vue';
import { ref } from "vue"

</script>

<template>
    <div class="cate-container">
        <ProblemCate style="text-decoration: none; color: inherit;" v-for="(cate, index) in cates" :key="cate.id"
            :cate="cate" :data-index="index" />

        <div class="card1">
            <div class="left">
                <h4>Overall Tasks</h4>
                <h1>74</h1>
                <h4>100%</h4>
            </div>
            <div class="right">
                <img src="../images/dashboard.png">
            </div>
        </div>
        <div class="card">
            <div class="top">
                <h4>Waiting To Accept </h4>
                <img src="../images/orangedot.png">
            </div>
            <div class="down">
                <h1>33</h1>
                <h4>44%</h4>
            </div>
        </div>
        <div class="card">
            <div class="top">
                <h4>On Process        </h4>
                <img src="../images/yellowdot.png">
            </div>
            <div class="down">
                <h1>25</h1>
                <h4>33.3%</h4>
            </div>
        </div>
        <div class="card">
            <div class="top">
                <h4>Completed </h4>
                <img src="../images/greendot.png">
            </div>
            <div class="down">
                <h1>15</h1>
                <h4>20%</h4>
            </div>
        </div>
        <div class="card">
            <div class="top">
                <h4>Not Relevant </h4>
                <img src="../images/reddot.png">
            </div>
            <div class="down">
                <h1>2</h1>
                <h4>2.7%</h4>
            </div>
        </div>
        
       
        

        
    </div>
</template>

<style scoped>
.cate-container {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

}

.card1 {
    height: 180px;
    width: 370px;
    background-color: white;
    border-radius: 10px;

    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.card1 img {
    height: 150px;
    width: 160px;
    margin-top: 15px;
}

.left {
    height: 180px;
    width: 180px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    padding-top: 10px;
    text-align: start;
    padding-left: 10px;
}

.left h1 {
    text-align: center;
    font-size: 70px;
}

.right {
    
    text-align: center;

}

.card {
    height: 180px;
    width: 180px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    padding-top: 10px;
    text-align: start;
    
}
.top{
    border-radius: 10px;
    display:flex;
    justify-content: space-between;
    padding-left:10px;
    padding-right:10px;
}
.down{
    padding-left:10px;
}
.card img{
    height: 20px;
    width: 20px;
    
}


.card h1 {
    text-align: center;
    font-size: 70px;
}
</style>