<template>
  <div class="index-box">
    <!-- <Banner /> -->
    <div class="carousel-box">
      <div class="carousel-box-content">
        <div class="container-md carousel-bg">
          <el-carousel indicator-position="none" arrow="never" class="carousel-content">
            <el-carousel-item v-for="(item, index) in bannerList" :key="index" class="flex-c">

              <div class="content" v-if="item.type === 'content'">
                <div class="carousel-col"></div>
                <div class="carousel-info">
                  <h3 v-html="item.title"></h3>
                  <p class="p1">{{ item.content }}</p>
                  <!-- <p class="p2" v-html="item.content1"></p> -->
                  <div class="carousel-btn flex-sc">
                    <el-button @click="openUrl($$.explorerUrl)" class="btn-radius10 IH35 font16 plr15 pt-0 pb-0 btn-default">Explorer</el-button>
                    <el-button type="primary" @click="openUrl($$.enterApp)" class="btn-radius10 IH35 font16 plr15 pt-0 pb-0 btn-info ml-20">Enter App</el-button>
                  </div>
                </div>
              </div>
              <div class="content" v-else-if="item.type === 'image'">
                <a :href="item.url"><img :src="item.image" /></a>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="bridgeData-box">
          <div class="container-md">
            <div class="bridgeData-list">
              <el-row :gutter="10" class="">
                <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="(item, index) in bridgeData" :key="index">
                  <div class="item cursorP" @click="openUrl($$.explorerUrl + '/#/dashboard')">
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



    <div class="fee-box">
      <el-carousel  arrow="always" class="fee-content" autoplay :interval="5000">
        <el-carousel-item v-for="(item, index) in feeList" :key="index" class="flex-c">
          <div :style="'background: ' + (isDark ? '#394358' : item.bgColor)" class="fee-list flex-c ">
            <div class="flex-bc fee-item container-md">
              <div class="image"><img :src="item.left" /></div>
              <div class="image"><img :src="item.right" /></div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="mul-banner-box anycall flex-c">
      <div class="container-md">
        <div class="banner-anycall">
          <a href="https://anycall.multichain.org/" class="flex-bc img-box" target="__blank">
            <img src="~@/assets/img/banner/anycall-left.png" class="img1" />
            <img src="~@/assets/img/banner/anycall-right.png" class="img2" />
          </a>
        </div>
      </div>
    </div>

    <div class="mul-banner-box fastmpc flex-c">
      <div class="container-md">
        <div class="banner-anycall">
          <a href="https://multichainorg.medium.com/fastmpc-mainnet-goes-live-running-in-a-decentralized-way-99f9fe2956b8" class="flex-bc img-box" target="__blank">
            <img src="~@/assets/img/banner/fastmpc-left.png" class="img1" />
            <img src="~@/assets/img/banner/fastmpc-right.png" class="img2" />
          </a>
        </div>
      </div>
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
        <el-button @click="openUrl($$.docUrl)" class="btn-more flex-c">
        <!-- <el-button  class="btn-more flex-c"> -->
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
                  <!-- <img :src="item.logoUrl" :alt="item.name" v-if="item.logoUrl">
                  <img :src="require(`../../assets/img/${item.symbol}.png`)" :alt="item.name" v-else> -->
                  <Logo :logoName="item.name" :logoUrl="item.logoUrl"/>
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
                Integrations<br />{{supportTokenNum}}+ Projects<br />& {{chainInfo.length}} Chains
              </div>
              <div class="steps-box">
                
                <div class="step">
                  <i class="icon el-icon-success"></i>
                  <p>Multichain tokens</p>
                  <div class="line"></div>
                </div>
                <div class="step">
                  <i class="icon el-icon-success"></i>
                  <p>Free listing</p>
                  <div class="line"></div>
                </div>
                <div class="step">
                  <i class="icon el-icon-success"></i>
                  <p>Easy integration</p>
                  <div class="line"></div>
                </div>
                <div class="step">
                  <i class="icon el-icon-success"></i>
                  <p>Quick deployment</p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
            <div class="leagueData-content">
              <div class="leagueData-title">
                <h3>Cross-Chain Ecosystem</h3>
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
                  <!-- <img :src="item.logoUrl" :alt="item.name"> -->
                  <Logo :logoName="item.symbol" :logoUrl="item.logoUrl"/>
                </div>
                <p class="p" :title="item.name">{{item.symbol}}</p>
              </div>
            </li>
          </el-col>
        </el-row>
      </ul>
      <div class="token-More">
        See all <span class="span cursorP" @click="openUrl($$.explorerUrl + '/#/tokens')">here</span>.
      </div>
      <div class="learn-more-btn">
        <el-button @click="openUrl('https://dard6erxu8t.typeform.com/to/C7RwF08A')" class="btn-more flex-c">
        <!-- <el-button class="btn-more flex-c"> -->
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
import Logo from '@c/Logo/index.vue'
export default {
  name: 'Home',
  components: {HeaderWrapper, FooterWrapper, Logo},
  data () {
    return {
      bannerList: [
        {
          type: 'content',
          title: 'Cross-Chain<br /><span class="bold">Router</span> Protocol',
          content: 'The Ultimate Router for Web3.0',
          content1: 'An infrastructure developed for arbitrary<br />cross-chain interactions.',
        },
        // {
        //   type: 'image',
        //   image: require('../../assets/img/banner/Anycall.png'),
        //   url: 'https://moralis.io/google-hackathon/'
        // },
        // {
        //   type: 'image',
        //   image: require('../../assets/img/banner/fastmpc.png'),
        //   url: 'https://multichainorg.medium.com/fastmpc-mainnet-goes-live-running-in-a-decentralized-way-99f9fe2956b8'
        // }
      ],
      supportLeague: [
        {logoUrl: require('../../assets/img/mim.svg'), name: 'ABRACADABRA.MONEY', url: 'https://abracadabra.money/bridge'},
        // {logoUrl: require('../../assets/img/MUL.png'), name: 'Multichain.xyz', url: 'https://multichain.xyz/'},
        {logoUrl: 'https://i.esdrop.com/d/f/SzUwPFr0Tc/OcK2SYI4qh.svg', name: 'Rango', url: 'https://app.rango.exchange/swap/BSC.BNB/AVAX_CCHAIN.AVAX/'},
        // {logoUrl: require('../../assets/img/NRV.svg'), name: 'Nerve.fi', url: 'https://app.nerve.fi/bridge'},
        {logoUrl: require('../../assets/img/Spookyswap.png'), name: 'Spookyswap', url: 'https://spookyswap.finance/bridge'},
        {logoUrl: require('../../assets/img/spiritswap_logo.png'), name: 'Spiritswap', url: 'https://swap.spiritswap.finance/#/bridge'},
        {logoUrl: require('../../assets/img/Solarbeam.png'), name: 'Solarbeam', url: 'https://solarbeam.io/bridge'},
        {logoUrl: require('../../assets/img/TPT.jpg'), name: 'Tokenpocket', url: 'https://tokenpocket.pro'},
        {logoUrl: require('../../assets/img/XY.svg'), name: 'XY.FINANCE', url: 'https://xy.finance'},
        {logoUrl: require('../../assets/img/dopamineapp.svg'), name: 'Dopamineapp', url: 'https://dopamineapp.com'},
        {logoUrl: require('../../assets/img/LIFI.png'), name: 'LI.FI', url: 'https://li.fi'},
        {logoUrl: require('../../assets/img/Socket.svg'), name: 'Socket', url: 'https://socket.tech/'},
      ],
      mulIntroduce: [
        {icon: require('../../assets/img/Lock_icon.svg'), title: 'Non-custodial + MPC', content: 'MPC, the powerful symbol of decentralization, processes Multichain cross-chain bridging and smart contract methods on other chains.'},
        {icon: require('../../assets/img/Swap_icon.svg'), title: 'No-slippage Bridge', content: "Multichain’s 1:1 bridge enables users to perform 0 slippage transfers and eliminate the hidden cost associated with AMM."},
        {icon: require('../../assets/img/multichain_icon.svg'), title: 'Multichain Router', content: 'Multichain Router allows users to swap between any two chains freely. It reduces fees and makes it easier to move between chains.'},
      ],
      supportToken: [],
      supportTokenNum: 0,
      feeList: [
        {name: '', bgColor: 'linear-gradient(to right, #56008f, #2a25c9 , #30adff)', left: require('../../assets/img/feebanner/fee1-left.png'), right: require('../../assets/img/feebanner/fee1-right.png')},
        {name: '', bgColor: 'linear-gradient(to right, #2b0058, #2a25c9 , #30adff)', left: require('../../assets/img/feebanner/fee2-left.png'), right: require('../../assets/img/feebanner/fee2-right.png')},
      ]
    }
  },
  computed: {
    isDark () {
      return this.$store.state.isDark
    },
    chainInfo () {
      // console.log(this.$store.state.bridgeData.chainlist.data)
      const arr = []
      if (this.$store.state.bridgeData) {
        const list = this.$store.state.bridgeData.chainlist.data
        for (const obj in list) {
          if (list[obj].networkType === "TESTNET") continue
          arr.push(list[obj])
        }
      }
      arr.sort(this.$$.smallToBigSort(['name']))
      
      return arr
      // return this.$store.state.bridgeData ? this.$store.state.bridgeData.chainlist.data.sort(this.$$.bigToSmallSort(['name'])) : {}
    },
    tokenInfo () {
      return this.$store.state.bridgeData ? this.$store.state.bridgeData.tokenlist.data.bridgeList : []
    },
    bridgeData () {
      if (this.$store.state.bridgeData) {
        const v2 = this.$store.state.bridgeData.stats
        const v3 = this.$store.state.bridgeData.stable
        // const chainlist = this.chainInfo
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
        this.supportTokenNum = tokenCont
        return [
          {name: 'Total Volume', count: '$' + this.$$.toMillion(v2AllVol + v3AllVol, 2), bg: 'blue', dec: 0},
          {name: 'Total TVL', count: '$' + this.$$.toMillion(tokenlist.data.totalAmount, 2), bg: 'orange', dec: 0},
          // {name: '24h Fees(USD)', count: v2h24Fee + v3h24Fee, bg: 'cyan', dec: 2, fontSize: '36px'},
          // {name: '24h Volume(USD)', count: v2h24Vol + v3h24Vol, bg: 'red', dec: 2, fontSize: '28px'},
          {name: 'Tokens', count: this.$$.thousandBit(tokenCont, 'no'), bg: 'red', dec: 2, fontSize: '28px'},
          {name: 'Chains', count: this.$$.thousandBit(this.chainInfo.length, 'no'), bg: 'red', dec: 2, fontSize: '28px'},
        ]
      }
      return []
    }
  },
  watch: {
    tokenInfo () {
      this.initToken()
    },
    isDark (cur,old) {
      console.log(cur, old)
    }
  },
  mounted () {
    console.log(this.$$)
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
          if (
            !arr.includes(obj.symbol)
            && arr.length < 24
            && obj.tvl
            && obj.symbol.indexOf('any') !== 0
          ) {
            arr.push(obj.symbol)
            arr1.push(obj)
          } else if (arr.length > 24) {
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