window.addEventListener("scroll",function(){
    var t=document.documentElement.scrollTop||document.body.scrollTop;
    console.log(t);
    if(t>=586){
        document.getElementsByClassName("nav-head")[0].classList.add("follow");
    }else{
        document.getElementsByClassName("nav-head")[0].classList.remove("follow");
    }
})