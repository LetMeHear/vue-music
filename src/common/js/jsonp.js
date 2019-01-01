import originJSONP from 'jsonp'

// 将jsonp封装一层，第一个参数是纯净的url，第二个参数是query，第三个是原生jsonp的option
export default function jsonp (url, data, option) {
  // url拼接方法，如果结尾有？ 则直接添加&
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
