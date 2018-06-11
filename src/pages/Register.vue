<template>
    <div class="project-bk">
        <div class="container">
        <div class="row">
            <div class="col-12 register-box">
                <div class="reg-title">
                    <span>注册</span>
                </div>
                <div class="reg-body">
                        <div class="reg-name">
                            <label for="">用户名</label>
                            <input type="text" name="uname" v-model="uname" v-validate.initial="'uname'" @mouseenter="hold($event)" @mouseout="clear($event)">
                            <div class="reg-tips-box iconfont" v-show="errors.has('uname')">
                                <!-- <i></i> -->
                                <span>格式错误</span>
                            </div>
                        </div>
                        <div class="reg-pwd">
                            <label for="">密码</label>
                            <input type="password" name="upwd" v-model="upwd" v-validate.initial="'upwd'" @mouseenter="hold($event)" @mouseout="clear($event)">
                            <div class="reg-tips-box iconfont" v-show="errors.has('upwd')">
                                <!-- <i></i> -->    
                                <span>格式错误</span>
                            </div>
                            <div class="pwd-strength">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="reg-cpwd">
                            <label for="">确认密码</label>
                            <input type="password" name="cpwd" v-model="cpwd" @mouseenter="hold($event)" @mouseout="clear($event)" @blur="checkPwd">
                            <div class="reg-tips-box iconfont" v-show='regCpwd'>
                                <!-- <i></i> -->
                                <span>两次密码不同</span>
                            </div>
                        </div>
                        <!-- <div class="reg-gender iconfont">
                            <label for="gender">性别</label>
                            <div class="iconfont">
                                <input type="radio" name="gender" id="male">
                                <label for="male" class="icon-xingbie-nan"></label>
                            </div>
                            <div class="iconfont">
                                <input type="radio" name="gender" id="female">
                                <label for="female" class="icon-xingbie-nv"></label>
                            </div>
                            <div class="iconfont">
                                <input type="radio" name="gender" id="unknow">
                                <label for="unknow" class="icon-xingbie-weizhi"></label>
                            </div>
                        </div> -->
                        <div class="reg-phone">
                            <label for="">电话</label>
                            <input type="text" name="phone" v-model="uphone" v-validate.initial="'phone'" @mouseenter="hold($event)" @mouseout="clear($event)">
                            <div class="reg-tips-box iconfont" v-show="errors.has('phone')">
                                <!-- <i></i> -->
                                <span>格式错误</span>
                            </div>
                        </div>
                        <div class="reg-email">
                            <label for="">邮箱</label>
                            <input type="text" name="email" v-model="uemail" v-validate.initial="'email'" @mouseenter="hold($event)" @mouseout="clear($event)">
                            <div class="reg-tips-box iconfont" v-show="errors.has('email')">
                                <!-- <i></i> -->
                                <span>格式错误</span>
                            </div>
                        </div>
                        <button class="reg-btn" @click="regbtn">注&nbsp;册</button>
                        <p>点击「注册」按钮，即代表你同意<a href="">《用户协议》</a></p>
                </div>
            </div>
            <button @click='show'>点哦</button>
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions,mapState} from 'vuex';
import "@/assets/js/jquery-3.2.1.js";
import qs from "querystring";
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      cpwd: "",
      uphone: "",
      uemail: "",
      regCpwd: false
    };
  },
  mounted() {},
  computed:{
    ...mapState(['isLogin'])
  },
  methods: {
    ...mapActions(['loginAction']),
    regbtn() {
      var str={
          'uname': this.uname,
          'upwd': this.upwd,
          'uphone': this.uphone,
          'uemail': this.uemail
      }
      console.log(qs.stringify(str));
      console.log(str);
      this.$axios({
          method:'post',
          url:'/vi/api/regist',
          data:qs.stringify(str)
        })
        .then(res => {
          console.log(res);
          this.loginAction();

        })
        .catch(err => {
          console.log(err);
          this.upwd='';
          this.cpwd='';
        });
    },
    hold(event) {
      let str = $(event.target).attr("name");
      switch (str) {
        case "uname":
          $(event.target).attr("placeholder", "请输入3-8位字母或数字");
          break;
        case "upwd":
          $(event.target).attr("placeholder", "请输入6-18位密码");
          break;
        case "cpwd":
          $(event.target).attr("placeholder", "请再次输入密码");
          break;
        case "phone":
          $(event.target).attr("placeholder", "请输入手机号码");
          break;
        default:
          $(event.target).attr("placeholder", "请输入邮箱地址");
      }
    },
    clear(event) {
      $(event.target).attr("placeholder", "");
      if ($(event.target).val() !== "") {
        $(event.target)
          .prev("label")
          .css("top", "-0.875rem");
        $(event.target)
          .prev("label")
          .css("background", "#fff");
        $(event.target)
          .prev("label")
          .css("padding", "0 0.125rem");
      } else {
        return;
      }
    },
    checkPwd() {
      if (this.upwd !== this.cpwd) {
        this.regCpwd = true;
      } else {
        this.regCpwd = false;
      }
    },
    show(){
      this.$toast.show({
        text:'hello',
        position:'center'
      });
    }
  }
};
</script>

