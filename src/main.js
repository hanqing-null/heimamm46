import Vue from "vue";
import App from "./App.vue";
// 界面路由
import router from "./router";

//element-ui组件
import ElementUI from "element-ui";
// element-ui样式
import "element-ui/lib/theme-chalk/index.css";
// 注册eleement-ui组件
Vue.use(ElementUI);

// 导入全局样式
import "./style/bass.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
