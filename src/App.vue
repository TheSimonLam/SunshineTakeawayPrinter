<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Restart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app{
    font-family: 'Roboto', sans-serif;
  }

  #nav{
    text-align: right;

    a{
      text-decoration: none;
      font-size: 2em;
      padding: 5px 5px 0 0;
      &:visited { text-decoration: none; color: black}
      &:hover { text-decoration: none; color: black}
    }
  }
</style>
