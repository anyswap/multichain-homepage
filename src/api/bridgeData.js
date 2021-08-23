import axios from 'axios'
import config from '@/config'

export function getBridgeData () {
  return new Promise(resolve => {
    axios.all([
      axios.get(config.bridgeApi + '/data/stats'),
      axios.get(config.bridgeApi + '/data/stats/stable'),
      axios.get(config.bridgeApi + '/data/bridgeChainInfo'),
      axios.get(config.netapi + '/bridge/v2/info'),
    ]).then(res => {
      console.log(res)
      resolve(res)
    })
  })
}