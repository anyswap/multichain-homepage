<template>
  <div id="app">
    <router-view v-if="isRefresh"/>
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
      isRefresh: true
    }
  },
  computed: {
    isDark () {
      return this.$store.state.isDark
    },
  },
  watch: {
    isDark () {
      this.refersh()
      this.toggleTheme(this.isDark)
    },
  },
  created () {
    this.toggleTheme(this.isDark)
  },
  mounted () {
    this.getBridgeData()
  },
  methods: {
    ...mapActions([
      'getBridgeData',
    ]),
    toggleTheme(flag) {
      window.document.documentElement.setAttribute(
        "data-theme",
        Number(flag) ? "dark" : "light"
      );
    },
    refersh () {
      this.isRefresh = false
      this.$nextTick(() => {
        this.isRefresh = true
      })
    }
  }
}
</script>