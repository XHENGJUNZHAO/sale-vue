// //小屏幕下拉菜单
// window.onload=function(){
// document.getElementById('show-hide-nav').onclick = function () {
//     let list = document.getElementsByClassName('hide-nav')[0].classList;
//     if (list.length > 1) {
//         document.getElementsByClassName('hide-nav')[0].classList.remove('down');
//     } else {
//         document.getElementsByClassName('hide-nav')[0].classList.add('down');
//     }
// }
// }

// //地区选择框
// $(".project-logo").on("click","small",function (e) {
//     $("#show-city").show();
//     for(let i=0;i<$(".city-tag span").length;i++){
//         if($(this).data("city-code")===$($(".city-tag span")[i]).data("city-code")){
//             $($(".city-tag span")[i]).addClass("chose");
//         }else{
//             $($(".city-tag span")[i]).removeClass("chose");
//         }
//     }
// });



// $(".city-tag span").click(function () {
//     $(".project-logo small").html($(this).html());
//     $(".city-tag span").removeClass("chose");
//     $(this).addClass("chose");
//     let str=$(this).data("city-code");
//     for(let i=0;i<$(".project-logo small").length;i++){
//         $($(".project-logo small")).data("city-code",str);
//     }
//     $("#show-city").hide();
// })

function getCity() {
    //JSONP回调函数
    var url = 'http://api.map.baidu.com/location/ip';
    var data = {
        ak: "dm3gLIHIbAuNoqxfOUxtW8NMSSviW2HE",
        coor: "bd0911",
        callback: 'City'
    }
    //组合url
    var buffer = [];
    for (var key in data) {
        buffer.push(key + '=' + encodeURIComponent(data[key]));
    }
    var fullpath = url + '?' + buffer.join('&');
    CreateScript(fullpath);

    //动态生成script
    function CreateScript(src) {
        var el = document.createElement('script');
        el.src = src;
        el.async = true;
        el.defer = true;
        document.body.appendChild(el);
    }

    //定义回调函数
    function City(rs) {
        var city = rs['content']['address_detail']['city'];
        city = city.toString().substr(0, city.length - 1);
        var city_code = rs['content']['address_detail']['city_code'];
        console.log(rs);
        console.log(city);
        var str = document.querySelectorAll(".project-logo small");
        for (let t = 0; t < str.length; t++) {
            str[t].innerHTML = city;
            str[t].setAttribute("data-city-code", city_code);
        }
        var housename = document.getElementById("house-name");
        housename.setAttribute("placeholder", city);
    }
}
