export default function (){
   let arr=[1,2,3].map((item,index)=>{
       console.log(item)
        return item
    })
    console.log(arr)

    //filter过滤里面数组
    // return 如果是true，当前遍历到的元素保留。如果是false，元素移出
    let arr1=[1,2,3].filter((item,index)=>{
        //return true
        return item>1 //输出大于1后面的数组
    })
  //  console.log(arr1)


    //some 返回一个布尔值，true或者false
    //只要一个条件为true，就会返回true
    let arr2=[1,2,3,4].some((item,index)=>{
        return item>2
    });
    //console.log(arr2)


    //some 返回一个布尔值，true或者false
    //只要一个条件为false，就会返回false
    let arr3=[1,2,3,4].every((item,index)=>{
        return item>2
    });
    //console.log(arr3)

    let arr4=[1,2,3,4].reduce((accu,item,index)=>{
        if(item>1)accu.push(item)
        return accu
    },[]);
  //  console.log(arr4)
}