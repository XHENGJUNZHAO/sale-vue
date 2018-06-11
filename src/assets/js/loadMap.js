function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=dm3gLIHIbAuNoqxfOUxtW8NMSSviW2HE&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;

//地图展示
var bmap = document.getElementById("baidu-map");
function initialize() {
    var mp = new BMap.Map(bmap);
    mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
}

//定位城市
var city=$("")
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.331398,39.897445);
map.centerAndZoom(point,12);

function myFun(result){
	var cityName = result.name;
	map.setCenter(cityName);
	alert("当前定位城市:"+cityName);
}
var myCity = new BMap.LocalCity();
myCity.get(myFun);