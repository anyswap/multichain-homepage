<template>
  <div class="footer-box">
    <div class="container-md">
      <el-row :gutter="10" class="">
        <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
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
        <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5" v-for="(items, indexs) in footerList" :key="indexs">
          <div class="support-box">
            <h3 class="h3">
              {{items.title}}
              <i class="icon"></i>
            </h3>
            <ul class="list">
              <li class="item" v-for="(item, index) in items.list" :key="index"><a :href="item.url" target="__blank">{{item.name}}</a></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-row {
  @media only screen and (min-width: 992px) {
    .el-col-md-4-8,.el-col-xl-4-8,.el-col-lg-4-8 {
      width:20%;
    }
  }
}
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
        padding:size(3) 0;
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
      ],
      footerList: [
        {
          title: 'About',
          list: [
            // {name: 'Blog', url: 'https://medium.com/multichainorg'},
            {name: 'Docs', url: this.$$.docUrl},
            {name: 'FAQ', url: 'https://docs.multichain.org/faq'},
            // {name: 'Github', url: this.$$.github},
            {name: 'Brand Assets', url: 'https://github.com/anyswap/Brand-assets'},
            {name: 'Multichain Report Q2 2022', url: 'https://drive.google.com/file/d/1AcAwdIeI3-ALD4KBRc9EQCXW9GnNfHZV/view'},
            {name: 'Multichain Report Q1 2022', url: 'https://drive.google.com/file/d/1tIjUsdncA2Hq-5DHeXXEfDjaee1usYnC/view'},
            {name: 'Multichain Report 2021', url: 'https://drive.google.com/file/d/1gdkpldTjBXKV6H7Duu4_m3XmLTQGcHmg/view'},
            {name: 'Careers', url: 'https://docs.multichain.org/careers'},
            {name: 'anyCall Whitepaper', url: 'https://drive.google.com/file/d/1NFFFecAjStbGMyvJVDez3xmsGSHYvNYv/view?usp=sharing'},
          ]
        },
        {
          title: 'Developers',
          list: [
            {name: 'Listing', url: 'https://dard6erxu8t.typeform.com/to/C7RwF08A'},
            {name: 'Support', url: 'https://multichain.zendesk.com/hc/en-us'},
            {name: 'Dev docs', url: 'https://docs.multichain.org/developer-guide'},
            {name: 'Audit', url: 'https://github.com/anyswap/Anyswap-Audit'},
            {name: 'Bug bounty', url: 'https://docs.multichain.org/security/bug-bounty'},
            {name: 'Contact', url: 'mailto:contact@multichain.org'},
          ]
        },
        {
          title: 'Product',
          list: [
            {name: 'Router', url: this.$$.enterApp},
            {name: 'Explorer', url: this.$$.explorerUrl},
            {name: 'Network', url: this.$$.explorerUrl + '/network'},
            {name: 'Governance', url: 'https://vote.anyswap.exchange/'},
            {name: 'Dashboard', url: this.$$.explorerUrl + '/dashboard'},
            {name: 'Tools', url: this.$$.explorerUrl + '?tabparams=tools'},
          ]
        }
      ]
    }
  }
}
</script>