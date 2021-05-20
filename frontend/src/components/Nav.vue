<template>
  <div class="Nav">
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

}
</script>

<style scoped>
.links{
  padding:4rem;
  padding-top:18rem;
}
a{
  color: white;
  font-weight: 550;
  text-decoration: none;
  line-height: 1.6;

  /* font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif; */
}

</style>