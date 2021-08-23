import Vue from 'vue'
import Vuex from 'vuex'


import {getBridgeData} from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bridgeData: ''
  },
  mutations: {
    setBridgeData (state, data) {
      state.bridgeData = data
    }
  },
  actions: {
    getBridgeData({commit}) {
      getBridgeData().then(res => {
        commit('setBridgeData',{
          stats: res[0],
          stable: res[1],
          chainlist: res[2],
          tokenlist: res[3]
        })
      })
    }
  },
  modules: {
  }
})
