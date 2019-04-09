var $div1=$('.head');
// var $div2=$('#second');
var $div2=$('#second .elect');
$div1.on('tap',function(){
    var $index=$(this).index();
    $div1.eq($index).addClass('show').siblings().removeClass('show');
    $div2.eq($index).addClass('xian').siblings().removeClass('xian');
    // $div2.eq($index).show().siblings().hide();
})

var $div1=$('.head');
// var $div2=$('#second');
var $div2=$('#second .elect');
$div1.on('click',function(){
    var $index=$(this).index();
    $div1.eq($index).addClass('show').siblings().removeClass('show');
    $div2.eq($index).addClass('xian').siblings().removeClass('xian');
    // $div2.eq($index).show().siblings().hide();
})