<template>
  <div class="swap-content-bg">
    <div class="container-md">
      <div class="swap-top flex-ec">
        <div v-if="chainId && account && supportChain.includes(chainId)" class="pub-style account-view" :title="account">
          {{account.slice(0, 6) + '...' + account.slice(account.length - 5, account.length)}}
        </div>
        <div v-else-if="chainId && !supportChain.includes(chainId)" class="pub-style network-error" @click="msgWarning('Please connect to Ethereum Mainnet!')">
          Network Error
        </div>
        <div v-else class="pub-style swap-connect" @click="getMetamaskAccount()">
          Connect Wallet
        </div>
      </div>
      <div class="swap-content">
        <h3 class="h3 mb-20">Swap ANY</h3>

        <div class="swap-input">
          <div class="swap-input-label flex-bc">
            <h5>Balance:</h5>
          </div>
          <div class="swap-input-num">
            <el-input />
          </div>
        </div>
        <div class="swap-line flex-c">
          <i class="el-icon-bottom"></i>
        </div>
        <div class="swap-input">
          <div class="swap-input-label flex-bc">
            <h5>Balance:</h5>
          </div>
          <div class="swap-input-num">
            <el-input disabled />
          </div>
        </div>

        <div class="flex-c mt-20">
          <el-button type="primary">Swap</el-button>
        </div>
      </div>

    </div>
  </div>  
</template>

<style lang="scss">
.swap-content-bg {
  width: 100%;
  height: 100%;
  min-width:100%;
  min-height: 100%;
  min-width: 100vw;
  min-height:100vh;
  background: linear-gradient(to right, #734ce2 , #606bfb);
  padding: size($headerH) 0 0 0;
  .swap-top {
    width: 100%;
    padding: size(10) 0;
    .pub-style {
      padding: size(8) size(12);
      border-radius: size(8);
      font-size: size(16);
      cursor: pointer;
    }
    .account-view {
      background: rgba(255,255,255,.5);
    }
    .network-error {
      background: #FF6871;
      color: #fff;
    }
    .swap-connect {
      background: rgba(255,255,255,.5);
    }
  }
  .swap-content {
    background: rgba(255,255,255,.5);
    padding: size(20);
    width: 100%;
    max-width: size(600);
    margin: size(30) auto;
    border-radius: size(20);
    .h3 {
      font-size: size(24);
      font-weight: bold;
      text-align: center;
      color: #fff;
    }
    .swap-input {
      background: rgba(255,255,255,1);
      width: 100%;
      padding: size(20);
      border-radius: size(10);
      box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.3);
      .swap-input-label {
        width: 100%;
        margin-bottom: size(10);
      }
      .swap-input-num {
        width: 100%;
        .el-input {
          background: none;
          .el-input__inner {
            // box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.3);
            background: none;
            // border: 1px solid #ddd;
            height: size(50);
            border-radius: size(10);
          }
        }
      }
    }
    .swap-line {
      background: rgba(255,255,255,.6);
      width: 80%;
      height: size(50);
      margin: auto;
    }
  }
}
</style>

<script>
import {mmWeb3} from '@/libs/metamask.js'

const Web3 = require('web3')
const web3 = new Web3()

const supportChain = ['1', 1, '0x1']
const srcToekn = '0xea88171509a8772cc39f7f36f34a7b7d9985d101'
const destToken = '0xd8ac5e2990b1cbf062ea2145807f530b76e91f98'
export default {
  name: 'Swap',
  data () {
    return {
      account: '',
      chainId: '',
      supportChain: supportChain,
      swapToken: '0xba484d2c9ca181de85228ff6bf75709fcf5664e7'
    }
  },

  mounted () {
    console.log(web3)
    this.getMetamaskAccount()
    mmWeb3.on('accountsChanged', accounts => {
      console.log(accounts[0])
      this.chainId = mmWeb3.chainId
      if (supportChain.includes(this.chainId)) {
        this.account = accounts[0]
      }
    })
    mmWeb3.on('networkChanged', network => {
      console.log(network)
      if (!isNaN(network) || supportChain.includes(network)) {
        this.chainId = network
      }
    })
  },
  methods: {
    init () {
      if (mmWeb3) {
        mmWeb3.then(res => {
          console.log(res)
        })
      }
    },
    getData () {
      if (mmWeb3) {
        // mmWeb3.request({
        //   method: 'eth_sendTransaction',
        //   params,
        // })
      }
    },
    getMetamaskAccount (type) {
      if (mmWeb3) {
        mmWeb3.enable().then(res => {
          console.log(res)
          console.log(mmWeb3.chainId)
          this.chainId = mmWeb3.chainId
          if (supportChain.includes(mmWeb3.chainId)) {
            this.account = res[0]
          } else {
            this.account = ''
          }
        }).catch(err => {
          this.account = ''
          this.chainId = ''
        })
      } else {
        this.account = ''
        this.chainId = ''
      }
    },

  }
}
</script>