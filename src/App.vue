<template>
  <div id="app">
    <div id="nav" v-if="totalPrice !== 0">
      <div class="total-price-container">💰 Total Price: £{{totalPrice}}</div>
      <div class="checkout-container" @click="goToConfirmationPage">🛒 Checkout</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    totalPrice () {
      return this.$store.getters.getTotalPrice
    }
  },
  methods: {
    goToConfirmationPage(){
      this.$router.push({path: "confirm"})
    }
  }
}
</script>

<style lang="scss">
  @import './css/global.scss';

  #app{
    font-family: 'Roboto', sans-serif;
    background: $red;
  }

  #nav{
    position: relative;
    font-size: 1.5em;
  }

  .total-price-container{
    left: 0;
    padding: 10px;
    position: absolute;
    background: #FFF;
    border-bottom-right-radius: 10px;
  }

  .checkout-container{
    right: 0;
    padding: 10px;
    position: absolute;
    background: #FFF;
    border-bottom-left-radius: 10px;
  }
</style>
