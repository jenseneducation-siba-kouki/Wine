<template>
  <div class="ShoppingCart">
   <img src="../assets/shopping.cart.png" alt="">
  <router-link to='/LogIn'>Log in</router-link>

  </div>
</template>

<script>
export default {
name:'ShoppingCart',
}
</script>

<style scoped>
a{
  color: white;
  float: right;
  padding-top:2.3rem;
  margin-right:2rem;
  text-decoration: none;
  /* font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif; */

}
img{
float: right;
height: 2rem;
margin-top:1.6rem;
margin-right:4rem;
}

</style>