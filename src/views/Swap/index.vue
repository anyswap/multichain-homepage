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
            <h5>Balance:{{$$.fromWei(srcBalance, 18)}}</h5>
          </div>
          <div class="swap-input-num">
            <el-input v-model="inputVal" />
          </div>
        </div>
        <div class="swap-line flex-c">
          <i class="el-icon-bottom"></i>
        </div>
        <div class="swap-input">
          <div class="swap-input-label flex-bc">
            <h5>Balance:{{$$.fromWei(destBalance, 18)}}</h5>
          </div>
          <div class="swap-input-num">
            <el-input v-model="outputVal" disabled />
          </div>
        </div>

        <div class="flex-c mt-20">
          <el-button type="primary" @click="approval()" v-if="!allowance">Approval</el-button>
          <el-button type="primary" @click="swap()" v-else>Swap</el-button>
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
    margin: auto;
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
import { ethers } from 'ethers'
import {mmWeb3, getMMBaseInfo, getContract} from '@/libs/metamask.js'
import erc20 from '@/config/ABI/erc20.json'
import swap from '@/config/ABI/swapToken.json'

const _userTokenBalance = ethers.constants.MaxUint256.toString()

const supportChain = ['4', 4, '0x4']
// const supportChain = ['1', 1, '0x1']
const srcToekn = '0xea88171509a8772cc39f7f36f34a7b7d9985d101'
const destToken = '0xd8ac5e2990b1cbf062ea2145807f530b76e91f98'
const swapToken = '0xba484d2c9ca181de85228ff6bf75709fcf5664e7'


const srcContract = getContract(erc20, srcToekn)
const destContract = getContract(erc20, destToken)
const swapContract = getContract(swap, swapToken)
const dec = 18
// const srcToekn = '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa'
// const destToken = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
export default {
  name: 'Swap',
  data () {
    return {
      account: '',
      chainId: '',
      supportChain: supportChain,
      srcBalance: '',
      destBalance: '',
      allowance: '',
      inputVal: '',
      // outputVal: ''
    }
  },
  computed: {
    outputVal () {
      if (isNaN(this.inputVal)) {
        return ''
      } else {
        return this.inputVal * 100
      }
    }
  },
  watch: {
    account () {
      this.getData()
    }
  },
  mounted () {
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

    
    this.getData()
    setInterval(() => {
      this.getData()
    }, [5 * 1000])
  },
  methods: {
    swap () {
      if (this.account) {
        const amount = ethers.utils.parseUnits(this.inputVal, dec).toString()
        // console.log(amount)
        swapContract.swap(amount).then((res) => {
          console.log(res)
          this.msgSuccess('Swap success!')
        })
      }
    },
    approval () {
      if (this.account) {
        contract.approve(swapToken, _userTokenBalance).then((res) => {
          // console.log(res)
          this.msgSuccess('Approve success!')
        })
      }
    },
    getData () {
      // console.log(this.account)
      if (mmWeb3 && this.account) {
        const account = this.account
        // const account = '0xC03033d8b833fF7ca08BF2A58C9BC9d711257249'
        srcContract.balanceOf(account).then(res => {
          this.srcBalance = res.toString()
        })
        srcContract.allowance(account, swapToken).then(res => {
          this.allowance = res.toString()
        })
        destContract.balanceOf(account).then(res => {
          this.destBalance = res.toString()
        })
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