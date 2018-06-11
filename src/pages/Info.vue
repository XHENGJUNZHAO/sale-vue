<template>
    <div>
      <div class="info-body">
        <div class="container clearfix">
            <div class="info-pic col-7 left">
                <div class="info-img">
                    <div class="show-img">
                        <a href="">
                            <img src="../assets/img/a1.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="info-text col-5 right">
                <h1>title</h1>
                <div class="info-price clearfix">
                    <span class="left">200万</span>
                    <div class="left">
                        <p>2,5000元/平方</p>
                        <p>首付41万&nbsp;税费2万(仅供参考)</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <span>
                            <small>朝向:</small>X</span>
                    </li>
                    <li>
                        <span>
                            <small>户型:</small>XXXX</span>
                    </li>
                    <li>
                        <span>
                            <small>建筑面积:</small>XXXX㎡</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>
                            <small>装修:</small>XX</span>
                    </li>
                    <li>
                        <span>
                            <small>楼层:</small>XX/XXX</span>
                    </li>
                    <li>
                        <span>
                            <small>建成时间:</small>XXXX</span>
                    </li>
                </ul>
                <div class="info-address iconfont">
                    <p>
                        <small>地址:</small>XXXXXXXXXXXXXXXXX
                        <span class="icon-daohang"></span>
                    </p>
                </div>
                <div class="info-tag">
                    <span>地铁</span>
                    <span>满五年</span>
                    <span>随时看房</span>
                </div>
            </div>
            <div class="pic-roll col-5 right">
                <div class="img-ul" @mouseover="spanShow" @mouseout="spanHide">
                    <span class="prev" @click="goright"></span>
                    <ul class="img-list">
                        <li class="on">
                            <img src="../assets/img/a1.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/a2.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/a3.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/a4.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/a1.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/a2.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/a3.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/a4.png" alt="">
                        </li>
                    </ul>
                    <div></div>
                    <span class="next" @click="goleft"></span>
                </div>
            </div>
        </div>
        <div class="container clearfix">
            <div class="basic-info col-7 left">
                <h2>详细信息</h2>
                <ul class="clearfix">
                    <li>
                        <span>房屋户型</span>暂无数据</li>
                    <li>
                        <span>所在楼层</span>暂无数据</li>
                    <li>
                        <span>建筑面积</span>暂无数据</li>
                    <li>
                        <span>户型结构</span>暂无数据</li>
                    <li>
                        <span>套内面积</span>暂无数据</li>
                    <li>
                        <span>建筑类型</span>暂无数据</li>
                    <li>
                        <span>房屋朝向</span>暂无数据</li>
                    <li>
                        <span>建筑结构</span>暂无数据</li>
                    <li>
                        <span>装修情况</span>暂无数据</li>
                    <li>
                        <span>梯户比例</span>暂无数据</li>
                    <li>
                        <span>配备电梯</span>暂无数据</li>
                    <li>
                        <span>产权年限</span>暂无数据</li>
                </ul>
            </div>
            <div class="contact-staff col-5 left">
                <h2>联系我们马上看房</h2>
                <div class="contact-staff-box">
                    <div class="staff-item">
                        <img src="../assets/img/a1.png" alt="">
                        <p>name
                            <span></span>
                        </p>
                        <button>联系我</button>
                    </div>
                    <div class="staff-item">
                        <img src="../assets/img/a1.png" alt="">
                        <p>name
                            <span></span>
                        </p>
                        <button>联系我</button>
                    </div>
                </div>
            </div>
            <div class="around-info col-12 left">
                <h2>周边信息</h2>
                <!-- <div class="baidu-map">
                    <div id="baidu-map">
                    </div>
                    <div class="map-control">
                        <ul>
                            <li class="act">
                                <a href="" data-name="traffic">交通</a>
                            </li>
                            <li>
                                <a href="" data-name="edu">教育</a>
                            </li>
                            <li>
                                <a href="" data-name="fun">娱乐</a>
                            </li>
                            <li>
                                <a href="" data-name="life">生活</a>
                            </li>
                        </ul>
                        <section data-sname="traffic" class="show">
                            <ol class="clearfix">
                                <li>
                                    <a href="">地铁</a>
                                </li>
                                <li>
                                    <a href="">公交站</a>
                                </li>
                            </ol>
                        </section>
                        <section data-sname="edu">
                            <ol class="clearfix">
                                <li>
                                    <a href="">学校</a>
                                </li>
                                <li>
                                    <a href="">图书馆</a>
                                </li>
                                <li>
                                    <a href="">培训机构</a>
                                </li>
                            </ol>
                        </section>
                        <section data-sname="fun">
                            <ol class="clearfix">
                                <li>
                                    <a href="">美食</a>
                                </li>
                                <li>
                                    <a href="">电影院</a>
                                </li>
                                <li>
                                    <a href="">广场</a>
                                </li>
                            </ol>
                        </section>
                        <section data-sname="life">
                            <ol class="clearfix">
                                <li>
                                    <a href="">银行</a>
                                </li>
                                <li>
                                    <a href="">购物中心</a>
                                </li>
                                <li>
                                    <a href="">市场</a>
                                </li>
                            </ol>
                        </section>
                        <div>
                            <p id="r-result"></p>
                        </div>
                    </div>
                </div> -->
                <baidu-map-component></baidu-map-component>
            </div>
            <div class="recom-same col-12 clearfix">
                <h2>相关推荐</h2>
                <div class="house-item">
                    <div class="house-pic">
                        <a href="">
                            <img src="../assets/img/a1.png" alt="">
                        </a>
                    </div>
                    <div class="house-info">
                        <h4>
                            <a href="">title</a>
                        </h4>
                        <ul>
                            <li>
                                <a href="">Address</a>
                            </li>
                            <li>
                                <a href="">HouseType</a>
                            </li>
                            <li>
                                <a href="">CoveredArea</a>
                            </li>
                        </ul>
                    </div>
                    <div class="house-price">
                        <a href="">XXX万</a>
                    </div>
                </div>
                <div class="house-item">
                    <div class="house-pic">
                        <a href="">
                            <img src="../assets/img/a1.png" alt="">
                        </a>
                    </div>
                    <div class="house-info">
                        <h4>
                            <a href="">title</a>
                        </h4>
                        <ul>
                            <li>
                                <a href="">Address</a>
                            </li>
                            <li>
                                <a href="">HouseType</a>
                            </li>
                            <li>
                                <a href="">CoveredArea</a>
                            </li>
                        </ul>
                    </div>
                    <div class="house-price">
                        <a href="">XXX万</a>
                    </div>
                </div>
                <div class="house-item">
                    <div class="house-pic">
                        <a href="">
                            <img src="../assets/img/a1.png" alt="">
                        </a>
                    </div>
                    <div class="house-info">
                        <h4>
                            <a href="">title</a>
                        </h4>
                        <ul>
                            <li>
                                <a href="">Address</a>
                            </li>
                            <li>
                                <a href="">HouseType</a>
                            </li>
                            <li>
                                <a href="">CoveredArea</a>
                            </li>
                        </ul>
                    </div>
                    <div class="house-price">
                        <a href="">XXX万</a>
                    </div>
                </div>
                <div class="house-item">
                    <div class="house-pic">
                        <a href="">
                            <img src="../assets/img/a1.png" alt="">
                        </a>
                    </div>
                    <div class="house-info">
                        <h4>
                            <a href="">title</a>
                        </h4>
                        <ul>
                            <li>
                                <a href="">Address</a>
                            </li>
                            <li>
                                <a href="">HouseType</a>
                            </li>
                            <li>
                                <a href="">CoveredArea</a>
                            </li>
                        </ul>
                    </div>
                    <div class="house-price">
                        <a href="">XXX万</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import jquery from "@/assets/js/jquery-3.2.1.js";
