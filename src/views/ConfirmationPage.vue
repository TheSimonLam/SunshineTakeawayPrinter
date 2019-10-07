<template>
  <div>
    <div class="ordered-items-container" @click="removeItem(item)" v-for="item in order" v-bind:key="item.name">
      <!-- <div class="ordered-item-number">{{item.number}}</div> -->
      <div class="ordered-item ordered-item-name">{{item.name}}</div>
      <div class="ordered-item ordered-item-price">{{item.price}}</div>
    </div>
    <div class="price-container">Total is: £{{orderTotal}}</div>
    <div class="nav-buttons-container">
      <div class="nav-button nav-button-left" @click="backToOrderPage">Back</div>
      <div class="nav-button nav-button-right" @click="print">Print</div>
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
    orderTotal(){
      let total = 0;
      for(let order of this.$store.getters.getOrder){
        total += parseInt(order.price);
      }
      return total;
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
  .ordered-items-container{
    font-size: 1.8em;
    padding: 5px 0;
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
    font-size: 2em;
    padding-top: 20px;
    font-weight: bold;
  }
</style>