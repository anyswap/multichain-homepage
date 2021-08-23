<template>
  <div class="index-box">
    <Banner />
    <div class="bridgeData-box">
      <div class="bridgeData-list container-md">
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

    <div class="chainData-box">
      <div class="chainData-title container-md">
        <h3>Supported Chains</h3>
      </div>
      <ul class="chainData-list container-md flex-sc">
        <li v-for="(item, index) in chainInfo" :key="index" class="item">
          <img :src="item.logoUrl" alt="item.name">
        </li>
      </ul>
    </div>

    <div class="tokenData-box">
      <div class="tokenData-title container-md">
        <h3>Supported tokens</h3>
      </div>
      <div class="tokenData-list container-md flex-sc">
        <li v-for="(item, index) in supportToken" :key="index" class="item">
          <img :src="item.logoUrl" alt="item.name">
        </li>
      </div>
    </div>

    <div class="leagueData-box">
      <div class="leagueData-title container-md">
        <h3>Cross-chain Allinces</h3>
      </div>
      <div class="leagueData-list container-md">
        <el-row :gutter="10" class="">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6" v-for="(item, index) in supportLeague" :key="index">
            <a class="item" :href="item.url" target="__blank">
              <img :src="item.logoUrl" :alt="item.name" >
              <h3>
                {{item.name}}
              </h3>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.index-box {
  width: 100%;
  height: 100%;
  .bridgeData-box {
    padding: size(30) 0;
    background: rgb(21, 26, 47);
    .bridgeData-title {
      width: 100%;
      text-align: center;
      font-size: size(30);
      font-weight: bold;
      margin-bottom: size(30);
      color: #fff;
    }
    .bridgeData-list {
      color: #fff;
      .item {
        padding: size(20) size(15);
        h3 {
          font-size: size(14);
          line-height: size(45);
          text-align: center;
        }
        p {
          font-size: size(30);
          line-height: size(21);
          text-align: center;
        }
      }
    }
  }
  .chainData-box {
    padding: size(30) 0;
    .chainData-title {
      width: 100%;
      text-align: left;
      font-size: size(30);
      font-weight: bold;
      margin-bottom: size(30);
    }
    .chainData-list {
      color: #fff;
      flex-wrap: wrap;
      .item {
        width: size(80);
        height: size(80);
        padding: size(20);
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
  .tokenData-box {
    padding: size(30) 0;
    .tokenData-title {
      width: 100%;
      text-align: left;
      font-size: size(30);
      font-weight: bold;
      margin-bottom: size(30);
    }
    .tokenData-list {
      color: #fff;
      flex-wrap: wrap;
      .item {
        width: size(80);
        height: size(80);
        padding: size(20);
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
  .leagueData-box {
    padding: size(30) 0;
    .leagueData-title {
      width: 100%;
      text-align: left;
      font-size: size(30);
      font-weight: bold;
      margin-bottom: size(30);
    }
    .leagueData-list {
      color: #fff;
      .item {
        padding: size(20) size(15);
        text-align: center;
        display: block;
        h3 {
          font-size: size(30);
          line-height: size(45);
          color: #333;
        }
        img {
          width: size(50);
          display: inline-block;
        }
      }
    }
  }
}
</style>

<script>
import Banner from '@v/Home/banner.vue'
export default {
  name: 'Home',
  components: {Banner},
  data () {
    return {
      supportLeague: [
        {logoUrl: require('../../assets/img/MUL.png'), name: 'Multichain.xyz', url: 'https://multichain.xyz/'},
        {logoUrl: require('../../assets/img/NRV.svg'), name: 'Nerve.fi', url: 'https://app.nerve.fi/bridge'},
        {logoUrl: require('../../assets/img/Spookyswap.png'), name: 'Spookyswap', url: 'https://spookyswap.finance/bridge'},
        {logoUrl: require('../../assets/img/chainswap.png'), name: 'Chainswap', url: 'https://chainswap.com/'},
      ],
      supportToken: [],
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