export default {
  smallToBigSort (propertyArray) {
    let levelCount = propertyArray.length

    return function (item1, item2) {
      let level = 0;
      let sorting = function () {
        let propertyName = propertyArray[level];
        level++;

        let itemCell1 = item1[propertyName],
            itemCell2 = item2[propertyName];
        if (itemCell1 < itemCell2) {
            return -1; //从小到大排序
        } else if (itemCell1 > itemCell2) {
            return 1;
        } else if (itemCell1 === itemCell2) {
          if (level === levelCount) {
              return 0;
          } else {
              return sorting();
          }
        }
      };
      return sorting();
    };
  },
  // bigToSmallSort () {
  //   return (a, b) => {
  //     for (let obj in arguments) {
  //       if (Number(a[arguments[obj]]) > Number(b[arguments[obj]])) {
  //         return -1
  //       }
  //     }
  //     return 1
  //   }
  // },
  bigToSmallSort (propertyArray) {
    let levelCount = propertyArray.length

    return function (item1, item2) {
      let level = 0;
      let sorting = function () {
        let propertyName = propertyArray[level];
        level++;

        let itemCell1 = item1[propertyName],
            itemCell2 = item2[propertyName];
        if (itemCell1 < itemCell2) {
            return 1; //从小到大排序
        } else if (itemCell1 > itemCell2) {
            return -1;
        } else if (itemCell1 === itemCell2) {
          if (level === levelCount) {
              return 0;
          } else {
              return sorting();
          }
        }
      };
      return sorting();
    };
  },
  thousandBit (num, dec = 2) {
    if (!Number(num)) return '0.00'
    if (Number(num) < 0.00000001) return '<0.00000001'
    if (Number(num) < 0.01) return Number(num).toFixed(6)
    if (Number(num) < 1) return Number(num).toFixed(4)
    if (Number(num) < 1000) {
      if (isNaN(dec)) {
        return num
      } else {
        return Number(num).toFixed(dec)
      }
    }
    let _num = num = Number(num)
    if (isNaN(num)) {
      num = 0
      num = num.toFixed(dec)
    } else {
      if (isNaN(dec)) {
        if (num.toString().indexOf('.') === -1) {
          num = Number(num).toLocaleString()
        } else {
          let numSplit = num.toString().split('.')
          numSplit[1] = numSplit[1].length > 9 ? numSplit[1].substr(0, 8) : numSplit[1]
          num = Number(numSplit[0]).toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toLocaleString()
          num = num.toString().split('.')[0] + '.' + numSplit[1]
        }
      } else {
        num = num.toFixed(dec).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toLocaleString()
      }
    }
    if (_num < 0 && num.toString().indexOf('-') < 0) {
      num = '-' + num
    }
    return num
  },
  toMillion (num, dec = 2) {
    num = Number(num)
    if (num >= 1000 && num < 1000000) {
      num = num / Math.pow(10, 3)
      num = this.thousandBit(num, dec)
      num = num + ' K'
    } else if (num >= 1000000) {
      num = num / Math.pow(10, 6)
      num = this.thousandBit(num, dec)
      num = num + ' M'
    } else {
      num = this.thousandBit(num, dec)
    }
    // console.log(this)
    return num
  },
}