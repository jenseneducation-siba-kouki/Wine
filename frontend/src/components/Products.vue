<template>
  <div class="Products">
      <img class="wine" :src="require('@/assets/image-' + item.image + '.jpg')">

    
    <h3 class="itemtitle">
      {{ item.title }}
    </h3>
    <p class="itemdesc">{{ item.desc }}</p>
    <h3 class="itemprice">{{ item.price}} kr</h3>
    <div class="add">
      <button @click="add">
        <img src="../assets/graphics/add.svg" class="plus"  alt="add" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    item: Object
  },
  methods: {
    add() {
      this.$store.dispatch("addToCart", this.item);
    }
  }
};
</script>
//  this.$store.dispatch.additemTocart, { item: this.item, quantity: 1 };

<style scoped>
.wine{
  height: 25rem;
  margin-left:10rem;
  padding:10px;
}
.plus{
  width: 15px;
  float: right;

}
.Products {
display: flex;
justify-items: space-around;
}
 
button {
  background: black;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 1.5rem;
  width: 1.5rem;
  margin-top:10.5rem;
  }
 .itemtitle{
   margin-top:10rem;
   padding:10px;
 }
 .itemdesc{
   margin-top:10rem;
   padding:10px;
 }
 .itemprice{
   margin-top:10rem;
   padding:10px;
 }

</style>