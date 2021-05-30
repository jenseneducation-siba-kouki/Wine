<template>
  <div class="ProductsItem">
    <div class="item">
      <h2>
        {{item.title}}
        <span class="dots"></span>
      </h2>
      <!-- <h4>{{item.price}} </h4> -->
    </div>

    <h4 class="total">{{totalamount}}</h4>
    <img src="./../assets/graphics/arrow-up.svg" alt="arrowup" @click="increase" />
    <h5>{{item.quantity}}</h5>
    <img src="./../assets/graphics/arrow-down.svg" alt="arrowdown" @click="decrease" />
  </div>
</template>

<script>
export default {
  name: "ProductsItem",
  props: {
    item: Object
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    totalamount() {
      return this.item.price * this.item.quantity;
    }
  },
  methods: {
    increase() {
      // this.store.state.counter++;
      this.item.quantity++;
    },
    decrease() {
      // this.store.state.counter--;
      if(this.item.quantity>1){
      this.item.quantity--;
    }else{
      this.$store.commit('removeItem', this.item.id)
    }
    }
  }
};
</script>

<style lang="scss" scoped>
.ProductsItem{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 13px;
  font-weight: 500;
  font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif;

}
.cart-item {
  display: flex;
  align-items: center;
  text-align: left;

}
img{
  height: 9px;
  cursor: pointer;
  margin:4px;
  padding:1px;
}
h4{
  font-size: 1.2rem;
  font-weight: 500;

}
h5{
    font-size: 1.2rem;
    font-weight: 500;
}
h2{
   padding-left:1rem;
   font-weight: 500;
   font-size: 1.6rem;

}
</style>