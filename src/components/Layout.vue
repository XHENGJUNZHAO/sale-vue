<template>
   <div>
       <div class="project-head">
        <div class="container clearfix">
            <div class="project-logo iconfont left">
                <span><a href="#/">LOGO</a></span>
                <small @click="showCity">地区</small>
                <div id="show-city">
                    <p>
                        <small>XX市</small>
                        <span>当前城市</span>
                    </p>
                    <div class="city-tag">
                        <span v-for="(tmp,index) in cities" :key="index" @click="chose($event)">{{tmp.city}}</span>
                    </div>
                </div>
            </div>
            <ul class="left">
                <li>
                    <a href="#/">首页</a>
                </li>
                <li>
                    <a href="#/sale">售楼部</a>
                </li>
            </ul>
            <div class="project-search clearfix left">
                <form action="">
                    <input type="text" placeholder="搜索房源..">
                </form>
            </div>
            <div class="project-user clearfix right">
                <a href="#/user">
                    <img src="../assets/img/user.png" alt="">
                </a>
            </div>
            <div class="show-hide-nav">
                <button id="show-hide-nav" @click="listDown">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="hide-nav">
                <ol>
                    <li class="clearfix iconfont">
                        <a href="" @click="go()">首页</a>
                        <span></span>
                    </li>
                    <li class="clearfix iconfont">
                        <a href="" @click="go()">售楼部</a>
                        <span></span>
                    </li>
                    <li class="clearfix iconfont">
                        <a href="" @click="go()">搜索</a>
                        <span></span>
                    </li>
                    <li class="clearfix iconfont">
                        <a href="" @click="go()">我的</a>
                        <span></span>
                    </li>
                </ol>
            </div>
        </div>
       </div>
       <div class="content">
           <router-view></router-view>
       </div>
       <div class="footer">
            <div class="container">
            <div class="foodRoad-web-footer clearfix">
                <div class="row clearfix">
                    <section class="col-6 left clearfix">
                        <div class="copyright-box">
                            <p>copyright&nbsp;©&nbsp;2018&nbsp;zhaojuncheng</p>   
                        </div>
                    </section>
                    <div class="col-6 right clearfix contact-me">
                        <p>Contact Me</p>
                        <ul class="navbar clearfix left contact-box">
                            <li>
                                <a href="" title="139XXXXXXXX">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-shouji"></use>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-weixin"></use>
                                    </svg>
                                    <div class="qrcode-weixin">
                                        <img src="../assets/img/myqrcode.jpg" alt="">
                                        <div class="triangle"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="" title="QQ:406542688">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-qq-copy"></use>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" title="sh21sapig@163.com">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-zhaoshangyouxiang-copy"></use>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="" title="作者个人介绍">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-zhizhuxia"></use>
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
</template>

<script>
import jquery from '@/assets/js/jquery-3.2.1.js';
import getCity from '@/assets/js/header.js';
var cities = [];
export default {
  created:function(){
    this.$http.jsonp('http://api.map.baidu.com/location/ip?ak=dm3gLIHIbAuNoqxfOUxtW8NMSSviW2HE&coor=bd0911').then(
      function(rs){
        //console.log(rs['body']['content']['address_detail']['city']);
        var city = rs['body']['content']['address_detail']['city'];
        city = city.toString().substr(0, city.length - 1);
        var city_code = rs['body']['content']['address_detail']['city_code'];
        //console.log(rs);
        //console.log(city);
        var str = document.querySelectorAll(".project-logo small");
        for (let t = 0; t < str.length; t++) {
            str[t].innerHTML = city;
            str[t].setAttribute("data-city-code", city_code);
        }
      },
      function(err){
        console.log(err);
      }
    )
  },
  methods: {
    showCity() {
      $("#show-city").show();
    },
    chose(event) {
      //console.log(event.currentTarget);
      //console.log(event.target);
      $(".city-tag span").removeClass("chose");
      $(event.target).addClass("chose");
      $("#show-city small").html($(event.target).html());
    },
    listDown() {
      $(".hide-nav").hsaClass("down")
        ? $(".hide-nav").removeClass("down")
        : $(".hide-nav").addClass("down");
    }
  },
  data: function() {
    return {
      cities: [
        { city: "北京", code: 131 },
        { city: "上海", code: 289 },
        { city: "广州", code: 257 },
        { city: "深圳", code: 340 },
        { city: "成都", code: 75 },
        { city: "武汉", code: 218 }
      ]
    };
  }
};
</script>

