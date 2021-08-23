<template>
  <div class="footer-box">
    <div class="container-md">
      <el-row :gutter="10" class="">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">PRODUCTS</h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Multichain</a></li>
              <li class="item"><a href="" target="__blank">Kashi Lending</a></li>
              <li class="item"><a href="" target="__blank">API</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">SUPPORT</h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Multichain</a></li>
              <li class="item"><a href="" target="__blank">Kashi Lending</a></li>
              <li class="item"><a href="" target="__blank">API</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">SUPPORT</h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Multichain</a></li>
              <li class="item"><a href="" target="__blank">Kashi Lending</a></li>
              <li class="item"><a href="" target="__blank">API</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="footer-item-info">
            <div class="logo"><img src="~@/assets/logo.svg" alt="logo"/></div>
            <div class="content">
              Powered by Fusion DCRM
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
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
.footer-box {
  width: 100%;
  height: size(300);
  margin-top: size(30);
  background:#000;
  padding: size(30) 0;
  .support-box {
    width: 100%;
    .h3 {
      font-size: size(16);
      font-weight: bold;
      color: #fff;
      margin-bottom: size(15);
    }
    .list {
      .item {
        padding:size(5) 0;
        a {
          font-size: size(16);
          color: #f2f2f2;
        }
      }
    }
  }
  .footer-item-info {
    .logo {
      height: size(60);
      img {
        height: 100%;
        display: block;
      }
    }
    .content {
      padding: size(20) 0;
      font-size: size(14);
      color: #fff;
    }
    .list {
      .item {
        width: size(50);
        padding: size(10);
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