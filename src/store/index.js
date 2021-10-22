import Vue from 'vue'
import Vuex from 'vuex'

import {getSession, setSession} from './session'

import {getBridgeData} from '@/api'

Vue.use(Vuex)

const ISDARK = 'ISDARK'

export default new Vuex.Store({
  state: {
    isDark: getSession(1, ISDARK, 0),
    bridgeData: ''
  },
  mutations: {
    setIsDark (state, data) {
      state.isDark = data
      setSession(1, ISDARK, data)
    },
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
