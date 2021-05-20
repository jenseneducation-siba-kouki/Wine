<template>
  <div class="Register">
     <section class="nav">
  <ShoppingCart />
   <NavAll />
    </section>
      <h1>Create A New Account</h1>
      <p>Fill in the form below to create a new account.</p>
      <form @submit.prevent="handleSubmit">
      <input type="text"
       v-model="name"
        placeholder="First Name" />

      <input type="text"
       v-model="last"
        placeholder="Last Name" />

      <input type="text"
       v-model="adress"
        placeholder="Adress" />  

        <input type="date" 
        v-model="age"
        id="birthday" 
        name="birthday">

      <input type="text"
       v-model="username"
        placeholder="Username" />

      <input type="password"
       v-model="password"
        placeholder="Password" />

      <input type="password"
        v-model="repeatPassword"
        placeholder="Confirm password"
      />
      <button>Register</button>
      <router-link to="/login">Already have an account?</router-link>
    </form>
  </div>
</template>

<script>
import NavAll from "@/components/NavAll.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
name:'Register',
components:{
    NavAll,
    ShoppingCart,

}
}
</script>

<style scoped>
.Register{
  height: 70rem;
  background-color: rgb(243, 239, 234);
}
h1{
  margin-left:17rem;
  margin-top:-14rem;
  font-size: 3rem;
  color: #4c3a27;
  font-weight: 500;
}
a{
  margin-left:3rem;
  text-decoration: none;
  color: #4c3a27;
}
p{
  padding-top: 2rem;
  margin-left:17rem;
  color: #4c3a27;
  font-family: "LegacySanITC-Book", "Arial", "Helvetica Neue", "Helvetica", sans-serif;
}
form {
padding-top:2rem;
margin-left:17rem;
width: 35rem;
}
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