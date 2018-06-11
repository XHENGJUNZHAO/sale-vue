//加载百度地图
var bmap = document.getElementById("baidu-map");
function initialize(str) {
    let key = str || "地铁";
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
    local.search(key);
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=dm3gLIHIbAuNoqxfOUxtW8NMSSviW2HE&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;

//地图搜索结果
$(".map-control section a").click(function (e) {
    e.preventDefault();
    initialize($(this).html());
})
//地图ul控件
$(".map-control ul li a").click(function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass("act")) {
        $(this).parent().parent().children("li").removeClass("act");
        $(this).parent().addClass("act");
    }
    let str = $(this).data("name");
    for (let i = 0; i < $(".map-control section").length; i++) {
        if ($($(".map-control section")[i]).data("sname") == str)
            $($(".map-control section")[i]).addClass("show");
        else
            $($(".map-control section")[i]).removeClass("show");
    }
})

//图片滚动
$(".img-ul").hover(
    function () {
        $(this).children("span").addClass("on");
        const liWidth = $($(".img-list li")[0]).outerWidth(true);
        const ulWidth=$(".img-list").innerWidth();
        //var count=1;
        //$(".img-list li:nth-child("+count+")").addClass("on");
        $(".next").unbind("click").click(function (e) {
            e.preventDefault();
            let goleft = parseInt($(".img-list").css("left"));
            if(goleft<-(ulWidth/2)){
                let now=parseInt($(".img-ul div").css("left"))
                if(now>=$(".img-ul").innerWidth()-liWidth){
                    $(".next").off("click");
                }else{
                    $(".next").on("click");                    
                    $(".img-ul div").css("left",now+liWidth+5);
                }
            }else{
                $(".next").on("click");
                $(".img-list").css("left", (goleft - liWidth -5));
            }  
        });
        $(".prev").unbind("click").click(function (e) {
            e.preventDefault();
            let goright = parseInt($(".img-list").css("left"));
            if(goright==0){
                let now=parseInt($(".img-ul div").css("left"));
                if(now==0){
                    $(".prev").off("click");
                }else{
                    $(".prev").on("click");
                    $(".img-ul div").css("left",now-liWidth-5);
                }
            }else{
                $(".prev").on("click");
                $(".img-list").css("left", (goright + liWidth+5));
            }  
        });
    },
    function () {
        $(this).children("span").removeClass("on");
    }
)