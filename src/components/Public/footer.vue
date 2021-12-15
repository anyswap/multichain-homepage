<template>
  <div class="footer-box">
    <div class="container-md">
      <el-row :gutter="10" class="">
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="footer-item-info">
            <div class="logo"><img src="~@/assets/logo-white.png" alt="logo"/></div>
            <div class="content">
              © 2021 Multichain. All rights reserved.
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
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">
              Company
              <i class="icon"></i>
            </h3>
            <ul class="list">
              <li class="item"><a href="https://app.gitbook.com/o/85CsdnspCc6rRjuCwGHJ/s/Udcg2zIVro9DItOfrezt/" target="__blank">About us</a></li>
              <li class="item"><a href="" target="__blank">Careers</a></li>
              <li class="item"><a href="https://anyswap.medium.com/" target="__blank">Blog</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">
              Help
              <i class="icon"></i>
            </h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Support</a></li>
              <li class="item"><a href="https://docs.multichain.org/faq" target="__blank">FAQ</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="support-box">
            <h3 class="h3">
              contact Us
              <i class="icon"></i>
            </h3>
            <ul class="list">
              <li class="item"><a href="" target="__blank">Contact</a></li>
              <li class="item"><a href="https://dard6erxu8t.typeform.com/to/C7RwF08A" target="__blank">listing</a></li>
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
  background:#303846;
  padding: size(80) 0;
  .support-box {
    width: 100%;
    margin-bottom: size(20);
    padding-left: size(30);
    .h3 {
      font-size: size(22);
      // font-weight: bold;
      color: #fff;
      margin-bottom: size(15);
      font-family: 'Manrope-ExtraBold';
      text-transform: capitalize;
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
    @media screen and (max-width: 960px) {
      padding-left: size(0);
      .h3 {
        text-align: center;
      }
      .list {
        .item {
          text-align: center;
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
      margin-bottom: size(40);
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
  @media screen and (max-width: 960px) {
    .footer-item-info {
      display: flex;
      justify-content:center;
      flex-wrap:wrap;
      .content {
        width: 100%;
        text-align: center;
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
        {name: '', url: this.$$.telegram, logo: require('../../assets/img/telegram-white.svg')},
        {name: '', url: this.$$.medium, logo: require('../../assets/img/medium-white.svg')},
        {name: '', url: this.$$.twitter, logo: require('../../assets/img/twitter-white.svg')},
        {name: '', url: this.$$.github, logo: require('../../assets/img/github-white.png')},
        {name: '', url: this.$$.coinmarketcap, logo: require('../../assets/img/coinmarketcap-white.png')},
        {name: '', url: this.$$.coingecko, logo: require('../../assets/img/coingecko-white.png')}
      ]
    }
  }
}
</script>