<style>
/* base */
body,
div,
section,
p,
h1,
h2,
h3,
h4,
h5,
h6,
table,
thead,
tbody,
tr,
th,
td,
ul,
ol,
li,
label {
  padding: 0;
  margin: 0;
}

body {
  background: #fff;
}

a:hover {
  text-decoration: none;
}

div {
  box-sizing: border-box;
}

button,
input {
  outline: none;
  background: none;
  border: none;
}

ul,
ol,
li {
  list-style: none;
}

a {
  color: rgba(36, 34, 34, 0.85);
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.clearfix {
  zoom: 1;
}

.clearfix:before {
  content: "";
  display: block;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.left {
  float: left;
}

.right {
  float: right;
}

.row {
  padding: 0 15px;
  margin: 0 auto;
}

.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

.col-3 {
  width: 25%;
}

.col-4 {
  width: 33.33333%;
}

.col-5 {
  width: 41.66667%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.33333%;
}

.col-8 {
  width: 66.66667%;
}

.col-9 {
  width: 75%;
}

.col-10 {
  width: 83.33333%;
}

.col-11 {
  width: 91.66667%;
}

.col-12 {
  width: 100%;
}

.bg {
  background: #fff;
}

.container {
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
}

.full {
  padding: 0 15px;
}

@media screen and (min-width: 768px) {
  .container {
    width: 750px;
  }
  .col-1-sm {
    width: 8.33333%;
  }
  .col-2-sm {
    width: 16.66667%;
  }
  .col-3-sm {
    width: 25%;
  }
  .col-4-sm {
    width: 33.33333%;
  }
  .col-5-sm {
    width: 41.66667%;
  }
  .col-6-sm {
    width: 50%;
  }
  .col-7-sm {
    width: 58.33333%;
  }
  .col-8-sm {
    width: 66.66667%;
  }
  .col-9-sm {
    width: 75%;
  }
  .col-10-sm {
    width: 83.33333%;
  }
  .col-11-sm {
    width: 91.66667%;
  }
  .col-12-sm {
    width: 100%;
  }
}

@media screen and (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    width: 80%;
  }
}

ul.navbar li {
  float: left;
  display: block;
}

.bg:before,
.container:before,
.full:before {
  clear: both;
  content: "";
  display: block;
}

.bg:after,
.container:after,
.full:after {
  clear: both;
  content: "";
  display: block;
}

.nav-path {
  width: 100%;
  background: #fff;
}

.nav-path ul {
  padding: 5px 0;
}

.nav-path li {
  float: left;
}

.nav-path li a {
  color: #e8e363;
  text-decoration: none;
}

.nav-path li a:after {
  content: "\e9fe";
}

.project-bk {
  background: #fff;
  height: 100%;
  width: 100%;
}

/* head */
.project-head {
  width: 100%;
  background: #e8e363;
}

.project-head .project-logo {
  padding: 20px 0;
  display: inline-block;
  position: relative;
}

.project-head .project-logo small:after {
  content: "\e626";
}

.project-head .project-logo #show-city {
  position: absolute;
  height: 400px;
  width: 400px;
  background: #fff;
  z-index: 9999;
  top: 60px;
  display: none;
}

.project-head .project-logo #show-city p {
  padding: 5px;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
}

.project-head .project-logo #show-city p small {
  box-sizing: border-box;
  font-size: 15px;
  padding: 2px;
}

.project-head .project-logo #show-city p small:after {
  content: "";
}

.project-head .project-logo #show-city p span {
  font-size: 12px;
}

.project-head .project-logo #show-city p span:after {
  content: "\e614";
  font-size: 16px;
  color: #ff403a;
}

.project-head .project-logo #show-city .city-tag {
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: block;
}

.project-head .project-logo #show-city .city-tag span {
  font-size: 15px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 2px;
  margin: 0 2px;
  cursor: pointer;
}

.project-head .project-logo #show-city .city-tag span.chose {
  border-color: #8ab4e8;
  color: #8ab4e8;
}

.project-head ul {
  width: 150px;
  display: -webkit-box;
  margin-left: 2%;
}

.project-head ul li {
  width: 100%;
  padding: 20px 0;
  -webkit-box-flex: 1;
  text-align: center;
}

.project-head ul li a {
  text-decoration: none;
}

.project-head ul li:hover {
  background: rgba(7, 3, 3, 0.2);
}

.project-search {
  padding: 20px;
}

