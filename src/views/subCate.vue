<script setup>
    import data from "../data/data2.json"
    import subProbCate from '../componenets/subProbCate.vue';
    import {ref} from "vue"

    const cates = ref(data)
    

</script>

<template>
    <div class="cate-container">
        <subProbCate 
            v-for="(cate, index) in cates"
            :key="cate.id"
            :cate="cate"
            :data-index="index"
        />
    </div>
</template>

<style scoped>

.cate-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}

</style>