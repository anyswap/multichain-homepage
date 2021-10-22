<template>
  <div class="index-box">
    <!-- <Banner /> -->
    <div class="carousel-box">
      <div class="carousel-box-content">
        <div class="container-md carousel-bg">
          <el-carousel indicator-position="none" arrow="never" class="carousel-content">
            <el-carousel-item v-for="(item, index) in bannerList" :key="index" class=" flex-c">
              <div class="content">
                <div class="carousel-col"></div>
                <div class="carousel-info">
                  <h3 v-html="item.title"></h3>
                  <p class="p1">{{ item.content }}</p>
                  <p class="p2" v-html="item.content1"></p>
                  <div class="carousel-btn flex-sc">
                    <el-button @click="openUrl('https://anyswap.net/')" class="btn-radius10 IH35 font16 plr15 pt-0 pb-0 btn-default">Explorer</el-button>
                    <el-button type="primary" @click="methods('https://stable.anyswap.exchange/')" class="btn-radius10 IH35 font16 plr15 pt-0 pb-0 btn-info ml-20">Enter App</el-button>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="bridgeData-box">
          <div class="container-md">
            <div class="bridgeData-list">
              <el-row :gutter="10" class="">
                <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="(item, index) in bridgeData" :key="index">
                  <div class="item">
                    <h3>
                      {{item.name}}
                    </h3>
                    <p>
                      {{item.count}}
                    </p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <HeaderWrapper class="carousel-header-box"/>
    </div>

    <div class="mul-introduce-box">
      <div class="mul-introduce-title container-md">
        <h3>Why Multichain</h3>
      </div>
      <ul class="mul-introduce-list container-md flex-sc">
        <el-row :gutter="60" class="">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-for="(item, index) in mulIntroduce" :key="index">
            <li class="item flex-c">
              <div class="content">
                <div class="pic">
                  <img :src="item.icon" :alt="item.title">
                </div>
                <h3 class="h3">{{item.title}}</h3>
                <p class="p">{{item.content}}</p>
              </div>
            </li>
          </el-col>
        </el-row>
      </ul>
      <div class="learn-more-btn">
        <!-- <el-button @click="openUrl('https://anyswap.net/')" class="btn-more flex-c"> -->
        <el-button class="btn-more flex-c">
          Learn More
          <div class="icon">
            <img src="~@/assets/img/arrow_icon.png" />
          </div>
        </el-button>
      </div>
    </div>

    <div class="chainData-box">
      <div class="chainData-title container-md">
        <h3>Supported Chains</h3>
      </div>
      <ul class="chainData-list container-md flex-sc">
        <el-row :gutter="10" class="">
          <el-col :xs="6" :sm="6" :md="3" :lg="2" :xl="2" v-for="(item, index) in chainInfo" :key="index">
            <li class="item flex-c">
              <div class="content">
                <div class="pic">
                  <img :src="item.logoUrl" :alt="item.name">
                </div>
                <p class="p">{{item.name}}</p>
              </div>
            </li>
          </el-col>
        </el-row>
      </ul>
    </div>

    
    <div class="leagueData-box">
      <div class="container-md">
        <el-row :gutter="10" class="">
          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
            <div class="leagueData-content">
              <div class="intro">
                Developed<br />{{supportTokenNum}}+ Projects<br />& {{supportChainNum}} Chains
              </div>
              <div class="steps-box">
                <div class="step">
                  <i class="icon el-icon-success"></i>
                  <p>Fastest transaction speed</p>
                  <div class="line"></div>
                </div>
                <div class="step">
                  <i class="icon el-icon-success"></i>
                  <p>Free deposit</p>
                  <div class="line"></div>
                </div>
                <div class="step">
                  <i class="icon el-icon-success"></i>
                  <p>Free listing</p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
            <div class="leagueData-content pl-30">
              <div class="leagueData-title">
                <h3>Cross-chain Allinces</h3>
              </div>
              <div class="leagueData-list">
                <el-row :gutter="10" class="">
                  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" v-for="(item, index) in supportLeague" :key="index">
                    <a class="item" :href="item.url" target="__blank">
                      <div class="content">
                        <div class="pic">
                          <img :src="item.logoUrl" :alt="item.name">
                        </div>
                        <h3 class="p">
                          {{item.name}}
                        </h3>
                      </div>
                    </a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="tokenData-box">
      <div class="tokenData-title container-md">
        <h3>{{supportTokenNum}}+ Supported tokens</h3>
      </div>
      <ul class="tokenData-list container-md flex-sc">
        <el-row :gutter="10" class="">
          <el-col :xs="6" :sm="6" :md="3" :lg="3" :xl="3" v-for="(item, index) in supportToken" :key="index">
            <li class="item flex-c">
            <!-- <li v-for="(item, index) in supportToken" :key="index" class="item flex-c"> -->
              <div class="content">
                <div class="pic">
                  <img :src="item.logoUrl" :alt="item.name">
                </div>
                <p class="p">{{item.name}}</p>
              </div>
            </li>
          </el-col>
        </el-row>
      </ul>
      <div class="learn-more-btn">
        <!-- <el-button @click="openUrl('https://anyswap.net/')" class="btn-more flex-c"> -->
        <el-button class="btn-more flex-c">
          Free Listing
          <div class="icon">
            <img src="~@/assets/img/arrow_icon.png" />
          </div>
        </el-button>
      </div>
    </div>
    <FooterWrapper />
  </div>
</template>

<style lang="scss">
@import './scss.scss';
</style>

