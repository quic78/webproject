window.onload=function(){
    var imglist = document.querySelectorAll('.banner-imglist>li');
    var lrbtn = document.querySelectorAll('.banner-lrbtn>li');
    var xbtn = document.querySelectorAll('.banner-xbtn>li');
    var index =0;
    var dingshiqi;
    zidong();
    lrclick();
    xbtnclick();
    function zidong(){
        dingshiqi=setInterval(function(){
            index++;
            if(index==imglist.length){
                index=0;
                qiehua(index);
            }
            else{
                qiehua(index);
            }
        },3000);
    }
    function qiehua(index){
        imglist.forEach(function(val,i){
            val.style.cssText="opacity: 0;z-index: 0;";
            xbtn[i].style.cssText="background:none;";
        });
        imglist[index].style.cssText="opacity: 1;z-index: 1;";
        xbtn[index].style.cssText="background:#fff;";
    }
    function lrclick(){
        lrbtn[0].onclick=function(){
            clearInterval(dingshiqi);
            index--;
            if(index<0){
                index=imglist.length-1;
                qiehua(index);
            }else{
                qiehua(index);
            }
            zidong();
        };
        lrbtn[1].onclick=function(){
            clearInterval(dingshiqi);
            index++;
            if(index==imglist.length){
                index=0;
                qiehua(index);
            }else{
                qiehua(index);
            }
            zidong();
        };
    }
    function xbtnclick(){
        xbtn.forEach(function(val,i){
            val.onclick=function(){
                clearInterval(dingshiqi);
                index=i;
                qiehua(index);
                zidong();
            }
        });
    }
}