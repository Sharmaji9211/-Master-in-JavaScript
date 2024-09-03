//1 core javacript

//------>Variables<--------

function fun(){
  let one = 1; //block level scope
var two = 2; //global scope
const three = 3; //cant be redefined
console.log(one);
console.log(two);
console.log(three);

console.log(""+one + two + three);

alert(""+one+two+three);


let ad = "Admin";
alert(`Welcome ${ad} to js course`); //back tick(` `) for inserting variable into string //${} ---> Template literal --> can be used inside backtick only

//------->Datatypes<--------

// null
// undefined
// Number
// String
// Boolean
// BigInt
// Symbol
// Object

let number=null;// it can be assign later
let x;//undefined
let y=12;
let name="js"; //string
let flag=true; //boolean
const bgint=223456547768568; //big int (extra long integer value)
let sy='@'; //symbol
console.log(x);//undefined

const person1 = {Fname:"Ashu", lname:"Yadav", eyecolor:"black"}; //object person={name:value} has 3 properties -> lname,fname,eyecolor
const person2 = {Fname:"Brijesh", lname:"Nishad", eyecolor:"blue"}; //object person={name:value} has 3 properties -> lname,fname,eyecolor
const person3 = {Fname:"Shiv", lname:"Sharma", eyecolor:"brown"}; //object person={name:value} has 3 properties -> lname,fname,eyecolor


let users = [person1,person2,person3] //array of objects //json objects
console.log(person1.Fname +"\n"+ person2.Fname +"\n"+person3.Fname);

console.log(users)

let Users=[
    {
      "id": 1,
      "firstname": "John",
      "lastname": "Doe",
      "email": "johndoe@example.com",
      "birthDate": "1973-01-22",
      "login": {
        "uuid": "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
        "username": "johndoe",
        "password": "jsonplaceholder.org",
        "md5": "c1328472c5794a25723600f71c1b4586",
        "sha1": "35544a31cc19bd6520af116554873167117f4d94",
        "registered": "2023-01-10T10:03:20.022Z"
      },
      "address": {
        "street": "123 Main Street",
        "suite": "Apt. 4",
        "city": "Anytown",
        "zipcode": "12345-6789",
        "geo": {
          "lat": "42.1234",
          "lng": "-71.2345"
        }
      },
      "phone": "(555) 555-1234",
      "website": "www.johndoe.com",
      "company": {
        "name": "ABC Company",
        "catchPhrase": "Innovative solutions for all your needs",
        "bs": "Marketing"
      }
    },
    {
      "id": 2,
      "firstname": "Jane",
      "lastname": "Smith",
      "email": "janesmith@example.com",
      "birthDate": "1983-02-22",
      "login": {
        "uuid": "2a0eed02-9430-4d68-901f-c0d4c1c3bf22",
        "username": "janesmith",
        "password": "jsonplaceholder.org",
        "md5": "c1328472c5794a25723600f71c1b4586",
        "sha1": "35544a31cc19bd6520af116554873167117f4d94",
        "registered": "2022-06-10T12:45:20.022Z"
      },
      "address": {
        "street": "456 Oak Street",
        "suite": "Suite 200",
        "city": "Anytown",
        "zipcode": "12345-6789",
        "geo": {
          "lat": "42.3456",
          "lng": "-71.6789"
        }
      },
      "phone": "(555) 555-5678",
      "website": "www.janesmith.com",
      "company": {
        "name": "XYZ Corporation",
        "catchPhrase": "Leading the way in innovation",
        "bs": "Finance"
      }
    },
    {
      "id": 3,
      "firstname": "Bob",
      "lastname": "Johnson",
      "email": "bobjohnson@example.com",
      "birthDate": "1974-11-12",
      "login": {
        "uuid": "3a0eed11-9430-4d68-901f-c0d4c1c3bf12",
        "username": "bobjohnson",
        "password": "jsonplaceholder.org",
        "md5": "c1328472c5794a25723600f71c1b4586",
        "sha1": "35544a31cc19bd6520af116554873167117f4d94",
        "registered": "2022-06-10T12:45:20.022Z"
      },
      "address": {
        "street": "789 Elm Street",
        "suite": "Apt. 100",
        "city": "Anytown",
        "zipcode": "12345-6789",
        "geo": {
          "lat": "42.5678",
          "lng": "-71.1234"
        }
      },
      "phone": "(555) 555-9012",
      "website": "www.bobjohnson.com",
      "company": {
        "name": "Acme Corporation",
        "catchPhrase": "Your trusted partner",
        "bs": "Manufacturing"
      }
    },
    {
      "id": 4,
      "firstname": "Emily",
      "lastname": "Davis",
      "email": "emilydavis@example.com",
      "birthDate": "1974-11-30",
      "login": {
        "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
        "username": "emilydavis",
        "password": "jsonplaceholder.org",
        "md5": "c1328472c5794a25723600f71c1b4586",
        "sha1": "35544a31cc19bd6520af116554873167117f4d94",
        "registered": "2022-07-10T11:21:20.033Z"
      },
      "address": {
        "street": "321 Maple Street",
        "suite": "Apt. 50",
        "city": "Anytown",
        "zipcode": "12345-6789",
        "geo": {
          "lat": "42.9012",
          "lng": "-71.5678"
        }
      },
      "phone": "(555) 555-3456",
      "website": "www.emilydavis.com",
      "company": {
        "name": "GHI Corporation",
        "catchPhrase": "Your success is our priority",
        "bs": "Consulting"
      }
    },
    {
      "id": 5,
      "firstname": "William",
      "lastname": "Brown",
      "email": "williambrown@example.com",
      "birthDate": "1974-11-22",
      "login": {
        "uuid": "5a0eed11-9430-4d68-901f-c0d4c1c3bf22",
        "username": "williambrown",
        "password": "jsonplaceholder.org",
        "md5": "c1328472c5794a25723600f71c1b4586",
        "sha1": "35544a31cc19bd6520af116554873167117f4d94",
        "registered": "2021-02-10T10:38:03.030Z"
      },
      "address": {
        "street": "567 Pine Street",
        "suite": "Apt. 2",
        "city": "Anytown",
        "zipcode": "12345-6789",
        "geo": {
          "lat": "42.6789",
          "lng": "-71.9012"
        }
      },
      "phone": "(555) 555-6789",
      "website": "www.williambrown.com",
      "company": {
        "name": "JKL Industries",
        "catchPhrase": "Quality products for a better world",
        "bs": "Engineering"
      }
    }
]
console.log(
   "id : "+ Users[0].id +"\n"+
    "First Name : "+Users[0].firstname+"\n"+
    "Last Name : "+Users[0].lastname+"\n"+
    "Birth Date : "+Users[0].birthDate+"\n"+
    "E-mail : "+Users[0].email+"\n"+
    "Uuid : "+Users[0].login.uuid+"\n"+
    "UserName : "+Users[0].login.username+"\n"+
    "Password : "+Users[0].login.password+"\n"+
    "Md5 : "+Users[0].login.md5+"\n"+
    "sha1 : "+Users[0].login.sha1+"\n"+
    "Registered : "+Users[0].login.registered+"\n"+
    "Phone : "+Users[0].phone+"\n"+
    "Website : "+Users[0].website+"\n"+
    "Company Name : "+Users[0].company.name+"\n"+
    "Company Cacth Phrase : "+Users[0].company.catchPhrase+"\n"+
    "BS : "+Users[0].company.bs+"\n"+

    "---------------------------------------------------------------"+"\n"+
    "id : "+ Users[1].id +"\n"+
    "First Name : "+Users[1].firstname+"\n"+
    "Last Name : "+Users[1].lastname+"\n"+
    "Birth Date : "+Users[1].birthDate+"\n"+
    "E-mail : "+Users[1].email+"\n"+
    "Uuid : "+Users[1].login.uuid+"\n"+
    "UserName : "+Users[1].login.username+"\n"+
    "Password : "+Users[1].login.password+"\n"+
    "Md5 : "+Users[1].login.md5+"\n"+
    "sha1 : "+Users[1].login.sha1+"\n"+
    "Registered : "+Users[1].login.registered+"\n"+
    "Phone : "+Users[1].phone+"\n"+
    "Website : "+Users[1].website+"\n"+
    "Company Name : "+Users[1].company.name+"\n"+
    "Company Cacth Phrase : "+Users[1].company.catchPhrase+"\n"+
    "BS : "+Users[1].company.bs
)
let new_user=[]
new_user = [...new_user,Users] //(...)-->Spread operator
console.log(new_user)

//operators(+,-,*,/,%,++,--,=,!=,==,===)

let a,b,c,d,e,f,g
a= prompt("Enter a ")
b= prompt("Enter b ")
c= prompt("Enter c ")
d= prompt("Enter d ")
e= prompt("Enter e ")
f= prompt("Enter f ")
g= prompt("Enter g ")
console.log(a==b)
console.log(a!=b)
console.log(a===b)
let cmpx = (--a) + (b--) - c * (d / e) + (++f % g++) 


console.log(cmpx)

//ternary operator
 //cond?iftrue:iffalse

  // statements in js
 

let st1,st2,st3;
st1 = parseInt(prompt("Enter st1"))
// confirm(`is ${st1} correct?`)
st2 = parseInt(prompt("Enter st2"))
st3 = parseInt(prompt("Enter st3"))


if (st1>st2 && st1>st3){
  console.log("st1 is greater ",st1)
}
else if(st2>st1 && st2>st3){
  console.log("st2 is greater ",st2)
}
else{
  console.log("st3 is greater ",st3)
}

const s=(st1<st2 && st1<st3)?st1
:((st2<st1 && st2<st3)?st2:st3)

console.log(s)
const op = prompt("Enter a operator + - / *")
switch(op){
  case "+" : console.log(st1 + st2)
             break
  case '-' : console.log(st1 - st2)
             break
  case '*' : console.log(st1 * st2)
             break
  case '/' : console.log(st1 / st2)
             break 
  default : console.log("Please choose correct opr")
}

//-----Loops and Iterations-----

do{
  document.writeln(st1+st2,"<br>")
  st1--
}
while(st1>st2)

while(st1<st2)
{
  document.write(st1++,"<br>");
}

for(let i=1;i<=5;i++){
  for(let j = 1;j<=i;j++){
    document.write("*")
  }
  document.write("<br>")
}

let data = {fname:"brijesh",lname:"nishad",color:"pink"}

  document.write(data.fname+"<br>")
  document.write(data.lname+"<br>")
  document.write(data.color+"<br>")

  let arrayList=[{name:"demo0",age:20},{name:"demo1",age:50},{name:"demo2",age:45}]

for (let index = 0; index < arrayList.length; index++) {
  const element = arrayList[index]
  document.write(element.name);
  document.write(element.age)
  
}
}
//fun();
// function in javascript

