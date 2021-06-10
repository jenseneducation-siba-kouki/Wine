<template>
  <div class="contact">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <footer class="container">
      <section class="adress">
      <h3>Adress </h3> 
        <h3>111 57 Stockholm</h3>
          <h3>Phone: 08-568 492 41</h3> <br>
      </section>
      <section class="website">
        <h3>Connect</h3>
        <h3>sibella.se</h3>
        <h3>info@sibella.se</h3> <br>
      </section>
      <section class="social">
        <h3>Join Us on Social Media</h3>
        <h3>Like and Follow</h3>
        <div class="media">
          <ul>
              <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </section>

      </footer>
      <p>
      &copy; {{ new Date().getFullYear() }} | SibElla
    </p>
    

  </div>
</template>

<script>
export default {
name: 'Contact',

}
</script>

<style scoped>
section{
height: 14rem;
box-sizing: border-box;
display:inline-block;
margin: 0 5.9rem;
text-align: center;
padding: 1rem;
margin-top:4rem;
}
footer{
background-color: #3B3838;}
h3{
  text-align: center;
  color: rgb(202, 196, 196);
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: center;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
  line-height: 1.166;
}
p{
  background-color: #3B3838;
  color: rgb(202, 196, 196);
  text-align: center;
  padding:10px;
  font-family: "LegacySerITC-Book", "Playfair Display", "Times New Roman", "Times", "Baskerville", "Georgia", serif;

}
li{
  list-style: none;
  display:inline-block;
  padding:10px;
  font-size: 40px;
  font-style: oblique;
}
  i{
  color: rgb(202, 196, 196);
  }
</style>