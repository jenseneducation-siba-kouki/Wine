<template>
  <div class="Home">
<section class="back">
<ShoppingCart />
<Nav />

</section>
<div class="main">
  <h1>True to our <br>
Sibella Valley Winery</h1>
<p>Founded in 1993, Sibella is one of the pioneering wineries that helped shape the <br>
 modern era of stockholm Valley winemaking. As an independent, family-owned winery for nearly <br>
  five decades, we are dedicated to crafting exceptional wines from our acclaimed estate in <br>
  the Los Carneros region of stockholm Valley. To this day, our mission remains true to our roots, <br>
  and so do our wines.</p>
</div>
<div class="testing">
  <img src="../assets/testing.jpg" class="test" alt="room.test">
  <h2>Tasting Room</h2>
  <h5>A typical tasting room is operated by a winery or brewery <br>
   located in a rural vineyard, where most of the production, <br>
    bottling, marketing, and distribution takes place</h5>
</div>
<div class="white">
<img src="../assets/image-wine2.jpg" class="whitee" alt="white.win">
<h3>OUR WINES</h3>
</div>
<div class="red">
<img src="../assets/image-wine10.jpg" class="redd" alt="red.win">
</div>

<div class="rose">
<img src="../assets/image-wine4.jpg" class="rosee" alt="rose.win">

</div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
name:"Home",
components:{
    Nav,
    ShoppingCart,

}
}
</script>

<style scoped>
.Home{
  background-color: rgb(243, 239, 234);
}
.back{
  background-image: url(../assets/home.jpg);
  background-repeat: no-repeat ;
  background-position: center;
  background-size:cover;
  height: 38rem;
}

.main{
  padding: 5rem;
  text-align: center;
  color: rgb(165, 137, 101);
}
h1{
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
  font-size: 36px;
  line-height: 1.166;
  margin-bottom: 20px;
  color: #4c3a27;

}
h2{
  color: #4c3a27;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
  font-size: 36px;
  line-height: 1.166;
  margin-left:20rem;
  padding:2rem;
}
h5{
  font-weight: 500;
  color: rgb(165, 137, 101);
  margin-top:-2rem;
  font-size: 20px;
  line-height: 1.7;
  margin-left:38rem;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
}
p{
  font-size: 18px;
  line-height: 1.5;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
}
.test{
  margin-left:17rem;
  height: 30rem;
}
h3{
  float: right;
  color: #4c3a27;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
  font-size: 30px;
  margin-right:15rem;
  padding:5rem;
}
.whitee{
 padding:2rem;
  height: 35rem;
  margin-left:12rem;

}
.redd{
 height: 35rem;
 float: right;
 margin-right:12rem;
 margin-top:-15rem;

}
.rosee{
  height: 35rem;
  padding:2rem;
  margin-left:12rem;
  margin-top:-15rem;


}


</style>
