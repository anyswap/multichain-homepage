<template>
  <div class="top-tip-box" :class="!isOpenChangeBrand ? 'block' : ''">
    <div class="top-tip-content container">
      [Warning] Please visit link (<a href="https://app.multichain.org/#/approvals" target="_blank">https://app.multichain.org/#/approvals</a>) to confirm approvals asap. Details: <a href="https://app.multichain.org/#/approvals" target="_blank">medium</a>. 
      <!-- <a href="https://multichain.org" target="_blank">https://multichain.org</a> -->
    </div>
    <i class="icon el-icon-close" @click="closeTopTip()"></i>
  </div>
</template>

<style lang="scss">
.top-tip-box {
  width: 100%;
  height: size($headerHTip);
  line-height: size($headerHTip);
  overflow-y: hidden;
  overflow-x: auto;
  background: #fdf6ec;
  text-align: center;
  color:#062536;
  font-size: size(14);
  white-space: nowrap;
  position: relative;
  display: none;
  a {
    text-decoration: underline;
    color: $mainColor;
  }
  .icon {
    position: absolute;
    right: size(10);
    top: 0;
    height: size($headerHTip);
    line-height: size($headerHTip);
    cursor: pointer;
  }
  &.block {
    display: block;
  }
}
</style>

<script>
const CHANGE_BRAND_TIP = 'CHANGE_BRAND_TIP'
export default {
  name: 'Main',
  data () {
    return {
      isOpenChangeBrand: false,
    }
  },
  mounted () {
    this.isOpenChangeBrand = localStorage.getItem(CHANGE_BRAND_TIP)
  },
  methods: {
    closeTopTip () {
      this.isOpenChangeBrand = true
      localStorage.setItem(CHANGE_BRAND_TIP, true)
    }
  }
}
</script>