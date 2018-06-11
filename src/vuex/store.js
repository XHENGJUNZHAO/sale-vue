import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建基本状态
const state={
    isLogin:0
}

//创建改变状态的方法
const mutations={
    changeLogin(state,status){
        state.isLogin=status;
    }
}

//创建驱动actions可以使mutations启动
const actions={
    loginAction({commit}){
        commit('changeLogin',1)
    }
}

//把vuex暴露出去
export default new Vuex.Store({
    state,
    mutations,
    actions
})