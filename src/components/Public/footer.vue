<template>
  <div class="footer-box">
    <div class="container-md">
      <el-row :gutter="10" class="">
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="footer-item-info">
            <div class="logo"><img src="~@/assets/logo-white.png" alt="logo"/></div>
            <div class="content">
              © 2021 Anyswap. All rights reserved.
            </div>
            <ul class="list flex-sc">
              <li class="item" v-for="(item, index) in network" :key="index">
                <a :href="item.url" target="__blank">
                  <img :src="item.logo" alt="">
                </a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">
              PRODUCTS
              <i class="icon"></i>
            </h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Multichain</a></li>
              <li class="item"><a href="" target="__blank">Kashi Lending</a></li>
              <li class="item"><a href="" target="__blank">API</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">
              SUPPORT
              <i class="icon"></i>
            </h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Multichain</a></li>
              <li class="item"><a href="" target="__blank">Kashi Lending</a></li>
              <li class="item"><a href="" target="__blank">API</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">
              SUPPORT
              <i class="icon"></i>
            </h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Multichain</a></li>
              <li class="item"><a href="" target="__blank">Kashi Lending</a></li>
              <li class="item"><a href="" target="__blank">API</a></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
.footer-box {
  width: 100%;
  background:#000;
  padding: size(80) 0;
  .support-box {
    width: 100%;
    margin-bottom: size(20);
    .h3 {
      font-size: size(22);
      font-weight: bold;
      color: #fff;
      margin-bottom: size(15);
      font-family: 'Manrope-ExtraBold';
      .icon {
        width: size(8);
        height: size(8);
        background: #524DFB;
        display: inline-block;
      }
    }
    .list {
      .item {
        padding:size(5) 0;
        a {
          font-size: size(16);
          color: #f2f2f2;
          font-family: 'Manrope-Regular';
        }
      }
    }
  }
  .footer-item-info {
    .logo {
      height: size(33);
      img {
        height: 100%;
        display: block;
      }
    }
    .content {
      padding: size(20) 0;
      font-size: size(16);
      color: #fff;
      font-family: 'Manrope-Regular';
    }
    .list {
      margin-bottom: size(20);
      .item {
        width: size(30);
        // padding: size(10);
        margin-right: size(20);
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      network: [
        {name: '', url: 'https://t.me/anyswap', logo: require('../../assets/img/telegram-white.svg')},
        {name: '', url: 'https://medium.com/@anyswap', logo: require('../../assets/img/medium-white.svg')},
        {name: '', url: 'https://twitter.com/AnyswapNetwork', logo: require('../../assets/img/twitter-white.svg')},
        {name: '', url: 'https://github.com/anyswap', logo: require('../../assets/img/github-white.png')},
        {name: '', url: 'https://coinmarketcap.com/currencies/anyswap/', logo: require('../../assets/img/coinmarketcap-white.png')},
        {name: '', url: 'https://www.coingecko.com/en/coins/anyswap', logo: require('../../assets/img/coingecko-white.png')}
      ]
    }
  }
}
</script>