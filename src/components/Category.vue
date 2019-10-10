<template>
  <div>
    <div class="category-container" @click="toggleShowItems">{{category.name}}</div>
    <div class="items-container" v-bind:class="{ expanded: showItems }">
        <div class="item-square-container" @click="addToOrder(item, $event)" v-for="item in category.items" v-bind:key="item.number">
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
  name: 'category',
  props: ['category'],
  data: function(){
    return {
      showItems: false
    }
  },
  methods: {
    toggleShowItems(){
      this.showItems = !this.showItems
    },
    addToOrder(item, e){
      this.fireAddedToBasketMessage(e);
      this.$store.commit("addItemToOrder", item);
    },
    fireAddedToBasketMessage(e){
      let message = document.getElementById("item-added-message");

      message.style.top = (e.pageY - 40) + "px";
      message.style.left = (e.pageX - 60) + "px";
      message.className += " fade-in";

      setTimeout(()=>{
        message.className = message.className.replace(" fade-in", "");
      }, 500)
      
    }
  }
}
</script>

<style lang="scss">
  @import '../css/global.scss';

  .category-container{
    width: 100%;
    display: inline-block;
    background: #FFF;
    border-radius: 5px;
    padding: 20px 0;
    margin-top: 10px;
    font-size: 1.5em;
    font-weight: bold;
  }

  .expanded{
    max-height: 2200px!important;
  }

  .item-square-container{
      height: 150px;
      width: 100px;
      background: #F3D250;
      margin: 10px;
      display: inline-block;
      padding: 10px;
      text-align: left;
      border-radius: 5px;
      vertical-align: top;
    }

    .item {
      padding: 5px 0;
    }

    .item-number{

    }

    .item-name{
      font-size: 1em;
      font-weight: bold;
    }

    .item-price{
      
    }

    .item-allergens{
      
    }

    .items-container{
      background: $white;
      max-height: 0;
      overflow: hidden;
      overflow-y: hidden;
      transition: max-height 0.5s linear;
    }
</style>