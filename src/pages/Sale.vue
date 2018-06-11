<template>
    <div>
        <div class="sale-body col-12">
        <!-- <div class="container sale-head col-12">
            <ul>
                <li class="hold">
                    <a href="">我要卖房</a>
                </li>
                <li>
                    <a href="">我要出租</a>
                </li>
            </ul>
        </div> -->
        <div class="container set-info col-12 clearfix">
            <div class="col-7 left">
                <div>
                    <span>所在城市</span>
                    <input type="text" readonly="readonly" id="city-name" name="city">
                </div>
                <div>
                    <span>小区名称</span>
                    <input type="text" placeholder="请输入小区名" id="district" name="district">
                </div>
                <div>
                    <span>房屋地址</span>
                    <input type="text" placeholder="楼栋号/单元号/门牌号" id="address" name="address">
                </div>
                <div>
                    <span>期待售价</span>
                    <input type="text" placeholder="期望售价" id="price" name="price">
                </div>
                <div>
                    <span>称呼</span>
                    <input type="text" placeholder="我们该如何称呼您" id="owner" name="owner">
                </div>
                <div>
                    <span>手机号码</span>
                    <input type="text" placeholder="您的联系方式" id="phone" name="phone">
                </div>
                <div>
                    <input type="radio" name="sale">出租
                    <input type="radio" name="sale">出售
                </div>
                <button @click="upload_btn">提交</button>
            </div>
            <div class="col-4 right-part left iconfont">
                <h4>租售流程</h4>
                <div>
                    <span class="icon-1"></span>
                    <p>提交房源</p>
                    <small>线上免费发布房源</small>
                </div>
                <div>
                    <span class="icon-2"></span>
                    <p>核对房源</p>
                    <small>专人现场核对信息</small>
                </div>
                <div>
                    <span class="icon-3"></span>
                    <p>在线销售</p>
                    <small>专业网络销售</small>
                </div>
                <div>
                    <span class="icon-4"></span>
                    <p>签约出售</p>
                    <small>签约过户全场服务</small>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import "@/assets/js/jquery-3.2.1.js";
export default {
  created: function() {
    this.$http
      .jsonp(
        "http://api.map.baidu.com/location/ip?ak=dm3gLIHIbAuNoqxfOUxtW8NMSSviW2HE&coor=bd0911"
      )
      .then(
        function(rs) {
          var city = rs["body"]["content"]["address_detail"]["city"];
          city = city.toString().substr(0, city.length - 1);
          var str = document.getElementById("city-name");
          str.value= city;
        //   for (let t = 0; t < str.length; t++) {
        //     str[t].innerHTML = city;
        //     str[t].setAttribute("data-city-code", city_code);
        //   }
        },
        function(err) {
          console.log(err);
        }
      );
  },
  methods:{
      upload_btn(){
        var params = new URLSearchParams();
        let city=$("#city-name").val(),
            district=$("#district").val(),
            address=$("#address").val(),
            owner=$("#owner").val(),
            phone=$("#phone").val();
        
        params.append('city', city);
        params.append('district', district);
        params.append('address', address);
        params.append('owner', owner);
        params.append('phone', phone);
        
        this.$axios.post('/api/formmsg',params,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            conosle.log(err);
        })
      }
  }
};
</script>

<style>
@import "../assets/css/base.css";
.sale-body {
  background: #fff;
}

.sale-body .sale-head ul {
  display: -webkit-box;
  width: 220px;
  padding: 5px;
}

.sale-body .sale-head ul li {
  -webkit-box-flex: 1;
  padding: 5px 0;
}

.sale-body .sale-head ul li a {
  font-size: 20px;
  width: 100%;
}

.sale-body .sale-head ul li.hold a {
  color: #8ab4e8;
  font-size: 22px;
}

.set-info {
  margin-top: 20px;
  padding: 10px;
}

.set-info div {
  padding: 20px 10px;
  font-size: 16px;
}

.set-info div span {
  display: inline-block;
  width: 120px;
}

.set-info div input {
  font-size: 16px;
}

.set-info button {
  width: 100px;
  padding: 10px;
  background: #e8e363;
  color: #fff;
  border-radius: 5px;
  font-size: 15px;
  margin: 10px auto;
}

.right-part div {
  padding: 20px;
  width: 50%;
  margin: 0 auto;
  position: relative;
}

.right-part div p {
  color: #8ab4e8;
}

.right-part div small {
  display: block;
  color: #999;
}

.right-part div span {
  position: absolute;
  top: 30px;
  left: -10px;
  display: inline-block;
  font-size: 25px;
  color: #999;
}
</style>
