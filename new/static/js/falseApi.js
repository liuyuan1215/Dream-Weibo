var falseApi = {
    list1 : [
        {
            id : 1,
            imgSrc : '',
            content : ''
        },
        {
          id : 2,
          imgSrc : '',
          content : ''
        },
        {
           id : 3,
           imgSrc : '',
           content : ''
        },
        {
           id : 4,
           imgSrc: '',
           content : ''
        },
        {
           id : 5,
           imgSrc : '',
           content : ''
        },
        {
           id : 6,
           imgSrc : '',
           content : ''
        }

    ],
    addImgMessage : function(arr){
       for(var i=0;i<this.list1.length;i++){
         var r = Math.floor(Math.random()*805)
         console.log(r)
          this.list1[i].imgSrc = arr[r].al.picUrl
          this.list1[i].content= arr[r].name
       }
    }
    ,
    getImg : function(callback){
        callback(this.list1)
    }
}