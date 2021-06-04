<template>
  <div class="Order">
     <section class="nav">
  <!-- <ShoppingCart /> -->
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
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="pk_test_51IxvB6CwtypfJVpd65kbKUEHsj00vwt0UYnYRtt0bcdFwlFABNMRyHD0LZnxPlM6SDh3UjUkhwRy3hff4dp6UN2f00ElrOtsIY"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Betala!</button>
  </div>
</template>

<script>
import ProductsItem from "./../components/ProductsItem";
import NavAll from "@/components/NavAll.vue";
import { StripeCheckout } from '@vue-stripe/vue-stripe';



export default {
name:'Order',
components: {
    ProductsItem,
    NavAll,
    StripeCheckout
  },
  data () {
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      loading: false,
      successURL: this.$router.push(''),
      cancelURL: this.$router.push(''),
    };
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
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
}
</script>

<style scoped>
.Order{
  height: 60rem;
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
  margin-left:15.5rem;
  margin-top:3rem;
  color: #4c3a27;
}
.price{
  margin-left:15.7rem;
  color: #4c3a27;
  display: flex;
  align-items: flex-end;
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

