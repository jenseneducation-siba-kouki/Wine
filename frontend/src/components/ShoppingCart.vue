<template>
  <div class="ShoppingCart">
          <div class="number">{{numberOfOrders}}</div>
   <!-- <button> -->
   <img src="../assets/shopping.cart.png" alt="">
   <!-- </button> -->
  <router-link to='/LogIn'>Log in</router-link>

  </div>
</template>

<script>
export default {
name:'ShoppingCart',
 components: {
 },
 computed:{
     cart(){
         return this.$store.state.cart
     },
     numberOfOrders(){
         let total = 0;
         this.$store.state.cart.forEach(item => {
             total +=item.quantity;
         });
         return total;
     }
 },

 }
</script>

<style scoped>
.ShoppingCart{
    background-color: rgb(243, 239, 234);
    font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif;
}
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
/* button {
  height: 40px;
  width: 40px;
  background-color: black;
  border-radius: 40px;
  border: none;
  margin-top:-35px;
  margin-right:30px;
  float:right;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.number{
    width: 23px;
    height: 23px;
    color: white;
     margin-top:2rem;
    border-radius:50px;
    margin-left:75rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>