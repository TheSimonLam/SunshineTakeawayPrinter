<template>
  <div class="order-page-container">
    <Type class="item-type-container" v-for="menuType in menu" v-bind:key="menuType.name" :menuType="menuType"></Type>
    <div class="nav-buttons-container">
      <div class="nav-button nav-button-left">Back</div>
      <div class="nav-button nav-button-right" @click="goToSummaryPage">Summary</div>
    </div>
  </div>
</template>

<script>
import Type from '../components/Type'

export default {
  name: 'order',
  components: {
    Type
  },
  computed: {
    menu () {
      return this.$store.getters.getMenu
    }
  },
  methods: {
    goToSummaryPage(){
      this.$router.push({path: "confirm"})
    }
  }
}
</script>

<style lang="scss">
  .order-page-container{
    text-align: center;
  }

  .nav-buttons-container{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  .nav-button{
    width: 50%;
    display: inline-block;
    padding: 30px 0;
    font-size: 1.5em;
    color: white;
  }

  .nav-button-left{
    background: lightsalmon;
  }

  .nav-button-right{
    background: lightgreen;
  }
</style>