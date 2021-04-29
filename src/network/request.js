import axios from 'axios'

// 配置 axios
export function request (config) {
  const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data ? res.data : res
  }, err => {
    return err
  })

  return instance(config)
}