.project-search input {
  width: 200px;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  padding-left: 10px;
}

.project-user {
  padding: 10px;
}

.project-user a {
  display: block;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

.project-user a img {
  width: 100%;
}

.show-hide-nav {
  display: block;
  position: absolute;
  right: 10px;
  top: 30%;
  height: 25px;
  width: 25px;
}

.show-hide-nav button {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 1px;
  background: #f6ffe3;
}

.show-hide-nav button span {
  background: #141414;
  width: 100%;
  height: 4px;
  margin: 2px 0;
  display: block;
}

.hide-nav {
  position: absolute;
  background: #efeb8f;
  width: 100%;
  left: 0;
  bottom: 60px;
  transition: all 0.5s linear;
  z-index: 9999;
}

.hide-nav ol {
  display: block;
  width: 100%;
  margin: 0;
}

.hide-nav ol li {
  padding: 10px 0 10px 10px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

.hide-nav ol li span {
  display: block;
  float: right;
  width: 20px;
  height: 20px;
}

.hide-nav ol li span:after {
  content: "\e9fe";
  font-size: 20px;
}

.down {
  bottom: -160px;
  transition: all 0.5s linear;
}

@media screen and (min-width: 360px) {
  .show-hide-nav {
    display: block;
  }
  .project-search {
    display: none;
  }
  .project-user {
    display: none;
  }
  .project-head ul {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .show-hide-nav {
    display: block;
  }
  .project-search {
    display: none;
  }
  .project-user {
    display: none;
  }
  .project-head ul {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .project-logo {
    font-size: 18px;
    padding: 30px 0 !important;
  }
  .project-logo small {
    font-size: 16px;
  }
  .project-head ul {
    display: block;
    display: -webkit-box;
  }
  .project-head ul li {
    padding: 30px 0;
    width: 100%;
    font-size: 18px;
  }
  .project-search {
    margin-left: 20px;
    padding: 27px 0;
    display: block;
  }
  .project-search input {
    height: 28px;
  }
  .project-user {
    padding: 15px;
    display: block;
  }
  .project-user a {
    height: 50px;
    width: 50px;
  }
  .show-hide-nav {
    display: none;
  }
  .hide-nav {
    bottom: 90px;
  }
}

@media screen and (min-width: 1200px) {
  .project-logo {
    font-size: 18px;
    padding: 30px 0 !important;
  }
  .project-logo small {
    font-size: 16px;
  }
  .project-head ul li {
    padding: 30px 0;
    width: 100%;
    font-size: 18px;
  }
  .project-search {
    display: block;
    margin-left: 20px;
    padding: 27px 0;
  }
  .project-search input {
    height: 28px;
  }
  .project-user {
    display: block;
    padding: 15px;
  }
  .project-user a {
    height: 50px;
    width: 50px;
  }
  .show-hide-nav {
    display: none;
  }
  .hide-nav {
    bottom: 90px;
  }
}

/* foot */
.footer {
  background: #666;
}

.copyright-box {
  width: 100%;
  margin: 65px 0;
}

.copyright-box p {
  text-align: center;
  color: #242222;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.contact-me p {
  color: rgba(36, 34, 34, 0.85);
  font-weight: 600;
  margin: 20px 0;
}

.contact-me ul {
  margin-bottom: 20px;
}

.contact-me ul li {
  position: relative;
  display: block;
  margin-right: 10px;
  width: 40px;
  height: 40px;
}

.contact-me ul li a {
  background: #fff;
  display: block;
  border: 1px solid #999;
  width: 38px;
  height: 38px;
  box-shadow: 0 2px 3px 0 #333;
  border-radius: 50%;
  position: relative;
}

.contact-me ul li a:hover svg {
  opacity: 0.8;
}

.contact-me ul li a:hover .qrcode-weixin {
  display: block;
}

.contact-me ul li a svg {
  width: 100%;
  height: 100%;
}

.contact-me ul li a .qrcode-weixin {
  position: absolute;
  display: none;
  margin-top: 10px;
  top: -125px;
  width: 100px;
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  background: #f2f2f2;
}

.contact-me ul li a .qrcode-weixin .triangle {
  position: absolute;
  top: 100px;
  left: 10px;
  width: 0;
  height: 0;
  border-width: 10px 10px 0 10px;
  border-color: #f2f2f2 transparent;
  border-style: solid;
}

.contact-me ul li a .qrcode-weixin img {
  width: 100%;
}
</style>