<style>
@import "../assets/css/base.css";
.register-box {
  margin: 1.875rem 0;
  position: relative;
  border: 1px solid #999;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.3125rem;
}

.reg-title {
  position: absolute;
  top: -0.8125rem;
  left: 1.0625rem;
  background: #fff;
}

.reg-title span {
  padding: 0 0.3125rem;
  display: block;
  font-size: 1.25rem;
}

.reg-body {
  width: 18.75rem;
  margin: 2.5rem auto;
  text-align: center;
}

.reg-body input {
  border: 0.0625rem solid #999;
  border-radius: 0.25rem;
  width: 17.5rem;
  padding: 0.375rem 0;
  padding-left: 0.625rem;
}

.reg-body p {
  font-size: 0.875rem;
  text-align: center;
}

.reg-body p a {
  color: #e8e363;
}

.reg-name,
.reg-pwd,
.reg-cpwd,
.reg-phone,
.reg-email {
  width: 100%;
  margin: 1.875rem auto 0.625rem;
  position: relative;
}

.reg-name label,
.reg-pwd label,
.reg-cpwd label,
.reg-phone label,
.reg-email label {
  position: absolute;
  top: 0.1875rem;
  left: 0.9375rem;
  transition: all 0.2s linear;
}

.reg-name i:before,
.reg-pwd i:before,
.reg-cpwd i:before,
.reg-phone i:before,
.reg-email i:before {
  display: none;
  content: "\e625";
  color: rgba(25, 223, 35, 0.9);
  font-size: 0.875rem;
  width: 0.9375rem;
  height: 0.9375rem;
}

.reg-name .reg-tips-box,
.reg-pwd .reg-tips-box,
.reg-cpwd .reg-tips-box,
.reg-phone .reg-tips-box,
.reg-email .reg-tips-box {
  padding: 0 0.125rem;
  position: absolute;
  top: -0.875rem;
  right: 1.25rem;
  font-size: 1rem;
  text-align: left;
  background: #fff;
}

.reg-name .reg-tips-box span:after,
.reg-pwd .reg-tips-box span:after,
.reg-cpwd .reg-tips-box span:after,
.reg-phone .reg-tips-box span:after,
.reg-email .reg-tips-box span:after {
  content: "\e61b";
  color: rgba(240, 12, 12, 0.9);
}

.reg-name:hover label,
.reg-pwd:hover label,
.reg-cpwd:hover label,
.reg-phone:hover label,
.reg-email:hover label {
  top: -0.875rem;
  background: #fff;
  padding: 0 0.125rem;
  transition: all 0.2s linear;
}

.pwd-strength {
  position: absolute;
  right: -1.25rem;
  top: 0.3125rem;
  width: 1.25rem;
  display: none;
}

.pwd-strength span {
  display: block;
  border-top: 0.25rem solid #999;
  margin-bottom: 0.1875rem;
}

.pwd-strength span:nth-child(1) {
  width: 100%;
}

.pwd-strength span:nth-child(2) {
  width: 60%;
}

.pwd-strength span:nth-child(3) {
  width: 30%;
}

.weak-color span:nth-child(3) {
  border-color: rgba(240, 12, 12, 0.9);
}

.normal-color span:nth-child(2) {
  border-color: yellow;
}

.strong-color span:nth-child(1) {
  border-color: green;
}

.label-hold {
  top: -0.875rem !important;
  background: #fff;
  padding: 0 0.125rem;
}

.correct {
  color: rgba(25, 223, 35, 0.9);
}

.correct input {
  border-color: rgba(25, 223, 35, 0.9);
}

.wrong {
  color: rgba(240, 12, 12, 0.9);
}

.wrong input {
  border-color: rgba(240, 12, 12, 0.9);
}

.reg-btn {
  padding: 0.3125rem 2.5rem;
  width: 9.375rem;
  margin: 1.25rem auto;
  background: #e8e363;
  color: #fff;
  font-size: 1.125rem;
  border-radius: 0.3125rem;
}
</style>
