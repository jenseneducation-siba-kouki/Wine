<template>
  <div class="LogIn">
    <section class="nav">
  <ShoppingCart />
   <NavAll />
    </section>
      <h1>Member Login</h1>
      <p>In order to proceed you need to login. If you are not a member you need to sign up by
       clicking the link on the left.</p>
      <form @submit.prevent="handleSubmit">
      <input type="text"
       v-model="username" 
       placeholder="Username" />
      <input type="password"
       v-model="password" 
       placeholder="Password" />
      <button>Log in</button>
    </form>
    <h2>To sign up for an account</h2>
    <router-link class="link" to="/Register">Click Here</router-link>
  </div>
</template>

<script>
import NavAll from "@/components/NavAll.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
name:'LogIn',
components:{
    NavAll,
    ShoppingCart,

}
}
</script>

<style scoped>
.LogIn{
  height: 50rem;
  background-color: rgb(243, 239, 234);
}
h1{
  margin-left:17rem;
  margin-top:-14rem;
  font-size: 3rem;
  color: #4c3a27;
  font-weight: 500;
}
p{
  padding-top: 2rem;
  margin-left:17rem;
  color: #4c3a27;
  font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif;
}
h2{
  margin-left:17rem;
  padding-top: 2rem;
  color: #4c3a27;
}
form {
padding-top:2rem;
margin-left:17rem;
width: 35rem;
}
a{
  margin-left:17rem;
  text-decoration: none;
  color: #4c3a27;
}
/* .link{
 border: 1px solid #eee;
 padding-top:2rem;

} */

input {
  height: 3.1rem;
  width: 100%;
  margin: 1rem 0;
  padding: 10px 8px;
  border-radius: 3px;
  border: 1px solid #eee;
  }
  button{
    width: 6rem;
    height: 3rem;
    margin-top:1.5rem;
    background-color: white;
    border: 1px solid rgb(221, 191, 170);
  }


</style>