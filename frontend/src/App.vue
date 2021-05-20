<template>
<div class="app">
   <router-view/>
   <Footer />
</div>
</template>

<script>

import Footer from "@/components/Footer.vue";
 
export default {
   name: "app",
   components:{
     Footer

}
}
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 #app {
  width: 100%;
  height: 100vh;
//   display: flex;
//   flex-flow: column;
//   justify-content: space-between;
  background-color: rgb(243, 239, 234);
} 
</style>
