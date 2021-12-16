<template>
  <div>
    <img :src="formatLogoUrl()" />
  </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  name: 'Logo',
  props: {
    logoName: {
      type: String
    },
    logoUrl: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {
    formatLogoUrl () {
      let logoPath = ''
      try {
        logoPath = require(`../../assets/img/chain/${this.logoName}.png`)
      } catch (error) {
        try {
          logoPath = require(`../../assets/img/chain/${this.logoName}.svg`)
        } catch (error) {
          try {
            logoPath = require(`../../assets/img/chain/${this.logoName}.jpg`)
          } catch (error) {
            logoPath = this.logoUrl
          }
        }
      }
      return logoPath
    },
  }
}
</script>