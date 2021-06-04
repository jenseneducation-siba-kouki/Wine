<template>
  <div class="cart">
    <h1>Shopping Cart</h1>
    <div class="item" v-for="item in cart" :key="item.id">
      <ProductsItem :item="item" />
    </div>
    <hr>
    <div class="price">
      <h2>Total</h2>
      <h2>{{totalamount}} kr</h2>
    </div>
    <button @click="sendOrder">CHECK OUT</button>
  </div>
</template>

<script>
import ProductsItem from "./../components/ProductsItem";
export default {
  name: "Cart",
  components: {
    ProductsItem
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
    sendOrder() {
      this.$store.dispatch("sendOrder");
      this.$router.push("/Order");
    }
  }
};
</script>

<style scoped>
.cart {
  background-color: white;
  width:25rem;
  border-radius: 3px;
  position: fixed;
  top:65px;
  left: 50rem;
  }
.item{
  margin-top:25px;
  }
hr{
  margin-top:3rem;
  }
h1 {
text-align: center;
margin-top:10px;
font-weight: 500;
font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif;
   }
.price {
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  }
button {
  width: 90%;
  height: 40px;
  text-align: center;
  background-color: black;
  color: white;
  margin: 2rem 1rem;
  font-size: 20px;
  border-radius: 50px;
  letter-spacing: 3px; 
  justify-content: center;
  align-items: center;          
   }
p {
  text-align: left;
  margin: 5px;
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