// 1. normal function

function fun1(){
  document.write("function 1 envoked ")
}
//fun1();
function even(n){
  var c1=0,c2=0;
  for(let i=0;i<n;i++){
    if(i%2==0){
      document.write(`${i}: even<br>`);
      c1++;
     }
     else{
      document.write(`${i}: odd<br>`);
      c2++;
     }
  }
  document.write("even num "+c1);
  document.write("odd num"+c2);
}

//even(50);


function show_User(n1,n2){
  const obj1={fname: n1 ,lname: n2}

  document.write(obj1.fname);
  document.write(obj1.lname);
}
//show_User("shivam ","sharma");
//show_User("Deepak ","sharma");
//show_User("Rajesh ","sharma");

function branches(){
const shiv=[{branch:"cse",namee:"briju"},{branch:"Iot",namee:"gullu"},{branch:"Aiml",namee:"balllu"}]
for(let i=0;i<shiv.length;i++){
 let obj=shiv[i];
 document.write(obj.branch)
 document.write("<br>")
 document.write(obj.namee)
}
}
//branches();
function  branches2(){
  const array=[{branch:"cse",namee:"briju"},{branch:"Iot",namee:"gullu"},{branch:"Aiml",namee:"balllu"}]
   array.forEach(object=> {
    document.write(object.branch);
    document.write("<br>");
    document.write(object.namee);
   });

  }
 // branches2();

