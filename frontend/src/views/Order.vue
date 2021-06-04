<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="pk_test_51IxvB6CwtypfJVpd65kbKUEHsj00vwt0UYnYRtt0bcdFwlFABNMRyHD0LZnxPlM6SDh3UjUkhwRy3hff4dp6UN2f00ElrOtsIY"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Betala!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      loading: false,
      successURL: this.$router.push(''),
      cancelURL: this.$router.push(''),
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

<style scoped >
</style>
