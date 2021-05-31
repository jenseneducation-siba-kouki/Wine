<template>
  <div class="Register">
     <section class="nav">
  <ShoppingCart />
   <NavAll />
    </section>
      <h1>Create A New Account</h1>
      <p>Fill in the form below to create a new account.</p>
      <form method="get" @submit.prevent="handleSubmit">
      <input type="text"
       v-model="auth.name"
        placeholder="First Name" />

      <input type="text"
       v-model="auth.last"
        placeholder="Last Name" />

      <input type="text"
       v-model="auth.adress"
        placeholder="Adress" />  

        <input type="date" 
        v-model="auth.age"
        id="birthday" 
        name="birthday">

      <input type="text"
       v-model="auth.username"
        placeholder="Username" />

      <input type="password"
       v-model="auth.password"
        placeholder="Password" />

      <input type="password"
        v-model="auth.repeatPassword"
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
import axios from "axios";
export default {
name:'Register',
data(){
  return {
    auth:{
      name: "",
      last:"",
      adress:"",
      age:"",
      username:"",
      password:"",
      repeatPassword:""
    }
  }

},
components:{
    NavAll,
    ShoppingCart,

},
methods:{
  async handleSubmit(){
     const response = await axios.post(
        `${process.env.VUE_APP_API_URL}/api/register`,
        this.auth,
        this.$router.push({ name: "LogIn" })
      );
      if (response.data.token) {
        sessionStorage.setItem("auth", response.data.token);
      }

  }
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