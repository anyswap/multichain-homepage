<template>
  <div class="header-box">
    <div class="header-content flex-bc container-md">
      <div class="header-logo cursorP">
        <img alt="logo" src="~@/assets/logo-white.png" @click="toUrl('/')" />
      </div>

      <div class="header-right flex-ec">
        <ul class="nav-list flex-ec">
          <li class="item">
            <router-link to='/swap' class="link flex-c">Swap</router-link>
          </li>
          <li class="item" v-for="(item, index) in navList" :key="index">
            <a :href="item.url" target="__blank" class="link flex-c">{{item.name}}</a>
          </li>
        </ul>
        <div class="is-dark" @click="changeTheme">
          <img src="~@/assets/img/day.png" v-if="isDark"/>
          <img src="~@/assets/img/night.png" v-else/>
        </div>
        <el-button @click="openUrl(appUrl)" type="primary" class="btn-radius10 IH35 font16 plr15 pt-0 pb-0 btn-default">Enter App</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header-box {
  width: 100%;
  height: size($headerH);
  // @include bg('bannerBgColor');
  // background: rgba(0, 0, 0, 0.6);
  // box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.06);
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // z-index: 99;
  .header-content {
    height: 100%;
    margin: 0 auto;
    .header-logo {
      height: 100%;
      padding: size(10) 0;
      img {
        height: 100%;
        display: block;
      }
    }
    .header-right {
      height: 100%;
      .nav-list {
        height: 100%;
        .item {
          height: 100%;
          padding: 0 size(20);
          cursor: pointer;
          .link {
            color: #fff;
            height: 100%;
            line-height: 100%;
            &:hover {
              color: blue;
            }
          }
        }
      }
    }
  }
}
.is-dark {
  width: size(36);height: size(36);padding:size(8); @include bg("bg1");border-radius:100%;
  img {
    height: 100%; display: block;
  }
}
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: [
        {name: 'Doc', url: 'https://docs.anyswap.exchange/docs/'},
        {name: 'Github', url: 'https://docs.anyswap.exchange/docs/'},
      ],
      appUrl: 'https://deploy.anyswap.exchange/#/swap'
    }
  },
  computed: {
    isDark () {
      return Number(this.$store.state.isDark)
    },
  },
  methods: {
    openUrl (url) {
      window.open(url)
    },
    changeTheme () {
      let flag = this.isDark ? 0 : 1
      this.$store.commit('setIsDark', flag)
    },
  }
}
</script>