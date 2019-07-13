// 引用类型的值(对象) 是引用类型的一个实例  引用类型是一种数据结构 用于将数据和功能组织在一起 
// 基本包装类型 
// string 类型 
// 使用 new操作符创建的引用类型的实例，执行流 离开 当前作用域之前 一直保存在内存里 而自动创建的基本包装类型
//  则 只存在于一行代码的执行瞬间 不能在为他添加属性和方法 
// 对于num 的基本包装类型 
// 可以使用 toString()   像里面传入数字 告诉他会返回几进制的数值得字符串形式 
//  字符串 直接返回长度    .length()
// charAt()   以单字符字符串的形式 返回给定位置的那个字符
// charCodeAt()  返回 字符的编码
//  字符串 连接的方法  且原数组不改变   还可以传多个参数 用，隔开
 var  stringValue = 'hello '
 var result = stringValue.concat('world') 
 //---------------------------------------------------------------//
 // slice() substr() substring() 接收两个参数 起始位置 结束位置  创建新的字符串 原字符串不发生改变
 var str = 'gouzibo 527'
 var s1 = str.slice(3)  // 从索引处开始返回 包括索引 
 var s2 = str.substring(3)     // 从索引处开始返回 包括索引 
 var s3 = str.substr(3)    // 从索引处开始返回 包括索引 
 // 第二个参数 slice() substring()      从索引处开始  包括索引 到索引处结束 不包括索引 就结束了 
 // substr()     从索引处开始返回   第二个参数的个数 
// 如果第一个参数是负数  相当于 字符串的长度 + 这个负数  substr() slice()
// substring()     如果参数是负数  就相当于从0 处返回 
// 如果第二个参数是负数 slice () 转化为 字符串的长度 + 这个负数  
 //   substring   如果第二个参数是负数 那么 就相当于 (0, 第一个参数)
 // 如果 substr 的第二个参数 相当于 返回了0个字符串 
 // 字符串位置的方法  indexOf()   lastIndexOf()   传入一个字符  返回在字符串中的位置 第一种 ->   第二种 <-
 //  如果传第二个参数 相当于 在索引处开始找 
 //  如果没找到就相当于 返回-1

 //  trim  返回一个副本  去掉 开头 和 末尾的空格 
 //  转换大小的方法 toLowerCase() toUpperCase()  toLocalLowerCase() toLocalUpperCase()
//  split  切割字符串 转换成数组 
var string = '123,456,789'
var str1 = string.split(',')


   




 