// 2. function expression
 const My_branch= function branches3(n5){
   return (n5*n5*n5);
 };
 


const PrintCube=function Cube(){
document.write(My_branch(10));
};

// PrintCube();
// 3. arrow function is  anonymous function
// const My_branchr=(n5)=>{
//   return (n5*n5*n5);
// }


//This is callback function.
// const PrintCubee=()=>{
// document.write(My_branch(10));
// };

// PrintCubee();

// 4. immediate function
// (pass an anonymus function)();
// (()=>{
//   document.write(My_branch(10));
//   })();


  

//oops in javascript
//-------------feature------
/*
1. Class(class is a blueprint of objescts or entity) 
2. Object(Object is a instances or refrence for any class )
-------------feature of object----
          1. encapsulation(we binding the data member, method of a class in single unit )
          2. Abstraction(provide the functionlity,security and hide complexcity )note ** to achieve the abstraction we use setter getter method
          3. Inheritence(inheritence is a mechanism to create new from old class (parent class ) with existing feature of super class (parent class ))
          4. Polymorphism(Many bhaviour of same name entity OR many form doing a job EX. All the verbs behave like polymorphism)
         ADD ON FEATURES  in JS
          5.Composition ( is a desing principle where a brand class is composed (created) by one or more than one obj from other class ) NOTE OBJECT CAN WE REUSED AND FLEXIBLE DESIGN
          6.Aggregation (has a relation)NOTE  we create a obj of any class in other class 
          */

          //CLASS
          
          class iot{
            // data member (variables)
            a=5;
            b=5.1100;
            c='A';
            d="ss";
            // constructor
            constructor(name){
              this.name=name;
              console.log(this.a);
              console.log(this.b);
              console.log(this.c);
              console.log(this.d);
              console.log(name);
            }
            // method 
            fun2(na){
              console.log("fun2 invoked"+na);
            }
           
          }//encpsulated

