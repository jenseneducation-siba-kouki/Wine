<template>
  <div class="Order">
     <section class="nav">
   <NavAll />
    </section>
      <h1>Check Out</h1>
      <div class="item" v-for="item in cart" :key="item.id">
      <ProductsItem :item="item" />
    </div>
    <div class="price">
      <h2>Total :</h2>
      <h2>{{totalamount}} kr</h2>
    </div>
  <div>
  <StripeElementCard />
        </div>

    </div>

</template>

<script>
import ProductsItem from "./../components/ProductsItem";
import NavAll from "@/components/NavAll.vue";
import StripeElementCard from '@/components/StripeElementCard.vue'
export default {
name:'Order',
components: {
    ProductsItem,
    NavAll,
    StripeElementCard
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalamount() {
      let totalamount = 0;
      this.$store.state.cart.forEach(item => {
        totalamount += item.quantity * item.price;
      });
      return totalamount;
    }
  },
}
</script>

<style scoped>
.Order{
  height: 90rem;
  background-color: rgb(243, 239, 234);
}
h1{
  margin-left:17rem;
  margin-top:-14rem;
  font-size: 3rem;
  color: #4c3a27;
  font-weight: 500;
}
.item{
  /* float: right; */
  width: 25rem;
  margin-left:15.5rem;
  margin-top:3rem;
  color: #4c3a27;
}
.price{
  /* margin-left:30rem; */
  margin-left:28rem;
  color: #4c3a27;
  display: flex;
  align-items: flex-end;
  /* float:right; */
  margin-top:4rem;
}
h2 {
  display:flex;
  justify-content:center;
  align-items:center;
  margin:5px;
  padding-left:1rem;
  font-weight: 500;
  font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif;
  }
</style>

