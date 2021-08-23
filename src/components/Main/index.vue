<template>
  <div class="contentBg">
    <HeaderWrapper />
    <router-view />
    <FooterWrapper />
  </div>
</template>

<script>
import HeaderWrapper from '@c/Public/header.vue'
import FooterWrapper from '@c/Public/footer.vue'
export default {
  name: 'Main',
  components: {HeaderWrapper, FooterWrapper},
  data () {
    return {
      
    }
  }
}
</script>