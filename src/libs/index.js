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
}