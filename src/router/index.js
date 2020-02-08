import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
// 注册路由
Vue.use(VueRouter)
const router = new VueRouter({
    // 设置路由路径
    routes:[
        // 登陆界面
        {
            path:"/login",
            component:login
        },
        
    ]
})


export default router