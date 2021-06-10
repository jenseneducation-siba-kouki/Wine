<template>
  <div class="Contact">
    <section class="nav">
   <ShoppingCart />
   <NavAll />
    </section>
     <h1>Contact Us</h1> 
    <section class="question">
   <p>Do you have a question for us? You are warmly welcome <br>
    to get in touch via email, phone and other channels.</p>

    <h2>Email</h2>
   <p>kundtjänst@sibaella.se <br>
     We usually respond to your email within 48 hours. <br>
    Before high seasons such as Easter, Midsummer and Christmas <br>
    and during the current situation with covid-19, the response time may be longer.</p>

    <h2>Ring</h2>
   <p>You can reach us in customer service on 0771-83 83 00 . <br>
      Weekdays:  9.30–17.00 <br>
      Saturdays: Closed</p>

    <h2>Postal address</h2>
   <p>Sibella AB <br>
    111 57 Stockholm</p>

    <h2>visiting address</h2>
   <p>Kungsträdgårdsgatan 14, Stockholm</p>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.0547000852193!2d18.07030291558787!3d59.33204058165979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5be2d56e75%3A0x5dbc04d9e58dd746!2sKungstr%C3%A4dg%C3%A5rdsgatan%2014%2C%20111%2047%20Stockholm!5e0!3m2!1sen!2sse!4v1621262476405!5m2!1sen!2sse" 
   width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </section>
  </div>
</template>

<script>
import NavAll from "@/components/NavAll.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
name:'Contact',
components:{
    NavAll,
    ShoppingCart,

}
}
</script>

<style scoped>
.Contact{
  height: 102rem;
  background-color: rgb(243, 239, 234);
}
.question{
  margin-left:19rem;
}
h1{
  margin-left:20rem;
  margin-top:-15rem;
  font-size: 3rem;
  color: #4c3a27;
  font-weight: 500;
  line-height: 1.7;
}
h2{
  color: #4c3a27;
  line-height: 1;
}
p{
  line-height: 1.7;
  padding-bottom:2rem;
  color: #4c3a27;
  font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif;
}

</style>