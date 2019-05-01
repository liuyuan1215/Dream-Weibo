var arr = [{id:1,title:'niha'},{id:2,title:'nihao1'}]
//返回数组 大于3的数
// 数组过滤的方法 
//回调函数 
// 回调函数中 参数的值
// return 回去的条件
// filter 最后返回一个数组  就是过滤的数组
var i = arr.filter(function(i){
    return i.id>1
})
var abb = [1,2,3,4,5,6]
var a = abb.toString()  // 返回一个由每个值组成的字符串 
var b = abb.valueOf()  // 返回一个数组 也就是一个对象类型
var c = abb.toLocaleString()    //调用 toLocaleString() 也会返回一个字符串 但是 会对数组的每一项调用toLocaleString()

var d = Array.isArray(arr)    //检测数组的方法
// 数组的栈方法 LIFO  last-in-First-out 后进先出
// push方法 可以将任意参数添加到数组的后面  注意  他返回的是数组的长度
var colors = new Array()
var crr = abb.push(7)
//console.log(typeof crr)
var count =colors.push("red","green")
//console.log(count)
//console.log(colors)
//pop 方法 则从数组的末尾移除最后一项 减少数组的长度 然后返回移除的项
var item = colors.pop()
// 数组的队列方法   先进先出 
// 在数组的后面 添加项 push  在数组的前面 移除项shift()
var animals = new Array()
var count1 = animals.push('dog','cat','fish')
var item1 = animals.shift()
// shift 方法 移除数组的第一项 返回移除的项 数组的长度减少一
// ===============================================================================//
//数组的排序的方法
// 重排序
//arr.reverse()   不灵活 出现了sort
//arr.sort()   //  没有改变 出现问题  使用sort的方法一般是传进去一个函数
var compare = function(value1,value2){
    if(value1>value2){
        return -1
    }
     else if(value1<value2){
        return 1
    }
    else{
      return 0
    }
}
abb.sort(compare)
// 一般 compare 的书写方式 是这个的
var compare = function(value1,value2){
    return value2-value1

}
// 数组的slice()  方法  基于当前数组的一个或多个项创建一个新数组   slice() 两个参数   起始  和结束(不包括结束) slice 返回 起始 开始到结束的数组 
//  如果  只有一个参数  及 返回 数组 从开始项 到结束项的数组 
var g = ['a','d','f','g','h','j']
var g1 = g.slice(g)
var g2 = g.slice(1,4)
// slice 不会使原数组发生改变   

// concat 数组的连接    concat 基于当前数组中的所有项 创建一个新数组  这个方法 会先复制一个副本 再将接收到的所有参数 复制到数组的末尾
//var g3 = g.concat('adf','adadf',['dasdad'])

// splice   数组中最强大的方法     可以删除项  替换项 和 插入项 
// 删除  接受两个参数  要删除的第一项的位置和要删除的项数
// 原数组发生改变 
//var g4 = g.splice(1,3)  
// 插入 可以向指定位置插入两项  指定三个参数   
// 返回一个 空数组  为什么会返回一个空数组 因为你没有删除一项   注意splice() 会返回你删除的项
//var g5 = g.splice(1,1,'ggg','ffff') 
// 替换 也是接收三个参数 起始  结束 插入的字符串 

//------------------------------------------------------------------------
// 位置方法 
// indexOf()   和 lastIndexOf()  这两个方法 都接受 两个参数 要查找的项 和要查找的起点位置的索引
// indexOf 从前往后   
// lastIndexOf 从后往前 
//************************************************************ */
//  数组归并的方法 reduce 和 reduceRight 这两种方法 会迭代数组所有项 然后构建一个返回值  
//  接收 4个参数 前一项 当前项 索引 和数组对象 








    



