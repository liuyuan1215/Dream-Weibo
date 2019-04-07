// 轮播图
window.onload = function(){
    var oBox = document.getElementById("box");
    var imgs = oBox.getElementsByTagName("img");
    var lits = oBox.getElementsByTagName("li");
    var timer = null;
    var cur = 0;
    var len = lits.length;

    timer = setInterval( autoPlay,1000 );

    oBox.onmouseover = function(){
        clearInterval( timer );
    }
    oBox.onmouseout = function(){
        timer = setInterval( autoPlay,1000 );
    }
    for( var i =0; i<len; i++ ){
        (function(j){
            lits[j].onclick = function(){
                changePic(j);
                cur = j;
            }
        })(i);
    }

    function autoPlay(){
        cur++;
        if( cur>=len ){ cur = 0 }
        changePic( cur );
    }
    function changePic( curIndex ){
        for( var i= 0;i<len;i++ ){
            imgs[i].className = "unshow";
            lits[i].className = "";
        }
        imgs[curIndex].className = "show";
        lits[curIndex].className = "active";
    }
}