// 导入 axios
import axios from "axios";

export function sendsms(data) {
  return axios({
    url: process.env.VUE_APP_URL + "/sendsms",
    method: "post",
    // 是否跨域携带cookie 默认是false
    withCredentials: true,
    data
  });
}
