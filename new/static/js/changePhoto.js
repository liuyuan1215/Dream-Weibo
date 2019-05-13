var ilPhoto = document.getElementsByClassName('il')
var ilPoint = document.getElementsByClassName('point')
var index = 0;
var clearClassName = function () {
    for (let i = 0; i < ilPhoto.length; i++) {
        ilPhoto[i].className = 'il'
    }
    for (let i = 0; i < ilPhoto.length; i++) {
        ilPoint[i].className = 'point'
    }
}
var addClassName = function () {
    if (index < ilPhoto.length) {
        clearClassName()
        ilPhoto[index].className = 'il active';
        ilPoint[index].className = 'point active'
        index++;
    }
    else {
        index = 0
        clearClassName()
        ilPhoto[index].className = 'il active'
        ilPoint[index].className = 'point active'
        index++
    }
}
var handleClick = function () {
    for (var i = 0; i < ilPoint.length; i++) {
        ilPoint[i].addEventListener('click', function () {
            var dataName = this.getAttribute('data-index')
               clearClassName()
               index = dataName
              ilPhoto[index].className = 'il active'
              ilPoint[index].className = 'point active'
        })
    }
}

setInterval(() => {
    addClassName()
}, 2500)
// var index = 0;
// var otherIndex = -1
// var clearClassName = function(){
//     if(otherIndex==-1) return 
//    if(otherIndex<ilPhoto.length){
//        ilPhoto[otherIndex].className = 'il'
//        console.log(otherIndex)
//        otherIndex++ 

//    }
//    else{
//     otherIndex = 0
//    } 

// }

// var addClassName = function(){
//     clearClassName()
//     if(index<ilPhoto.length){
//        ilPhoto[index].className = 'il active'
//         index++
//         if(otherIndex==-1){
//             otherIndex= otherIndex+1
//         }

//     }
//     else {
//         index=0
//     }
// }
// setInterval(()=>{
//   addClassName()
// },1000)