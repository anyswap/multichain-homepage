<template>
  <!-- <div class="header-box">
  </div> -->
  <div class="header-box">
    <div class="container-md HH100 flex-bc">
      <div class="header-nav flex-sc">
        <div class="logo cursorP" @click="toUrl('/')">
          <img src="~@/assets/logo-white.png" v-if="isDark" class="hidden-sm-and-down" />
          <img src="~@/assets/logo-white.png" v-else  class="hidden-sm-and-down"/>
          <img src="~@/assets/logo-small.png"  class="hidden-sm-and-up"/>
        </div>

      </div>
      <div class="header-right flex-ec">
        <el-menu :default-active="activeIndex" class="nav-box hidden-sm-and-down" mode="horizontal" @select="handleSelect">
          <!-- <el-menu-item index="route">Swap</el-menu-item> -->
          <el-menu-item :index="index.toString()" v-for="(item, index) in navList" :key="index">{{item.name}}</el-menu-item>
        </el-menu>
        
        <div class="is-dark" @click="changeTheme">
          <img src="~@/assets/img/day.png" v-if="isDark"/>
          <img src="~@/assets/img/night.png" v-else/>
        </div>
        <el-button @click="openUrl(appUrl)" type="primary" class="btn-radius10 IH35 font16 plr15 pt-0 pb-0 btn-default">Enter App</el-button>
        <div class="nav-menu flex-c hidden-md-and-up">
          <!-- <i class="el-icon-s-operation"></i> -->
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link flex-c">
              <i class="line"></i>
              <i class="line"></i>
              <i class="line"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="nav-list">
              <el-dropdown-item v-for="(item, index) in navList" :key="index" :command="index">{{item.name}}</el-dropdown-item>
              <!-- <el-dropdown-item command="en-US">English</el-dropdown-item>
              <el-dropdown-item command="zh-CN">中文</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>


  </div>
</template>

<style lang="scss">
$navWH: 32;
.header-box {
  width:100%;
  height: size($headerH);
  .logo {
    height: 100%;
    padding: size(10) 0;
    img {
      height: 100%;
      display: block;;
    }
  }
  .header-nav {
    height: 100%;
    .el-menu {
      height: size($headerH); background: none;border-bottom:none;margin: 0 size(20);
      .el-menu-item, .el-submenu, .el-submenu__title {
        height: size($headerH); background: none;line-height: size($headerH); border-bottom: solid 1px transparent;@include fc('fc2');
      }
      .el-menu-item {
        &:hover, &:focus {
          background: rgba(0,0,0,.1);
        }
      }
      .is-active {
        border-bottom: 1px solid #1989fa;
      }
    }
  }
  .header-right {
    .is-dark {
      width: size(36);
      height: size(36);
      padding:size(8);
      border-radius:100%;
      margin-right: size(10);
      img {
        height: 100%; display: block;
      }
    }
  }
}
.nav-box {
  width: 100%;overflow: hidden;
  &.el-menu.el-menu--horizontal {border-bottom: none;}
  &.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: none!important;
  }
  &.el-menu {
    height: size($headerH);
    background: none;
    border-bottom:none;
    @extend .flex-bc;
    .el-menu-item, .el-submenu, .el-submenu__title {
      height: size($headerH); background: none;line-height: size($headerH); border-bottom: solid 1px transparent;color: #fff;
    }
    .el-menu-item {
      font-size: size(14);
      font-family: 'Manrope-ExtraBold';
      &:hover {
        border-bottom: 1px solid transparent!important;
        background:  rgba(0,0,0,.1)!important;
        color: #fff!important;
      }
      &:focus {
        border-bottom: 1px solid transparent!important;
        background: none!important;
        color: #fff!important;
      }
      &.is-active {
        border-bottom: none!important;
        // background: $mainColor!important;
        color: #fff!important;
      }
    }
  }
}
.nav-menu {
  width: size($navWH);
  height: size($navWH);
  margin-left:size(10);
  .el-dropdown {
    width: 100%;height: 100%;
    .el-dropdown-link {
      width: size($navWH);height: size($navWH);border: 1px solid #fff;border-radius: size(4);padding: size(5) size(5);flex-wrap: wrap;cursor:pointer;
      .line {
        width: 100%;
        height: size(2);
        background: #fff;
        display: block;
        margin: size(1) 0;
      }
    }
  }
}
</style>

<script>
// import {routes} from '@/router/index.js'
export default {
  name: 'Headers',
  data () {
    return {
      activeIndex: '0',
      navList: [
        {name: 'Home', url: '/', type: 'link'},
        {name: 'MULTI', url: '/swap', type: 'link'},
        {name: 'Explorer', url: 'https://anyswap.net/', type: 'outlink'},
        {name: 'Doc', url: 'https://docs.anyswap.exchange/docs/', type: 'outlink'},
        {name: 'Github', url: 'https://docs.anyswap.exchange/docs/', type: 'outlink'},
      ],
      appUrl: 'https://deploy.anyswap.exchange/#/swap',
      langProp: ''
    }
  },
  components: {},
  computed: {
    isDark () {
      return Number(this.$store.state.isDark)
    },
    account () {
      return this.$store.state.account
    }
  },
  watch: {
    account () {
      this.changeNavList()
    }
  },
  mounted () {
    // console.log(this.$router)
    // console.log(routes)
    this.changeNavList()
  },
  methods: {
    changeNavList () {
      // let arr = routes
      // this.navList = []
      // for (let obj of arr) {
      //   if (!this.account && obj.children[0].meta.isLogin) continue
      //   if (obj.children[0].meta.isViewNav) continue
      //   if (obj.children[0].meta.isAdmin && this.account.toLowerCase() !== this.$$.admin) continue
      //   this.navList.push({name: this.$t('nav')[obj.children[0].meta.label], path: obj.path})
      // }
      // this.changeNav(this.$route.path)
    },
    changeTheme () {
      let flag = this.isDark ? 0 : 1
      this.$store.commit('setIsDark', flag)
    },
    changeNav (path) {
      let arr = routes
      // console.log(path)
      for (let i = 0,len = this.navList.length; i < len; i++) {
        if (this.navList[i].path === path) {
          this.activeIndex = i.toString()
          break
        }
        if (path.indexOf(this.navList[i].path) !== -1 && this.navList[i].path !== '/') {
          this.activeIndex = i.toString()
          break
        }
      }
    },
    handleSelect (index) {
      if (this.navList[index].type === 'link') {
        this.$router.push({path: this.navList[index].url})
      } else {
        window.open(this.navList[index].url)
      }
    },
    handleCommand(command) {
      console.log(command)
      if (command === 'en-US' || command === 'zh-CN') {
        this.langProp = command
      } else {
        this.handleSelect(command)
      }
    }
  }
}
</script>