export default {
  methods: {
    spanShow() {
      $(".img-ul")
        .children("span")
        .addClass("on");
    },
    spanHide() {
      $(".img-ul")
        .children("span")
        .removeClass("on");
    },
    goleft() {
      const liWidth = $($(".img-list li")[0]).outerWidth(true);
      const ulWidth = $(".img-list").innerWidth();
      let goleft = parseInt($(".img-list").css("left"));
      if (goleft < -(ulWidth / 2)) {
        $(".next").off("click");
      } else {
        $(".next").on("click");
        $(".img-list").css("left", goleft - liWidth - 5);
      }
    },
    goright() {
      const liWidth = $($(".img-list li")[0]).outerWidth(true);
      const ulWidth = $(".img-list").innerWidth();
      let goright = parseInt($(".img-list").css("left"));
      if (goright == 0) {
        $(".prev").off("click");
      } else {
        $(".prev").on("click");
        $(".img-list").css("left", goright + liWidth + 5);
      }
    }
  }
};
</script>
   
<style>
.info-body {
  margin-top: 10px;
  background: #f2f2f2;
}

.info-pic {
  padding: 10px;
  background: #fff;
}

.info-pic .info-img {
  width: 100%;
  height: 400px;
}

.info-pic .info-img .show-img {
  width: 100%;
  height: 100%;
}

