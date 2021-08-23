<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width:100%;
  min-height: 100%;
  min-width: 100vw;
  min-height:100vh;
}
</style>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted () {
    this.getBridgeData()
  },
  methods: {
    ...mapActions([
      'getBridgeData',
    ]),
  }
}
</script>