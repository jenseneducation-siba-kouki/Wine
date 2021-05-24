<template>
  <div class="Wines">
        <section class="nav">
   <ShoppingCart />
   <CartBag @click.native="show" />

   <NavAll />
    </section>
  <section class="head">
    <h1>Our Wines</h1>
    </section>

     <section class="product">
    <Products v-for="item in items" :key="item.id" :item="item" />
     <Cart v-if="cartStatus" />

    </section>
  </div>
</template>

<script>
import wines from "../data/wines.json";
import NavAll from "@/components/NavAll.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import Products from "../components/Products";
import CartBag from "../components/CartBag";
import Cart from "../components/Cart";

export default {
name:'Wines',
data(){
  return {
    items: wines,
    cartStatus: false,
  }
},
components:{
    NavAll,
    ShoppingCart,
    Products,
    Cart,
    CartBag,


},
computed:{
  wines(){
      return this.$store.state.wines;
  }
},
methods:{
   show() {
      this.cartStatus = !this.cartStatus;
    }
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