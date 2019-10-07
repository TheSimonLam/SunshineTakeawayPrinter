<template>
  <div class="">
    <div class="type-container" @click="toggleShowItems">{{menuType.name}}</div>
    <div v-if="showItems">
      <div class="item-square-container" @click="addToOrder(item)" v-for="item in menuType.items" v-bind:key="item.number">
        <div class="item item-number">{{item.number}}</div>
        <div class="item item-name">{{item.name}}</div>
        <div class="item item-price">£{{item.price}}</div>
        <div class="item item-allergens">{{item.allergens}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'type',
  props: ['menuType'],
  data: function(){
    return {
      showItems: false
    }
  },
  methods: {
    toggleShowItems(){
      this.showItems = !this.showItems
    },
    addToOrder(item){
      this.$store.commit("addItemToOrder", item);
    }
  }
}
</script>

<style lang="scss">
  .type-container{
    width: 100%;
    display: inline-block;
    background: lightblue;
    padding: 25px 0;
    margin: 10px 0;
  }

  .item-square-container{
      height: 150px;
      width: 150px;
      background: lightblue;
      margin: 10px;
      display: inline-block;
      padding: 10px;
      text-align: left;
      border-radius: 5px;
    }

    .item {
      padding: 5px 0;
    }

    .item-number{

    }

    .item-name{
      font-size: 1.3em;
      font-weight: bold;
    }

    .item-price{
      
    }

    .item-allergens{
      
    }
</style>