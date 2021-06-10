<template>
  
      <div class="uk-align-center uk-margin-top uk-width-large uk-background-muted uk-box-shadow-large">

        <form class="uk-padding">
     <div class="uk-margin uk-text-center">
            <p class="stripeError" v-if="stripeError">
              {{stripeError}}
            </p>
          </div>


          <div class="uk-grid-small uk-text-left" uk-grid>
          <div class="uk-width-1-2@s">
            <label class="uk-form-label" for="Card Number">
              Kort nummer            </label>
            <div class="uk-form-controls">
              <div id="card-number" class="uk-input" :class="{ 'uk-form-danger': cardNumberError }"></div>
              <span class="help-block" v-if="cardNumberError">
                                {{cardNumberError}}
                            </span>
            </div>
          </div>
          </div>
<br>
          <div class="uk-grid-small uk-text-left" uk-grid>
            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="Card CVC">
               CVC
              </label>
              <div class="uk-form-controls">
                <div id="card-cvc" class="uk-input" :class="{ 'uk-form-danger': cardCvcError }"></div>
                <span class="help-block" v-if="cardCvcError">
                                    {{cardCvcError}}
                                </span>
              </div>
            </div>
            <br>

            <div class="uk-width-1-2@s">
              <label class="uk-form-label" for="Expiry Month">
                Datum
              </label>
              <div class="uk-form-controls">
                <div id="card-expiry" class="uk-input" :class="{ 'uk-form-danger': cardExpiryError }"></div>
                <span class="help-block" v-if="cardExpiryError">
                                    {{cardExpiryError}}
                                </span>
              </div>
            </div>
          </div>

           <div class="uk-margin uk-margin-remove-bottom uk-text-right">
            <button class="uk-button uk-button-large uk-button-default
            uk-width-1-1"   @click.prevent="reset()">
              reset
            </button>
          

            <button class="uk-button uk-button-large 
            uk-button-primary
            uk-button-default uk-width-1-1
           "  @click.prevent="submitFormToCreateToken()">
              Betala
            </button>
          </div>

        </form>
      </div>
     
</template>

<script>
export default {
  name: "StripeElementCard",
   data(){
  return {
    card:{
      cvc: "",
      number:"",
      expiry:""
      
    },
     //elements
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    stripe: null,

    // errors
    stripeError: '',
    cardCvcError: '',
    cardExpiryError: '',
    cardNumberError: '',

    loading: false,
  }
    

   
  },

  mounted() {
    this.setUpStripe();
  },

  methods: {
    setUpStripe() {
        if (window.Stripe === undefined) {
          alert('Stripe V3 library not loaded!');
        } else {
          const stripe = window.Stripe('pk_test_51IxvB6CwtypfJVpd65kbKUEHsj00vwt0UYnYRtt0bcdFwlFABNMRyHD0LZnxPlM6SDh3UjUkhwRy3hff4dp6UN2f00ElrOtsIY');
          this.stripe = stripe;

          const elements = stripe.elements();
          this.cardCvc = elements.create('cardCvc');
          this.cardExpiry = elements.create('cardExpiry');
          this.cardNumber = elements.create('cardNumber');

          this.cardCvc.mount('#card-cvc');
          this.cardExpiry.mount('#card-expiry');
          this.cardNumber.mount('#card-number');

          this.listenForErrors();
        }
      },

      listenForErrors() {
        const vm = this;

        this.cardNumber.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardNumberError = ''
          vm.card.number = event.complete ? true : false
        });
				
        this.cardExpiry.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardExpiryError = ''
          vm.card.expiry = event.complete ? true : false
        });
        
				this.cardCvc.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardCvcError = ''
          vm.card.cvc = event.complete ? true : false
        });
      },

      toggleError (event) {
        if (event.error) {
          this.stripeError = event.error.message;
        } else {
          this.stripeError = '';
        }
      },

      submitFormToCreateToken() {
        this.clearCardErrors();
        let valid = true;

        if (!this.card.number) {
          valid = false;
          this.cardNumberError = "Kort nummer är obligatoriskt";
        }
        if (!this.card.cvc) {
          valid = false;
          this.cardCvcError = "CVC är obligatoriskt";
        }
        if (!this.card.expiry) {
          valid = false;
          this.cardExpiryError = "Datum är obligatoriskt";
        }
        if (this.stripeError) {
          valid = false;
        }
        if (valid) {
          this.createToken()
        }
      },

      createToken() {
        this.stripe.createToken(this.cardNumber).then((result) => {
            if (result.error) {
              this.stripeError = result.error.message;
            } else {
              const token = result.token.id 
              // this.$router.push("/Success");
              alert('Success!')

              console.log(token)
                //send the token to your server
                //clear the inputs
            }
          })
          

      },

      clearElementsInputs() {
        this.cardCvc.clear()
        this.cardExpiry.clear()
        this.cardNumber.clear()
      },

      clearCardErrors() {
        this.stripeError = ''
        this.cardCvcError = ''
        this.cardExpiryError = ''
        this.cardNumberError = ''
      },
			
			reset() {
				this.clearElementsInputs()
				this.clearCardErrors()
			}
  },
  
}
</script>

<style scoped>
.help-block {
  color: red;
  font-size: 15px;
}

/* form {
  border-width: 2px;
  border-style: solid;
  
} */

label.uk-form-label {
  color: black;
  font-size: 18px;
}

button.uk-button-primary {
  color: rgb(15, 15, 15);
  margin:3px;
  padding:3px;
  background-color: #14b52c

}



#card-number,
#card-cvc,
#card-expiry {
  padding-top: 10px;
}

.stripeError {
  color: red;
  font-style: italic;
}


</style>