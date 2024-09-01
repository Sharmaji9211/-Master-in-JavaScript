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
show_User("shivam ","sharma");
show_User("Deepak ","sharma");
show_User("Rajesh ","sharma");

// 2. function expression



// 3. arrow function anonymous function


// 4. immediate function

//class object in javascript


//Dom manupulation

//2. Advanced Asynchronus javascript:


//3. Apihandling

//4. project



