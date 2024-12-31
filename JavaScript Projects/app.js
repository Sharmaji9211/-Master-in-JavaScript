// console.log("shivam");
// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// let myCreateDate=new Date("2023-02-14")
// console.log(myCreateDate.toDateString());

// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getime())
// console.log(Math.floor(Date.now()/1000));
// console.log(myDate.getTime());
// console.log(myDate.getFullYear())
// console.log(myDate.getMonth()+1)
// console.log(myDate.toLocaleString('default',{
//     weekday:"long",
    
// }))


// const myArr=[ 0,1,5,7,6,"ture", "shivam"]
// const myArr1=[ "ture", "shivam","Kapil ", "Deepak"]
// const myArr2=[ 0,1,5,7,6,"ture", "shivam"]

// console.log(myArr[2]);
// // myArr.push(9);
// console.log(myArr.includes(6));
// console.log(myArr.indexOf(5))
// const newArr= myArr.join();
// console.log(myArr);
// console.log(newArr);

// const marvelHero=["thor","ironman","spiderman"]
// const dcHero=["superman","flash","batman"]
// marvelHero.push(dcHero);
// console.log(marvelHero);
// console.log(marvelHero[3][1])
// const allHero=marvelHero.concat(dcHero);
// // console.log(allHero);
// // console.log(Array.isArray("Shivam"));
// // console.log(Array.from("Shivam"));
// const mySym=Symbol("key1")
// const jsUser= {
//     name : " shivam",
//     age : 18, 
//     [mySym]:"mykey1",
//     location : " bareilly",
//     lastLoginDyas: ["Monday", "Saturday"]
// }
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);
// jsUser.greeting=function(){
//     console.log("hello js user ");
// }
// jsUser.greetingTwo=function(){
//     console.log(`Hello js user ${ this.name}`);
// }

// console.log(jsUser.greeting());

// console.log(jsUser.greetingTwo());

// const tinderUser = new Object()
// // const tinderUser1 = {}

//  tinderUser.id="123abc";
//  tinderUser.name="shivam";

// console.log(tinderUser1)
// console.log(tinderUser)
 
// const regularUser={
//      email: "shiavm@gamil.com",
//      fullname:{
//         userfullnameL :{
//             firstname:"Hitesh",
//             lastname:"choudhary"
//         }
//     //  }
// }
//  console.log(regularUser.fullname.userfullnameL.firstname)
//  console.log(regularUser.fullname.userfullnameL.lastname)
//  const obj1 = {1:"a",2:"b",3:"c"}
//  const obj2 = {5:"e",6:"f",7:"g"}

//  obj3={obj1 ,obj2}
// const obj3=Object.assign({}, obj1,obj2)
// const obj3 = { ...obj1, ...obj2}
//  console.log(obj3)

//  const users=[
//     {
//         id:1,
//         email: "shivam@gmail.com"
//     },
//     {
//         id:2,
//         email: "shivam@gmail.com"
//     },
//     {
//         id:3,
//         email: "shivam@gmail.com"
//     }
//  ]
// console.log(users[0].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('id'))

// const course={
//     coursename:"js in react",
//     price:"999",
//     courseInstructor:'Hitesh'
// }
// const {courseInstructor}= course
// console.log(courseInstructor);
// const{ courseInstructor: CI}= course
//  console.log(CI);

// function addTwoNumber(num1 , num2){
//     const result =num1+num2;
//     return result;
// }

// // addTwoNumber(3,8);
// const result= addTwoNumber(38,23)
// console.log(result);

// const user ={
//     name:"shiva",
//     price:199

// }
// function  calculateCartPrice(user){
// console.log(`user name is ${user.name} and price is ${user.price}`);
// }

// // calculateCartPrice(user);
// calculateCartPrice({
//     name:"rajesh",
//     price:99
// })
 
// const myArrary=[200,300,400,500,600];

// function calculateArray(getArray){
//     return getArray[2];
// }

// // const Array=calculateArray(myArrary);
// // console.log(Array)

// const Array=calculateArray([200,300,400,500,800]);


// console.log(Array)

// falsy value=  
// false,0 ,-0,BigInt 0n,"", null, undefined,NaN

// truthy values
 
//  "0", 'false' ," ",[],{},function();

// nullish caolescing Operator (?? ) : null undefiend 

// let val1;
// val1 = 5??10

// console.log(val1);

// const arr = [1,2,3,4,5];

 //      console.log(num);
     
// }

// const map = new Map()
// map.set('IN' ,'India ')
// map.set('UP' ,'UttarPradesh')
// map.set('UK' ,'UttaraKhand')

// for( const [key,value] of map){
//     console.log(key, ":->" ,value);
    
// }
// const arr3 =[ 1,2,3,4,5,6];

// for (const num of arr3) {
//     console.log(num); 
// }


// const parent =document.querySelector('.parent')
// console.log(parent)

// console.log(parent.children)
// console.log(parent.children[1].innerHTML)

//  const div =document.createElement('div')
//  console.log(div)
//  div.className="shiv"
//  div.id=Math.round(Math.random()* 100+1)
//  div.style.backgroundColor="orange"
//  div.style.padding="12px"
// //  div.innerHTML="Shivam"
//  div.innerText="chai aur code"
// //  const addText= document.createTextNode("chai aur code ")
// //  div.appendChild(addText)
// document.body.appendChild(div)


    
// function addLanguage(langName){
//     const li=document.createElement('li');
//     li.innerHTML=`${langName}`
//     document.querySelector('.lang').appendChild(li)
//   }
//    addLanguage("python");
//    addLanguage("shivam");

   































