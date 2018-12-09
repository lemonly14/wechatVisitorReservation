import axios from 'axios'

// 加上
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 每次发送请求之前检测都 vuex 存有 openId,放在请求头发送给服务器
    let openId = localStorage.getItem('openid')
    console.log('openId', openId)
    if (openId == null) {
      console.log('openId = null')
    } else {
      config.headers['openId'] = openId
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response.data)
  }
)

export default service
