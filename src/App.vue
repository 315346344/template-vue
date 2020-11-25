<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

import { Vue, Component } from 'vue-property-decorator'

@Component()
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
