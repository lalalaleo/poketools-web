<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}
html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-y: auto;
  background-image: url(https://images3.alphacoders.com/206/206177.jpg);
  background-size: cover;
}
</style>
