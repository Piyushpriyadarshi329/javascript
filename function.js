

// function fun1(a,b,...c){

// console.log("fun call",a,b,c)

// // console.log(a.reduce((acc,cur)=>acc+cur,0))


// }


// fun1(1,2,3,4,6,56,78)

// fun1(1,3,6,8)

// fun1(1,2)


// let arr=[1,2,3]

// console.log(...arr)


// function sum(a,b){


//     // console.log(a+b)
//     return a+b
// }

//   let result= sum(2,4)


//   console.log(result)


// const sum =(a,b)=>{

// return a+b

// }

// const sum =(a,b)=> a+b

//   let result= sum(2,4)

//   console.log("result",result)



let list=[

{name:"apple",price:100,qty:4},//==>400
{name:"rice",price:30,qty:3},//==> 90
{name:"potato",price:20,qty:4},//==>80

]

//==>>570



const Price=list.reduce((acc,cur)=> acc+(cur.price*cur.qty) ,0)


//   0==>400==>490==>570

console.log(Price)


