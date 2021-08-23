<template>
  <div class="header-box">
    <div class="header-content flex-bc container-md">
      <div class="header-logo">
        <img alt="logo" src="~@/assets/logo.svg" />
      </div>

      <div class="header-right flex-ec">
        <ul class="nav-list flex-ec">
          <li class="item" v-for="(item, index) in navList" :key="index">
            <a :href="item.url" target="__blank" class="link flex-c">{{item.name}}</a>
          </li>
        </ul>
        <el-button @click="openUrl(appUrl)">Enter App</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header-box {
  width: 100%;
  height: size(70);
  background: rgba(0,0,0,.1);
  .header-content {
    height: 100%;
    margin: 0 auto;
    .header-logo {
      height: 100%;
      padding: size(10) 0;
    }
    .header-right {
      height: 100%;
      .nav-list {
        height: 100%;
        .item {
          height: 100%;
          padding: 0 size(20);
          .link {
            color: #333;
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
  methods: {
    openUrl (url) {
      window.open(url)
    }
  }
}
</script>