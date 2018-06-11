import Index from './pages/Index'
import Search from './pages/Search'
import Login from './pages/Login'
import Register from './pages/Register'
import Info from './pages/Info'
import Sale from './pages/Sale'
import User from './pages/User'
import store from './vuex/store'

export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/info',
        component: Info
    },
    {
        path: '/sale',
        component: Sale,
        beforeEnter: (to, from, next) => {
            if(store.state.isLogin==1){
                next();
            }else{
                next({
                    path:'/register',
                    query:{
                        Rurl:to.fullPath
                    }
                })
            }
        }
    },
    {
        path: '/user',
        component: User,
        beforeEnter: (to, from, next) => {
            if(store.state.isLogin==1){
                next();
            }else{
                next({
                    path:'/register',
                    query:{
                        Rurl:to.fullPath
                    }
                })
            }
        }
    }
]