<script>
// import Banner from '@v/Home/banner.vue'
import HeaderWrapper from '@c/Public/header.vue'
import FooterWrapper from '@c/Public/footer.vue'
export default {
  name: 'Home',
  components: {HeaderWrapper, FooterWrapper},
  data () {
    return {
      bannerList: [
        {
          title: 'MultiChain<br />MPC Protocol',
          content: 'The Ultimate Router for Web3.',
          content1: 'An infrastructure developed for arbitrary<br />cross-chain interactions.',
        }
      ],
      supportLeague: [
        {logoUrl: require('../../assets/img/MUL.png'), name: 'Multichain.xyz', url: 'https://multichain.xyz/'},
        {logoUrl: require('../../assets/img/NRV.svg'), name: 'Nerve.fi', url: 'https://app.nerve.fi/bridge'},
        {logoUrl: require('../../assets/img/Spookyswap.png'), name: 'Spookyswap', url: 'https://spookyswap.finance/bridge'},
        {logoUrl: require('../../assets/img/chainswap.png'), name: 'Chainswap', url: 'https://chainswap.com/'},
      ],
      mulIntroduce: [
        {icon: require('../../assets/img/Lock_icon.png'), title: 'Non-custodial + MPC', content: 'MPC, the powerful symbol of decentralization, processes Multichain cross-chain bridging and smart contract methods on other chains.'},
        {icon: require('../../assets/img/Swap_icon.png'), title: 'Native Swap', content: 'Makes it less complicated to cross-chain swap between native tokens for higher liquidity assets. This can be done without wrapped tokens.'},
        {icon: require('../../assets/img/multichain_icon.png'), title: 'Multichain Router', content: 'Allows users to swap between two chains arbitrarily, which reduces fees and makes it easier to move between chains.'},
      ],
      supportToken: [],
      supportTokenNum: 0,
      supportChainNum: 0,
    }
  },
  computed: {
    chainInfo () {
      return this.$store.state.bridgeData ? this.$store.state.bridgeData.chainlist.data : {}
    },
    tokenInfo () {
      return this.$store.state.bridgeData ? this.$store.state.bridgeData.tokenlist.data.bridgeList : []
    },
    bridgeData () {
      if (this.$store.state.bridgeData) {
        const v2 = this.$store.state.bridgeData.stats
        const v3 = this.$store.state.bridgeData.stable
        const chainlist = this.$store.state.bridgeData.chainlist
        const tokenlist = this.$store.state.bridgeData.tokenlist
        let v2h24Txns = 0
        let v2h24Users = 0
        let v2h24Fee = 0
        let v2h24Vol = 0
        let v2AllVol = 0
  
        let v3h24Txns = 0
        let v3h24Users = 0
        let v3h24Fee = 0
        let v3h24Vol = 0
        let v3AllVol = 0

        let tokenCont = 0
        let chainCont = 0
  
        if (v2.status === 200) {
          v2h24Txns = Number(v2.data.h24txns)
          v2h24Users = Number(v2.data.h24users)
          v2h24Fee = Number(v2.data.h24fee)
          v2h24Vol = Number(v2.data.h24volume)
          v2AllVol = Number(v2.data.allvolume)
        }
        if (v3.status === 200) {
          v3h24Txns = Number(v3.data.h24txns)
          v3h24Users = Number(v3.data.h24users)
          v3h24Fee = Number(v3.data.h24fee)
          v3h24Vol = Number(v3.data.h24volume)
          v3AllVol = Number(v3.data.allvolume)
        }
        if (tokenlist.status === 200) {
          tokenCont = Number(tokenlist.data.bridgeNum)
        }
        if (chainlist.status === 200) {
          chainCont = Object.keys(chainlist.data).length
        }
        this.supportTokenNum = tokenCont
        this.supportChainNum = chainCont
        return [
          {name: 'Total Volume', count: this.$$.toMillion(v2AllVol + v3AllVol, 2), bg: 'blue', dec: 0},
          {name: 'Total TVL', count: this.$$.toMillion(tokenlist.data.totalAmount, 2), bg: 'orange', dec: 0},
          // {name: '24h Fees(USD)', count: v2h24Fee + v3h24Fee, bg: 'cyan', dec: 2, fontSize: '36px'},
          // {name: '24h Volume(USD)', count: v2h24Vol + v3h24Vol, bg: 'red', dec: 2, fontSize: '28px'},
          {name: 'Tokens', count: tokenCont, bg: 'red', dec: 2, fontSize: '28px'},
          {name: 'Chains', count: chainCont, bg: 'red', dec: 2, fontSize: '28px'},
        ]
      }
      return []
    }
  },
  watch: {
    tokenInfo () {
      this.initToken()
    }
  },
  mounted () {
    this.initToken()
  },
  methods: {
    openUrl (url) {
      window.open(url)
    },
    initToken () {
      if (this.tokenInfo && this.tokenInfo.length > 0) {
        // this.tokenInfo.sort(this.$$.bigToSmallSort('tvl'))
        let initArr = [...this.tokenInfo]
        initArr.sort(this.$$.bigToSmallSort(['tvl']))
        // console.log(initArr)
        const arr = []
        const arr1 = []
        for (const obj of initArr) {
          // console.log(obj.tvl)
          if (!arr.includes(obj.symbol) && arr.length < 20 && obj.tvl) {
            arr.push(obj.symbol)
            arr1.push(obj)
          } else if (arr.length > 20) {
            break
          }
        }
        this.supportToken = arr1
        // console.log(arr)
      }
    }
  }
}
</script>