<template>
  <div class="carousel-box">
    <div class="container-md">
      <el-carousel indicator-position="none" arrow="never" class="carousel-content">
        <el-carousel-item v-for="(item, index) in bannerList" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </el-carousel-item>
      </el-carousel>
      <div class="carousel-btn flex-c">
        <el-button type="primary" @click="methods('https://stable.anyswap.exchange/')">Enter App</el-button>
        <el-button @click="openUrl('https://anyswap.net/')">Explorer</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$cardH: 400;
.carousel-box {
  width: 100%;
  background: rgb(21, 26, 47);
  .carousel-content {
    height: size($cardH);
    .el-carousel__item{
      padding: size(150) 0;
      height: size($cardH);
      color: #fff;
      h3 {
        font-size: size(48);
        line-height: size(72);
      }
      p {
        font-size: size(36);
        line-height: size(54);
      }
    }
  }
  .carousel-btn {
    width: 100%;
    padding: size(30) 0;
  }
}
</style>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      bannerList: [
        {title: 'Decentralized cross-chain bridge protocol', content: 'An infrastructure designed for arbitrary assets cross-chain based on MPC  '}
      ]
    }
  },
  methods: {
    openUrl (url) {
      window.open(url)
    }
  }
}
</script>