// OBJECT 
 // Myiot=new iot("shivam");//object creation
// Myiot.fun2(Myiot.name);// member access


//Abstration
// class Mylocker{
//       #_PAISA;
//       #JEWER;
//       #DOCUMENTS;
//       #IMAGES;
//       setPAISA(RS){
//           this.PAISA=RS;
//       }
//       setJEWER(JW){
//         this.JEWER=JW;
//     }
  
//     setDOCUMENTS(DC){
//       this.DOCUMENTS=DC;
//   }

//   setIMAGES(IM){
//     this.IMAGES=IM;
// }

// getPAISA(){
//   return this.PAISA;
// }
// getJEWER(){
// return this.JEWER;
// }

// getDOCUMENTS(){
// return this.DOCUMENTS;
// }

// getIMAGES(){
// return this.IMAGES;
// }
// }
// const openlocker=()=>{
//   lokersbi =new Mylocker()
//   //document.write(lokersbi.PAISA);
//   lokersbi.setPAISA(1000);
//   lokersbi.setJEWER("CHAIN");
//   lokersbi.setDOCUMENTS("10TH");
//   lokersbi.setIMAGES("BHABHI");
//  const rss= lokersbi.getPAISA();
//  const jwers= lokersbi.getJEWER();
//  const docu= lokersbi.getDOCUMENTS();
//  const img= lokersbi.getIMAGES();
//  document.write(
//   `<style>
//         body{
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             margin-top:100px;
//         }
//         .container ul{
//             background-color: rgb(218, 212, 223);
//             width: 250px;
//             padding: 20px;
//             border: 2px dotted black;
//             list-style: none;
//             display: flex;
//             flex-direction: column;
//             gap: 5px; 
//             box-shadow: 10px 10px 2px 1px rgba(64, 66, 63, 0.226);

//         }
//         h1{
//             background-color: yellowgreen;
//             width: 290px;
            
//         }
       
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>Locker</h1>
//         <ul class="locker">
            
//             <li>PAISA==${rss}</li>
//             <li>JEWER==${jwers}</li>
//             <li>DOCUMENTS==${docu}</li>
//             <li>IMAGES==${img}</li>
//         </ul>
//     </div>
// </body>
// </html>`
//  )
// }
//  const password=parseInt(prompt("Enter your password"));

//  if(password===12345){
//   openlocker();
//  }
//  else{
//   alert("Incorrect Password");
//  }


//-----------Inheritence---------
// class Adv_locker extends Mylocker{
//   #iphone
//   #video
//   #casefile

//   setData(mini,vid,file){
//     this.iphone=mini;
//     this.video=vid;
//     this.casefile=file;
//   }
//   getData(){
//    return ("<br>Iphone=="+this.iphone+"<br>My Video=="+this.video+"<br>Case file=="+this.casefile);
//   }

