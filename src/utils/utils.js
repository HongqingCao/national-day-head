/**
 * @description 全局去前后空格
 * @param data
 * @returns {string}
 */
let dataTrim = (data) =>  {
  if (Array.isArray(data)) {
    for (let item of data) {
      if (typeof item === 'object') {
        dataTrim(item)
      } else if (typeof item === 'string') {
        item = item.trim()
      }
    }
  } else if (typeof data === 'object') {
    for (const key in data) {
      if (typeof data[key] === 'object') {
        dataTrim(data[key])
      } else if (typeof data[key] === 'string') {
        data[key] = data[key].trim()
      }
    }
  }
  return data
};
/**
 * @description 全局去前后空格
 * @param data
 * @returns {string}
 */
let removeItemFromArr = (item, dataList) => {
  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i] === item) {
      dataList.splice(i, 1);
      break;
    }
  }
};

let splitRouter = (router) => {
  let arr = router.split('')
  let length = [],list =[]
  arr.map((item, index) => {
    if(item === '/') {
      length.push(index)
    }
  })
  for (let i = 0; i< length.length; i++) {
    let now = arr.concat()
    let frist = +length[i]+1;
    let len = length.length-1
    let last = i==len ? now.length : (+length[i+1]-1)
    let data = now.splice(frist,last).join('')
    list.push(data)
  }
  return list
}
export default {
  dataTrim,
  removeItemFromArr,
  splitRouter
}