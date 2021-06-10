<template>
  <div class="Status">
      <h1 v-if="loading">Your Order</h1>
    <div class="loading" v-if="loading">
    </div>

    <h1 class="orderNumber" v-if="order.orderNr">
      Ordernumber:
      <strong>#{{order.orderNr}}</strong>
    </h1>
    <div class="drone" v-if="order.orderNr">
      <h1>Your Order is on its way</h1>
    </div>

    <div class="eta" v-if="order.orderNr">
      <p>{{order.eta}} DAGAR</p>
    </div>

    <a href="#" class="button" @click="$router.push('/#')">Thank you for your shopping <br> Click here if you want to continue shopping </a>
  </div>
</template>

<script>
export default {
  name: "Status",
  computed: {
    order() {
      return this.$store.state.activeOrder;
    },
    loading() {
      return this.$store.state.load;
    }
  }

}
</script>

<style scoped>
.Status{
height: 30rem;
background-color: rgb(243, 239, 234);
text-align: center;
}
h1{
padding-top:5rem;
 text-shadow: 1px 1px black;
}
a{
text-decoration: none;
color: black;
 text-shadow: 0px 1px black;

}

</style>