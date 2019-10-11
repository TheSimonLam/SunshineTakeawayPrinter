<template>
  <div>
    <div class="category-container" @click="toggleShowItems">{{category.name}}</div>
    <div class="items-container" v-bind:class="{ expanded: showItems }">
      <div class="item-square-container" @click="addToOrder(item, category.sideIncluded, $event)" v-for="item in category.items" v-bind:key="item.number">
        <div class="item item-number">{{item.number}}</div>
        <div class="item item-name">{{item.name}}</div>
        <div class="item item-price">£{{item.price}}</div>
        <div class="item item-allergens">{{item.allergens}}</div>
      </div>
    </div>

    <div class="side-overlay-container" v-if="showSideOverlay">
      <div class="overlay-background"></div>
      <div class="side-container">
        <div>Choose a side:</div>
        <div class="side-overlay-buttons-container">
          <button class="side-overlay-button" @click="sideChosen('br')">Boiled Rice</button>
          <button class="side-overlay-button" @click="sideChosen('fr')">Fried Rice</button>
          <button class="side-overlay-button" @click="sideChosen('na')">None</button>
        </div>
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
      showItems: false,
      showSideOverlay: false
    }
  },
  methods: {
    toggleShowItems(){
      this.showItems = !this.showItems
    },
    addToOrder(item, sideIncluded, e){
      this.fireAddedToBasketMessage(e);
      this.$store.commit("addItemToOrder", item);

      if(sideIncluded && !item.dontIncludeSideOverride) //the override's for vegetarian chow mein
        this.toggleSideOverlay();
    },
    fireAddedToBasketMessage(e){
      let message = document.getElementById("item-added-message");

      message.style.top = (e.pageY - 40) + "px";
      message.style.left = (e.pageX - 60) + "px";
      message.className += " fade-in";

      setTimeout(()=>{
        message.className = message.className.replace(" fade-in", "");
        setTimeout(() => {
          message.style.top = "-500px";
          message.style.left = "-500px";
        }, 500);
      }, 500)
    },
    toggleSideOverlay(){
      this.showSideOverlay = !this.showSideOverlay;
    },
    sideChosen(side){
      this.toggleSideOverlay();
      console.log(side);
      // this.$store.commit("resetOrder");
      // this.$router.push({ path: '/' })
    },
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
    border: 2px solid black;
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
      border: 2px solid black;
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
      border: 2px solid black;
    }

    .side-overlay-container{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .overlay-background{
    background: black;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    position: absolute;
  }

  .side-container{
    border: 2px solid black;
    display: inline-block;
    background: #FFF;
    width: 40%;
    height: 200px;
    border-radius: 5px;
    padding: 40px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 2em;
  }

  .side-overlay-buttons-container{
    margin-top: 10px;
  }

  .side-overlay-button{
    font-size: 1em;
    border: 2px solid black;
    margin: 15px;
    background: #90CCF4;
    border-radius: 5px;
  }
</style>