.info-pic .info-img .show-img img {
  width: 100%;
  height: 100%;
}

.pic-roll {
  background: #fff;
  padding-right: 5px;
}

.img-ul {
  height: 100px;
  overflow: hidden;
  position: relative;
  margin: 20px 0;
  background: #fff;
}

.img-ul .prev,
.img-ul .next {
  position: absolute;
  display: block;
  width: 20px;
  height: 100%;
  background: rgba(153, 153, 153, 0.616);
  color: #fff;
  opacity: 0;
  transition: all 0.2s linear;
  cursor: pointer;
  z-index: 999;
}

.img-ul .next {
  right: 0;
  top: 0;
}

.img-ul span.on {
  opacity: 1;
  transition: all 0.2s linear;
}

.img-ul div {
  position: absolute;
  width: 101px;
  height: 80px;
  margin-right: 5px;
  left: 0;
  top: 10px;
  border: 3px solid #8ab4e8;
  opacity: 0.9;
}

ul.img-list {
  overflow: hidden;
  white-space: nowrap;
  width: auto;
  display: block;
  margin: 10px 0;
  position: absolute;
  left: 0;
}

ul.img-list li {
  width: 100px;
  height: 80px;
  display: inline-block;
  margin-right: 5px;
  box-sizing: border-box;
}

ul.img-list li img {
  width: 100%;
  height: 100%;
}

.info-text {
  padding: 10px;
  background: #fff;
  height: 280px;
  border-bottom: 1px solid rgba(187, 178, 178, 0.699);
}

.info-text h2 {
  margin: 10px 5px 0;
}

.info-text ul {
  display: -webkit-box;
  width: 100%;
  margin: 10px 5px 0;
}

.info-text ul li {
  -webkit-box-flex: 1;
  font-size: 20px;
}

.info-text ul li small {
  font-size: 16px;
}

.info-price {
  width: 100%;
  margin: 10px 5px 0;
}

.info-price span {
  color: #ff403a;
  font-size: 30px;
  font-weight: 700;
}

.info-price div {
  margin-left: 5px;
  font-size: 14px;
}

.info-address {
  margin: 10px 5px 0;
}

.info-address p {
  font-size: 20px;
  overflow: hidden;
}

.info-address small {
  font-size: 16px;
}

.info-address span {
  color: #ff403a;
  font-size: 20px;
  font-weight: 700;
}

.info-tag {
  padding: 10px 0 10px 0;
  width: 100%;
}

.info-tag span {
  font-size: 16px;
  padding: 2px;
  margin: 0 2px;
}

.info-tag span:nth-child(1) {
  color: #c8c11d;
  background: #efeb8f;
}

.info-tag span:nth-child(2) {
  color: #d30600;
  background: #ff716d;
}

