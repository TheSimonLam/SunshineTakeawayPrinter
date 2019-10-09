import Vue from 'vue'
import Vuex from 'vuex'
import menu from './assets/menu';
import uuid from 'uuidv4';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: menu,
    order: [],
    totalPrice: 0
  },
  mutations: {
    addItemToOrder(state, item){
      let uuidCode = uuid();
      item.uuidCode = uuidCode;
      state.order.push(item);
      state.totalPrice += parseFloat(item.price);
    },
    removeItemFromOrder(state, item){
      state.totalPrice -= parseFloat(item.price);
      state.order = state.order.filter(function(itemToRemove) {
        return itemToRemove !== item;
      });
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
    }
  }
})
