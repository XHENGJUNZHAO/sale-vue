<template>
    <div class="baidu-map">
        <div id="baidu-map">
        </div>
        <div class="map-control">
            <ul>
                <!-- <li class="act">
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
                </li> -->
                <li v-for="(tmp,index) in kw" :class="tmp.class">
                    <a href="" @click="keyfor" :data-name='tmp.id'>{{tmp.name}}</a>
                </li>
            </ul>
            <section data-sname="traffic" class="show">
                <ol class="clearfix">
                    <!-- <li>
                        <a href="">地铁</a>
                    </li>
                    <li>
                        <a href="">公交站</a>
                    </li> -->
                       <li v-for="tmp in traffic">
                           <a href="" @click="search">{{tmp}}</a>
                       </li>
                </ol>
            </section>
            <section data-sname="edu">
                <ol class="clearfix">
                    <!-- <li>
                        <a href="">学校</a>
                    </li>
                    <li>
                        <a href="">图书馆</a>
                    </li>
                    <li>
                        <a href="">培训机构</a>
                    </li> -->
                  
                       <li v-for="tmp in edu">
                           <a href="" @click="search">{{tmp}}</a>
                       </li>
             
                </ol>
            </section>
            <section data-sname="fun">
                <ol class="clearfix">
                    <!-- <li>
                        <a href="">美食</a>
                    </li>
                    <li>
                        <a href="">电影院</a>
                    </li>
                    <li>
                        <a href="">广场</a>
                    </li> -->
           
                    <li v-for="tmp in fun">
                        <a href="" @click="search">{{tmp}}</a>
                    </li>
                </ol>
            </section>
            <section data-sname="life">
                <ol class="clearfix">
                    <!-- <li>
                        <a href="">银行</a>
                    </li>
                    <li>
                        <a href="">购物中心</a>
                    </li>
                    <li>
                        <a href="">市场</a>
                    </li> -->
    
                    <li v-for="tmp in life">
                        <a href="" @click="search">{{tmp}}</a>
                    </li>
                </ol>
            </section>
            <div>
                <p id="r-result"></p>
            </div>
        </div>
    </div>
</template>

<script>
import { MP } from "../map.js";
import jquery from "@/assets/js/jquery-3.2.1.js";
export default {
  data() {
    return {
      ak: "dm3gLIHIbAuNoqxfOUxtW8NMSSviW2HE&callback=initialize",
      kw: [
        {
          name: "交通",
          id: "traffic",
          class:"act"
        },
        {
          name: "教育",
          id: "edu"
        },
        {
          name: "娱乐",
          id: "fun"
        },
        {
          name: "生活",
          id: "life"
        }
      ],
      traffic: ["地铁", "公交站"],
      edu: ["学校", "图书馆", "培训机构"],
      fun: ["美食", "电影院", "广场", "公园"],
      life: ["银行", "购物中心", "市场"]
    };
  },
  mounted() {
    this.$nextTick(function() {
      var _this = this;
      MP(_this.ak).then(BMap => {
        this.init();
      });
    });
  },
  methods: {
    init() {
      this.createMap();
      this.setMapEvent();
    },
    createMap(str) {
      let kw=str || '地铁';
      var bmap = document.getElementById("baidu-map");
      var map = new BMap.Map(bmap);
      map.centerAndZoom("广州", 15);
      var options = {
        onSearchComplete: function (results) {
            // 判断状态是否正确
            if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                var s = [];
                console.log(results);
                for (var i = 0; i < results.getCurrentNumPois(); i++) {
                    s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
                }
                document.getElementById("r-result").innerHTML = s.join("<br/>");
            }
        }
    };
    var local = new BMap.LocalSearch(map, options);
    local.search(kw);
    },
    keyfor(e){
        e.preventDefault();
        let el=e.currentTarget;
        if (!$(el).parent().hasClass("act")) {
            $(el).parent().parent().children("li").removeClass("act");
            $(el).parent().addClass("act");
        }
        let str = $(el).data("name");
        for (let i = 0; i < $(".map-control section").length; i++) {
            if ($($(".map-control section")[i]).data("sname") == str)
                $($(".map-control section")[i]).addClass("show");
            else
                $($(".map-control section")[i]).removeClass("show");
        }
    },
    search(e){
       e.preventDefault();
       let el=e.currentTarget;
       let str=$(el).html();
       this.createMap(str);   
    },
    setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
  }
};
</script>

<style>
.baidu-map {
  padding: 10px;
  position: relative;
}

.baidu-map #baidu-map {
  width: 100%;
  height: 400px;
}

.baidu-map .map-control {
  position: absolute;
  width: 40%;
  height: 300px;
  right: 20px;
  top: 50px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.15);
  background: #f2f2f2;
}

.baidu-map .map-control ul {
  width: 100%;
  display: -webkit-box;
}

.baidu-map .map-control ul li {
  -webkit-box-flex: 1;
  text-align: center;
  background: #f2f2f2;
  padding: 10px 0;
}

.baidu-map .map-control ul li a {
  text-decoration: none;
}

.baidu-map .map-control section {
  background: #fff;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  visibility: hidden;
}

.baidu-map .map-control section ol {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(187, 178, 178, 0.699);
}

.baidu-map .map-control section ol li {
  float: left;
  padding: 2px 5px;
}

.baidu-map .map-control section.show {
  visibility: visible;
}

.baidu-map .map-control div {
  position: absolute;
  top: 90px;
  width: 100%;
  height: 210px;
  overflow: hidden;
  background: #fff;
  padding: 10px;
  overflow-y: scroll;
}

.baidu-map .map-control div p {
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
</style>