// }
// const openAdv_locker= ()=>{
//   const lockerpnb= new Adv_locker();
//   const rsss= lockerpnb.getPAISA();
//    const jwerss= lockerpnb.getJEWER();
//    const docuu= lockerpnb.getDOCUMENTS();
//    const imgg= lockerpnb.getIMAGES();
//    lockerpnb.setData(15,"myvideo","casefile");
//    const Avd_lockerdata=lockerpnb.getData();
//    document.write(
//     `<style>
//           body{
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               margin-top:100px;
//           }
//           .container ul{
//               background-color: rgb(218, 212, 223);
//               width: 250px;
//               padding: 20px;
//               border: 2px dotted black;
//               list-style: none;
//               display: flex;
//               flex-direction: column;
//               gap: 5px; 
//               box-shadow: 10px 10px 2px 1px rgba(64, 66, 63, 0.226);
//           }
//           h1{
//               background-color: yellowgreen;
//               width: 290px;
//           }
//       </style>
//   </head>
//   <body>
//       <div class="container">
//           <h1>Advance Locker</h1>
//           <ul class="locker">
              
//               <li>PAISA==${rsss}</li>
//               <li>JEWER==${jwerss}</li>
//               <li>DOCUMENTS==${docuu}</li>
//               <li>IMAGES==${imgg}</li>
//               <li>Adv_locker_Data<hr><br>${Avd_lockerdata}</li>
//           </ul>
//       </div>
//   </body>
//   </html>`
//    )
//  }

//  const pass=parseInt(prompt("Enter your advance locker password"));
//  if(pass===123456){
//   openAdv_locker();
//   console.log("success login")
//  }else{
//   alert("Wrong password");
//  }



//------------Polymorphism---------
//overloading
// class Automatic_on_off_system{
//      //light*4
//      //fan*2
//      //cooler*1
//      //exhuast fan*1

//      //method overloading using spread operator
//      Light(...agrs){
//       if(agrs.length==1){
//           document.write("light1 is open<br>");
//       }
//       else if(agrs.length==2){
//         document.write("light2 from right is open<br>");
//       }
//       else if(agrs.length==4){
//         document.write("light3 from right is open<br>");
//       }
//       else if(agrs.length==3){
//         document.write("light4 from middle is open<br>");
//      }
//     }
//     fan(...agrs){
//       if(agrs.length==1){
//           document.write(`fan1 is open: <img width="30px" height="30px " style="border-radius:100%" src="./pic.jpg" <br>`);
//       }
//       else if(agrs.length==2){
//         document.write("<br>fan2 from right is open<br>");
//       }
//     }
//     //overloading with same number of parameter with different type parameter and same name method
//     cooler(param1,param2){
     
//       if(typeof param1=="number" && param2=="String"){
//         document.write("cooler is open<br>");
//     }
//   }
//     exhaust_fan(param){

//       if(typeof param=="object")
//       document.write(" exhaust_fan is open"+param.name);
//       else
//       document.write("Invalid parameter");
//     }
//   }

//  const AOS=new Automatic_on_off_system();
//  AOS.Light(1);
//  AOS.Light(2,"RIGHT");
//  AOS.Light(3,5.11,"right",22);
//  AOS.Light(4,"LEFT","RIGHT");
//  AOS.fan(1);
//  AOS.fan(2,"FAN2");
//  AOS.cooler(20,"myPara");
//  AOS.exhaust_fan({name:"Brijesh"});


//runtime polymorphism


class Btech{
  add(a,b){
    let y=a*b;//**OLD LOGIC */
    document.write(y);
  }
}
class CSE extends Btech{
    add(c,d){
      let x=c-d;//**NEW  LOGIC */
      document.write(x);
    }
}
class IOT extends Btech{
  add(c,d){
    let x=c+d;//**NEW  LOGIC */
    document.write(x);
  }
}
// const Mycourse=new IOT();
// Mycourse.add(7,9);
// Mycourse.add(5,8);

 
class Manager{
   Website(){
      throw new Error("Website must be implement and override create updated website");
   }
}

class devloper1 extends Manager {
  Website(){
    document.write("derveloper 1 create website with updated feature in 2016");

  }
}

class devloper2 extends Manager {
  Website(){
    document.write("derveloper 2 create website with updated feature in 2020");

  }
}

class devloper3 extends Manager {
  Website(){
    document.write("derveloper 3 create website with updated feature in 2024");

  }
}

const  webApp=new  devloper3 ();
webApp.Website();
  















//2. Advanced Asynchronus javascript:


//3. Apihandling

//4. project



