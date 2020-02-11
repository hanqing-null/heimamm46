// 导入 axios
import axios from "axios";

export function sendsms(data) {
  // 吧组件的相关接口调用 抽取为函数 并暴露 带名字的暴露
  return axios({
    url: process.env.VUE_APP_URL + "/sendsms",
    method: "post",
    // 是否跨域携带cookie 默认是false
    withCredentials: true,
    data
  });
}

export function register(data) {
  return axios({
    url: process.env.VUE_APP_URL + "/register",
    method: "post",
    withCredentials: true,
    data
  });
}
