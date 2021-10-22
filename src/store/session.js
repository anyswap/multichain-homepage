

export function getSession (type, key, init) {
  let ss = '', data = ''
  if (type) {
    ss = localStorage
  } else {
    ss = sessionStorage
  }
  data = ss.getItem(key) ? ss.getItem(key) : init
  return data
}

export function setSession (type, key, data) {
  let ss = ''
  if (type) {
    ss = localStorage
  } else {
    ss = sessionStorage
  }
  ss.setItem(key, data)
}