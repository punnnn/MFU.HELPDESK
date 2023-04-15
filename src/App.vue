<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from "./componenets/NavigationBar.vue"
</script>

<template>
  
  <body>
    
  <navBar />
  <RouterView />
</body>
</template>

<style scoped>
body {
  background-color: rgb(238, 238, 238);
  
}
</style>
