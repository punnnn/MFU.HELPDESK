<script setup>
    import { defineProps } from "vue"
    import { useRouter } from "vue-router";


    const router = useRouter()

    const {cate} = defineProps(['cate'])

    const navigateToCate = () => [
        router.push(`/cate/${cate.id}`)
    ]

</script>

<template>
    <RouterLink to="/cate">
        <div class="card" >
            <img :src="cate.img">
            <h4>{{ cate.name }}</h4>
            <p>{{cate.subtitle}}</p>
        </div>
    </RouterLink>
  
   
</template>

<style scoped>

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
    
}
.card p {
    font-size: 11px;
}





</style>