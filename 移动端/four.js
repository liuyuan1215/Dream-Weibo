// 轮播图
// window.onload = function(){
//     var oBox = document.getElementById("box");
//     var imgs = oBox.getElementsByTagName("img");
//     var lits = oBox.getElementsByTagName("li");
//     var timer = null;
//     var cur = 0;
//     var len = lits.length;

//     timer = setInterval( autoPlay,1500 );

//     oBox.onmouseover = function(){
//         clearInterval( timer );
//     }
//     oBox.onmouseout = function(){
//         timer = setInterval( autoPlay,1500 );
//     }
//     for( var i =0; i<len; i++ ){
//         (function(j){
//             lits[j].onclick = function(){
//                 changePic(j);
//                 cur = j;
//             }
//         })(i);
//     }

//     function autoPlay(){
//         cur++;
//         if( cur>=len ){ cur = 0 }
//         changePic( cur );
//     }
//     function changePic( curIndex ){
//         for( var i= 0;i<len;i++ ){
//             imgs[i].className = "unshow";
//             lits[i].className = "";
//         }
//         imgs[curIndex].className = "show";
//         lits[curIndex].className = "active";
//     }
// }

// 导航
var oWrapper = document.getElementById('wrapper');
var oNavbs = document.getElementById('nav-bs');
var oNavc = document.getElementById('nav-c');
var oRe = document.getElementById('re');

var oNavc1 = document.getElementById('navc1');
var oNavc2 = document.getElementById('navc2');
var oNavc3 = document.getElementById('navc3');
var oNavc4 = document.getElementById('navc4');

var oBack = document.getElementById('back');

// PC
oNavbs.onclick = function(){
    oNavc.style.display='block';
    oWrapper.style.position='absolute';
    oWrapper.style.left='270px';
};
oRe.onclick = function(){
    oNavc.style.display='none';
    oWrapper.style.position='absolute';
    oWrapper.style.left='0';
}
oBack.onclick = function(){
    $('html,body').scrollTop(0);
}
// 移动
oNavbs.tag = function(){
    oNavc.style.display='block';
    oWrapper.style.position='absolute';
    oWrapper.style.left='270px';
};
oRe.tag = function(){
    oNavc.style.display='none';
    oWrapper.style.position='absolute';
    oWrapper.style.left='0';
}

// PC
oNavc1.onclick = function(){
    oNavc.style.display='none';
    oWrapper.style.position='absolute';
    oWrapper.style.left='0';
};
oNavc2.onclick = function(){
    oNavc.style.display='none';
    oWrapper.style.position='absolute';
    oWrapper.style.left='0';
    $('html,body').scrollTop(700);
};
// 移动
oNavc1.tag = function(){
    oNavc.style.display='none';
    oWrapper.style.position='absolute';
    oWrapper.style.left='0';
};
oNavc2.tag = function(){
    oNavc.style.display='none';
    oWrapper.style.position='absolute';
    oWrapper.style.left='0';
    $('html,body').scrollTop(200);
};