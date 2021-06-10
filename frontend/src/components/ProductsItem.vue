<template>
  <div class="ProductsItem">
    <div class="item">
      <h2>
        {{item.title}}
      </h2>
    </div>
    <img src="./../assets/graphics/arrow-up.svg" alt="arrowup" @click="increase" />
    <h5>{{item.quantity}}</h5>
    <img src="./../assets/graphics/arrow-down.svg" alt="arrowdown" @click="decrease" />
    <h4 class="total">{{totalamount}}</h4>
  </div>
</template>

<script>
export default {
  name: "ProductsItem",
  props: {
    item: Object
  },
  computed: {
    totalamount() {
      return this.item.price * this.item.quantity;
    }
  },
  methods: {
    increase() {
      this.item.quantity++;
    },
    decrease() {
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
  justify-content: space-around;
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
  margin:14px;
  padding:1px;
}
h4{
  font-size: 1.2rem;
  font-weight: 500;
  margin-top:0.2rem;
}
h5{
    font-size: 1.2rem;
    font-weight: 500;
    margin-top:0.2rem;
}
h2{
   padding-left:1rem;
   font-weight: 500;
   font-size: 1.6rem;
}
</style>