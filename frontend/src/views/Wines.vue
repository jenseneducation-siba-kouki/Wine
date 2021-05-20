<template>
  <div class="Wines">
        <section class="nav">
   <ShoppingCart />
   <NavAll />
    </section>
  <section class="head">
    <h1>Our Wines</h1>
    </section>
  </div>
</template>

<script>
import NavAll from "@/components/NavAll.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
name:'Wines',
components:{
    NavAll,
    ShoppingCart,

}
}
</script>

<style scoped>
.Wines{
  height: 100%;
  background-color: rgb(243, 239, 234);

}
.head{
  background-image: url(../assets/wine9.jpg);
  background-repeat: no-repeat ;
  background-position: center;
  background-size:cover;
  height: 36.4rem;
  width:65rem ;
  margin-top:-28rem;
  margin-left:13.9rem;
}
h1{
 margin-left:5rem;
 padding-top:30rem;
 font-size: 3rem;
 text-shadow: 3px 2px rgb(155, 135, 104);
 color: rgb(240, 225, 207);
}
</style>