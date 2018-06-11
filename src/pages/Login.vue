<template>
    <div class="project-bk">
       <div class="container">
        <div class="row clearfix">
            <div class="col-3 right clearfix">
                <div class="login-box clearfix">
                    <h3>登&nbsp;录</h3>
                    <div class="login-box-body clearfix">
                            <div class="uname-box">
                                <input type="text" v-model="uname" placeholder="用户名">
                                <i class="iconfont" v-show="errorShow"></i>
                                <div class="tips-box">
                                    <span class="iconfont" v-show="errorShow">用户名错误</span>
                                </div>
                            </div>
                            <div class="upwd-box">
                                <input type="password" v-model="upwd" placeholder="密码">
                                <i class="iconfont" v-show="errorShow"></i>
                                <div class="tips-box">
                                    <span class="iconfont" v-show="errorShow">密码错误</span>
                                </div>
                            </div>
                            <button class="btn-login" @click="loginBtn">登&nbsp;录</button>
                            <p>
                                <input type="radio">记住我
                                <a href="">去注册></a>
                            </p>
                    </div>
                    <div class="third-account">
                        <div class="third-account-title">
                            <span>社交账号登录</span>
                        </div>
                        <div class="third-account-body">
                            <ul class="navbar clearfix">
                                <li>
                                    <a href="">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-weixin"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-qq-copy"></use>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-weibo"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
       return{
          uname:'',
          upwd:'',
          errorShow:false
       }
    },
    methods:{
       loginBtn(){
           this.$axios.post('/api/',{uname:this.uname,upwd:this.upwd}).then(
               (data)=>{

               },
               (error)=>{
                   
               }
           )
       }
    }
};
</script>

<style>
@import '../assets/css/base.css';
.login-box {
  width: 100%;
  margin: 20px 0;
}

.login-box h3 {
  margin: 10px 0;
}

.login-box .login-box-body {
  margin-top: 20px;
}

.login-box .login-box-body .uname-box,
.login-box .login-box-body .upwd-box {
  position: relative;
  margin: 30px 0;
}

.login-box .login-box-body .uname-box i:before,
.login-box .login-box-body .upwd-box i:before {
  right: 4px;
  top: 5px;
  position: absolute;
  content: "\e625";
  color: rgba(25, 223, 35, 0.9);
}

.login-box .login-box-body .uname-box input,
.login-box .login-box-body .upwd-box input {
  width: 100%;
  height: 25px;
  border-bottom: 1px solid #999;
  border-radius: 2px;
  text-indent: 10px;
}

.login-box .login-box-body .uname-box .tips-box,
.login-box .login-box-body .upwd-box .tips-box {
  margin-top: 5px;
  color: rgba(240, 12, 12, 0.9);
  position: absolute;
}

.login-box .login-box-body .uname-box .tips-box span,
.login-box .login-box-body .upwd-box .tips-box span {
  font-size: 14px;
  line-height: 14px;
}

.login-box .login-box-body .uname-box .tips-box span:before,
.login-box .login-box-body .upwd-box .tips-box span:before {
  content: "\e61b";
}

.login-box .login-box-body .btn-login {
  display: block;
  margin-top: 30px;
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  background: #e8e363;
  cursor: pointer;
}

.login-box .login-box-body p {
  font-size: 14px;
  display: block;
  margin-top: 10px;
  line-height: 14px;
}

.login-box .login-box-body p input {
  margin: 0;
}

.login-box .login-box-body p a {
  float: right;
  color: #e8e363;
}

.third-account {
  margin-top: 40px;
  width: 100%;
}

.third-account .third-account-title {
  display: block;
  width: 100%;
  position: relative;
  height: 20px;
  text-align: center;
  box-sizing: border-box;
  border-top: 1px solid #999;
}

.third-account .third-account-title span {
  font-size: 14px;
  color: #999;
  position: absolute;
  display: block;
  left: 30%;
  padding: 0px 5px;
  top: -12px;
  background: #fff;
}

.third-account-body {
  width: 100%;
}

.third-account-body ul {
  margin-top: 10px;
}

.third-account-body li {
  position: relative;
  display: block;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  padding-left: 25px;
}

.third-account-body li a {
  background: #fff;
  display: block;
  border: 1px solid #f2f2f2;
  width: 38px;
  height: 38px;
  border-radius: 50%;
}

.third-account-body li a svg {
  width: 100%;
  height: 100%;
}
</style>
