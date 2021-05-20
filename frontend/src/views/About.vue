<template>
  <div class="About">
    <section class="nav">
   <ShoppingCart />
   <NavAll />
    </section>
    <section class="head">
    <h1>DISCOVER <br> Our Story</h1>
    </section>
    <section class="info">
      <p>Since 1993, Sibella has helped define the modern era of <br>
       Stockholm Valley winemaking and has played a key role in <br>
        introducing luxury Stockholm Valley Chardonnay and Pinot Noir <br>
         to the world. An early pioneer of the Stockholm region, <br>
         Sibella has championed vibrant and vineyard-driven <br>
          expressions of exceptional cool-climate wines.</p>
    </section>
    <section class="history">
      <img src="../assets/land.jpg" class="land" alt="land">
      <h2>Our History</h2>
      <h5>Sibella has been profoundly influenced by our owners, the <br>
       kourye family of Switzerland—fifth-generation vintners who <br>
        purchased our winery in 1989. After acquiring Sibella, the <br>
        kourye family immediately cemented our focus on Chardonnay <br>
        and Pinot Noir by acquiring 400 acres of highly prized land in the <br>
        Stockholm region of Stockholm Valley. In 1995, they began an ambitious <br>
        program of replanting, while adopting an intimate block-by-block <br>
        approach to farming to achieve the highest expression of our <br>
        vineyard and the grape varieties we work with. <br> <br>

      Since 2005, gifted winemaker Paul johnsson has overseen the <br>
      winemaking at Sibella. In addition to being recognized for <br>
      making many of the finest wines in our storied history, <br>
      Paul oversaw the construction of our modern smart-shed winery, <br>
      designed to facilitate the small-lot approach that defines <br>
      our acclaimed estate-grown wines. <br> <br>


      In 2013, Sibella was honored by Wine & Spirits as one <br>
       of the “Top 100 Wineries on the World.”</h5>

    </section>
    <section class="final">
      <img src="../assets/drinks.jpg" class="drink" alt="drink">

    </section>
  
  </div>
</template>

<script>
import NavAll from "@/components/NavAll.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
name:'About',
components:{
    NavAll,
    ShoppingCart,

}
}
</script>

<style scoped>
.About{
  height: 167.1rem;
  background-color: rgb(243, 239, 234);

}
.head{
  background-image: url(../assets/about.jpg);
  background-repeat: no-repeat ;
  background-position: center;
  background-size:cover;
  height: 36.4rem;
  width:65rem ;
  margin-top:-28rem;
  margin-left:13.9rem;
}
h1{
 margin-left:10rem;
 padding-top:27rem;
 font-size: 3rem;
 text-shadow: 3px 2px black;
 color: rgb(240, 225, 207);
}
p{
  color: #4c3a27;
  float: right;
  margin-top:3rem;
  margin-right:24rem;
  font-size: 23px;
  line-height: 1.7;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
}
.land{
  margin-top:3rem;
  margin-left:15rem;
}
h2{
  color: #4c3a27;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
  font-size: 40px;
  line-height: 1.166;
  margin-left:18rem;
  padding:2rem;
  padding-top:3rem;
  font-weight: 500;
}
h5{
  font-weight: 500;
  color: #4c3a27;
  margin-top:-3rem;
  font-size: 20px;
  line-height: 1.7;
  margin-left:36rem;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
}
.drink{
  margin-top:5rem;
  height: 25rem;
  width:78.9rem ;
}

</style>
