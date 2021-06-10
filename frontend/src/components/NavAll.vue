<template>
 <div class="NavAll">
        <div class="links">
      <router-link to="/" >HOME</router-link> <br> <br>
      <router-link to="/Wines" >WINES</router-link> <br> <br>
      <router-link to="/About" >ABOUT US</router-link> <br> <br>
      <router-link to="/Contact" >CONTACT</router-link>
      </div>
     </div> 
</template>

<script>
export default {
name:'NavAll'
}
</script>

<style scoped>
.NavAll{
    max-width: 14rem;
}
.links{
  padding:4rem;
  padding-top:14rem;
  width: 15rem;
}
a{
  color: rgb(48, 46, 46);
  font-weight: 550;
  text-decoration: none;
  line-height: 1.6;
}
</style>