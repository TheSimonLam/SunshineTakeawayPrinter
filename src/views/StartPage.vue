<template>
  <div class="start-page-container">
    <button class="start-button" @click="goToOrderPage">START</button>
  </div>
</template>

<script>

export default {
  name: 'start',
  methods: {
    goToOrderPage(){
      this.$router.push({ path: 'order' })
    }
  }
}
</script>

<style lang="scss">
  .start-page-container{
    text-align: center;
    height: 100vh;
  }

  .start-button{
    margin-top: 20%;
    padding: 5% 20%;
    border-radius: 5px;
    font-size: 5em;
    background: lightskyblue;
    color: white;
  }
</style>