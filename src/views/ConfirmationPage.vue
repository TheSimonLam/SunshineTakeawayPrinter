<template>
  <div class="confirmation-page-container">
    <div class="ordered-items-container">
      <div class="item-container" @click="removeItem(item)" v-for="item in order" v-bind:key="item.uuid">
        <!-- <div class="ordered-item-number">{{item.number}}</div> -->
        <div class="ordered-item ordered-item-name">{{item.name}} - </div>
        <div class="ordered-item ordered-item-price">£{{item.price}}</div>
      </div>
      <div class="price-container">Total: £{{totalPrice.toFixed(2)}}</div>
    </div>
    <div class="confirmation-buttons-container">
      <div class="confirmation-button" @click="backToOrderPage">🔙 Back</div>
      <div class="confirmation-button" @click="print">📄 Print</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'confirm',
  computed: {
    order() {
      return this.$store.getters.getOrder
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice
    }
  },
  methods: {
    print(){
      window.print();
    },
    backToOrderPage(){
      this.$router.push({ path: 'order' })
    },
    removeItem(item){
      this.$store.commit("removeItemFromOrder", item);
    }
  }
}
</script>

<style lang="scss">
  @import '../css/global.scss';

  .confirmation-page-container{
    height: 100vh;
    padding-top: 100px;
  }

  .ordered-items-container{
    font-size: 1.3em;
    background: white;
    border-radius: 5px;
    margin: 0 50px;
    padding: 10px;
  }

  .item-container{
    padding-bottom: 10px;
  }

  .ordered-item {
    display: inline-block;
  }

  .ordered-item-name{
    padding-right: 5px;
  }

  .ordered-item-price{

  }

  .price-container{
    font-size: 1em;
    padding-top: 20px;
    font-weight: bold;
  }

  .confirmation-buttons-container{
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .confirmation-button{
    width: 50%;
    background: white;
    outline: 2px solid black;
    display: inline-block;
    height: 80px;
    font-size: 2em;
    text-align: center;
    line-height: 80px;
  }
</style>