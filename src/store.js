import Vue from 'vue'
import Vuex from 'vuex'
import menu from './assets/menu';
import uuid from 'uuidv4';

Vue.use(Vuex)

function initSideOrders(){
  for(let category of menu){
    if(category.name === "Starters, Sides & Extras"){
      let mealSides = [];

      for(let side of category.items){
        if(side.id === 312 || side.id === 313){ //Boiled rice and Fried rice
          mealSides.push(side);
        }
      }

      return mealSides;
    }
  }
}

export default new Vuex.Store({
  state: {
    menu: menu,
    order: [],
    totalPrice: 0,
    mealSides: initSideOrders()
  },
  mutations: {
    addItemToOrder(state, item){
      item.uuid = uuid();
      state.order.push(item);
      state.totalPrice += item.price;
    },
    removeItemFromOrder(state, item){
      state.totalPrice -= item.price;
      state.order = state.order.filter(function(itemToRemove) {
        return itemToRemove !== item;
      });
    },
    removeLastItem(state){
      let removedItem = state.order.pop();
      state.totalPrice -= removedItem.price;  
    },
    resetOrder(state){
      state.order = [];
      state.totalPrice = 0;
    }
  },
  actions: {

  },
  getters: {
    getMenu: state => {
      return state.menu;
    },
    getOrder: state => {
      return state.order;
    },
    getTotalPrice: state => {
      return state.totalPrice
    },
    getMenuMealSides: state => {
      return state.mealSides
    }
  }
})