.info-tag span:nth-child(3) {
  color: #357dd7;
  background: #b5cff0;
}

.basic-info {
  margin-top: 10px;
  background: #fff;
  padding: 5px;
  height: 250px;
}

.basic-info h2 {
  width: 100%;
}

.basic-info ul {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(187, 178, 178, 0.699);
}

.basic-info ul li {
  width: 50%;
  float: left;
  padding: 5px;
  box-sizing: border-box;
}

.basic-info ul li span {
  box-sizing: border-box;
  padding-right: 15px;
  color: #999;
}

.contact-staff {
  background: #fff;
  padding: 5px 10px;
  margin-top: 10px;
  height: 250px;
}

.contact-staff h2 {
  padding: 5px 0;
  border-bottom: 1px solid rgba(187, 178, 178, 0.699);
}

.contact-staff .contact-staff-box {
  display: -webkit-box;
  text-align: center;
}

.contact-staff .contact-staff-box .staff-item {
  -webkit-box-flex: 1;
  padding: 10px;
}

.contact-staff .contact-staff-box .staff-item img {
  width: 100%;
}

.contact-staff .contact-staff-box .staff-item p {
  text-align: center;
}

.contact-staff .contact-staff-box .staff-item button {
  background: #bff1ff;
  padding: 10px 15px;
  border-radius: 5px;
}

.around-info {
  background: #fff;
}

.around-info h2 {
  padding: 5px;
}

.around-info .baidu-map {
  padding: 10px;
  position: relative;
}

.around-info .baidu-map #baidu-map {
  width: 100%;
  height: 400px;
}

.around-info .baidu-map .map-control {
  position: absolute;
  width: 40%;
  height: 300px;
  right: 20px;
  top: 50px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.15);
  background: #f2f2f2;
}

.around-info .baidu-map .map-control ul {
  width: 100%;
  display: -webkit-box;
}

.around-info .baidu-map .map-control ul li {
  -webkit-box-flex: 1;
  text-align: center;
  background: #f2f2f2;
  padding: 10px 0;
}

.around-info .baidu-map .map-control ul li a {
  text-decoration: none;
}

.around-info .baidu-map .map-control section {
  background: #fff;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  visibility: hidden;
}

.around-info .baidu-map .map-control section ol {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(187, 178, 178, 0.699);
}

.around-info .baidu-map .map-control section ol li {
  float: left;
  padding: 2px 5px;
}

.around-info .baidu-map .map-control section.show {
  visibility: visible;
}

.around-info .baidu-map .map-control div {
  position: absolute;
  top: 90px;
  width: 100%;
  height: 210px;
  overflow: hidden;
  background: #fff;
  padding: 10px;
  overflow-y: scroll;
}

.around-info .baidu-map .map-control div p {
  overflow: hidden;
}

li.act {
  background: #fff !important;
  border-top: 3px solid #8ab4e8;
  color: #8ab4e8;
}

li.act a {
  color: #8ab4e8;
}

.recom-same {
  background: #fff;
}

.recom-same h2 {
  padding: 5px;
}

.house-item {
  margin: 0.5%;
  box-shadow: 0 2px 3px rgba(95, 89, 89, 0.2);
  width: 24%;
  float: left;
  position: relative;
}

.house-item .house-pic {
  width: 100%;
  padding: 10px;
}

.house-item .house-pic img {
  width: 100%;
}

.house-item .house-info {
  width: 100%;
  padding: 0 5px;
}

.house-item .house-info h4 {
  font-size: 16px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: none;
}

.house-item .house-info ul {
  display: -webkit-box;
  padding: 5px 0;
}

.house-item .house-info ul li {
  -webkit-box-flex: 1;
  text-align: center;
}

.house-item .house-info ul li a {
  text-decoration: none;
}

.house-item .house-price {
  background: rgba(95, 89, 89, 0.8);
  position: absolute;
  left: 0;
  top: 60%;
  border-radius: 0 7px 7px 0;
}

.house-item .house-price a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 2px;
}
</style>
