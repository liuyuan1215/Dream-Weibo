// 轮播图
window.onload = function () {
    var oBox = document.getElementById("box");
    var imgs = oBox.getElementsByTagName("img");
    var lits = oBox.getElementsByTagName("li");
    var timer = null;
    var cur = 0;
    var len = lits.length;

    timer = setInterval(autoPlay, 1500);

    oBox.onmouseover = function () {
        clearInterval(timer);
    }
    oBox.onmouseout = function () {
        timer = setInterval(autoPlay, 1500);
    }
    for (var i = 0; i < len; i++) {
        (function (j) {
            lits[j].onclick = function () {
                changePic(j);
                cur = j;
            }
        })(i);
    }

    function autoPlay() {
        cur++;
        if (cur >= len) { cur = 0 }
        changePic(cur);
    }
    function changePic(curIndex) {
        for (var i = 0; i < len; i++) {
            imgs[i].className = "unshow";
            lits[i].className = "";
        }
        imgs[curIndex].className = "show";
        lits[curIndex].className = "active";
    }
}

// 导航
var oWrapper = document.getElementById('wrapper');
var oNavbs = document.getElementById('nav-bs');
var oNavc = document.getElementById('nav-c');
var oRe = document.getElementById('re');

var oNavc1 = document.getElementById('navc1');
var oNavc2 = document.getElementById('navc2');
var oNavc3 = document.getElementById('navc3');
var oNavc4 = document.getElementById('navc4');

var oNavone = document.getElementById('nav-one');
var oNavtwo = document.getElementById('nav-two');
var oNavthree = document.getElementById('nav-three');
var oNavfour = document.getElementById('nav-four');

var oBack = document.getElementById('back');

// PC
oNavbs.onclick = function () {
    oNavc.style.display = 'block';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '250px';
};
oRe.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
}
oBack.onclick = function () {
    $('html,body').scrollTop(0);
}
// 移动
oNavbs.tag = function () {
    oNavc.style.display = 'block';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '250px';
};
oRe.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
}

// PC
oNavc1.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
};
oNavc2.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(900);
};
oNavtwo.onclick = function () {
    $('html,body').scrollTop(900);
};
oNavc3.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(1300);
};
oNavthree.onclick = function () {
    $('html,body').scrollTop(1300);
};
oNavc4.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(1600);
};
oNavfour.onclick = function () {
    $('html,body').scrollTop(1600);
};
// 移动
oNavc1.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
};
oNavc2.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(600);
};
oNavc3.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(1000);
};
oNavc4.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(1200);
};

// 钟表
var oDial = document.getElementById("dial");
var oHour = document.getElementById("hour");
var oMinute = document.getElementById("minute");
var oSecond = document.getElementById("second");
var lis = "";
for (var i = 0; i < 60; i++) {
    /*var oLi = document.createElement("li");
    oDial.appendChild(oLi);*/
    lis += "<li style='transform: rotate(" + i * 6 + "deg);'></li>";
}
oDial.innerHTML = lis;

run();

setInterval(run, 1000);

function run() {
    var now = new Date();
    var second = now.getSeconds();
    var minute = now.getMinutes() + second / 60;
    var hour = now.getHours();//+ minute / 60
    oHour.style.transform = "rotate(" + (hour * 30 + minute / 60 * 30) + "deg)";
    oMinute.style.transform = "rotate(" + minute * 6 + "deg)";
    oSecond.style.transform = "rotate(" + second * 6 + "deg)";
}

var box3 = document.getElementsByClassName("box3")[0];
var oDiv = document.createElement('div');
var myClock = function () {
    var Day = new Date();
    var year = Day.getFullYear();
    var month = Day.getMonth();
    var data = Day.getDate();
    var day = Day.getDay();
    var hour = Day.getHours();
    var minu = Day.getMinutes();
    var second = Day.getSeconds();
    month = month + 1;
    var str = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = str[day];
    var time = year + "年" + month + "月" + data + "日" + " " + week + " " + hour + " ：" + minu + "：" + second;
    oDiv.innerHTML = time;
}
setInterval(function () {
    myClock();
}, 1000);
box3.appendChild(oDiv);

// var oTest = document.getElementsByClassName('test')[0];
// setTimeout(function () {
//     oTest.style.display = 'none';
// }, 2500)
