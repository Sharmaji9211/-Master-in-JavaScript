

//synchronous-> code will be execute in sequential manner


// alert("synchronous Programming ");

// const sms= function showMessage(){
//     let str="This is a synchronous java script";

//     return str;
    
// }
     

// const error=function showMessage(){
//     let str1="an error occured";
//     return str1;
// }

// console.log(sms());


// callback:passing function as a parameter if there more than one parameter that concept is known as curring

        // const sms1= function showMessage1(callback){
        //     let str="This is a synchronous java script";
        //     let i=0;
        //     if(i==0){ 
        //         console.log("here.."+callback(sms));  
        //     }
        //     return str;
            
        // }
            

        // const error1=function showMessage1(){
        //     let str1="an error occured";
        //     return str1;
        // }

        // console.log(sms1(error1));

//asynchronous-> code will be execute in non-sequential manner
//There are several ways to write asynchronous coding 

    /*
    1.setTimeOut(callback,time)
    2.setInterval(callback,time)
    3.promise((resolve,rejected)=>{}).then((success)=>{print(success)}).catch((err)=>{print(failed)}).     ***resolve->then,reject->catch
    4.async await
    5.fetch()//it will call http methods like : GET,POST,DELETE,PUT,PATCH(update the partial resource),OPTION
    *6.axios();
    *7.Ajax-Asynchronous javascript xml outdated but still used by UIDIA for avoiding recieving uneccesary data to  UIDIA Server
    
    */


    // 1.setTimeOut(callback,time)
    // const assignment1=()=>{
    //     document.write("Asssignments is completed in 1 day~1sec");
    // }
    // const assignment2=()=>{
    //     document.write("Asssignments is completed in 5 day");
    // }
    // const assignment3=()=>{
    //     document.write("Asssignments is completed in 3 day");
    // } 
    // const assignment4=()=>{
    //     document.write("Asssignments is completed in 10 day");
    // }

    // setTimeout(assignment1,1000);
    // setTimeout(assignment2,5000);
    // setTimeout(assignment3,3000);
    // setTimeout(assignment4,100);

    
    // const fBottle=()=>{
    //     document.write("Task1: Bottle filled with water please take it <br>");
    // }

    // const fBucket=()=>{
    //     document.write("Task2: Bucket filled with water please take it <br>");
    // }


    // const ironOnClothe=()=>{
    //     document.write("Task3: IronOnClothe completed <br>");
    // }

    // const cookingFood=()=>{
    //     document.write("Task4: Cooking food to lunch <br>");
    // }

    // const goToMarket=()=>{
    //     document.write("Task5: Go to Market buy vegitables<br>");
    // }

//     document.write("-----------------------------------------------");
//     fBottle();
//     fBucket();
//    document.write("-----------------------------------------------");

//     setTimeout(goToMarket,2000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]

//     setTimeout(fBottle,1500);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]

//     setTimeout(cookingFood,2000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]
    
//     setTimeout(ironOnClothe,2500);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]
    
//     setTimeout(fBucket,3000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]

//     document.write("-----------------------------------------------")
//     ironOnClothe();
//     cookingFood();
//     goToMarket();
//     document.write("-----------------------------------------------");


    //2.setInterval(callback,time)


    
   
//    document.write("-----------------------------------------------");

    // setInterval(goToMarket,10000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]

    // setInterval(fBottle,15000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]

    // setInterval(cookingFood,20000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]
    
    // setInterval(ironOnClothe,25000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]
    
    // setInterval(fBucket,30000);//----------after [Side Stack] calling the api(function) goto --->[Min Stack]

// const age = (a)=>{
//     let age=18;
   
//     if(age<=a){
//         document.write("Drive your Bike "+a)
//     }
//     else{
//         document.write("Not eligible "+a)
//     }

// }
// setTimeout(age(50),1500)
// setInterval(age(12),15000)




   //3.promise()
   //any promise->(fetching data from server)
                        // -resolve
                        //-reject
    //State:
        //1:fulfilled-resolve() handle->await or then().catch()
        //2:pending ->when we don't handle.
        //3:rejected->rejected handle->await or then().catch()
//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.


//  const p1=new Promise((resolve,reject)=>{
//     let i=9;
//         if(i=9){
//              resolve("resolve");
//         }else{
//             reject("failed");
//         }
//    });
//    console.log(p1);

//   const response= p1
//    .then((success)=>{
//          document.write("asynchronus: promise resolved successfully "+success);
//    })
//    .catch((failed)=>{
//          document.write( "asynchronus: promise failed please reload or check your internet "+failed);
//    });
//   document.write("synchronous<br>")
   

// const randomNumberGenerator=new Promise((resolve,reject)=>{
//     const num = Math.floor(Math.random() * 10); // 0 to 9
//     console.log(num);

//     if(num===5 || num===2 || num===6){
//         resolve("you win 1 Rusian ")
//     }else{
//         reject("desi girl for masterbate")
//     }

// });

// console.log(randomNumberGenerator);



//         const r1=randomNumberGenerator.then((fromResolve)=>{
//                     console.log(fromResolve);
//         });

//         r1.catch((fromReject)=>{
//             console.log(fromReject);
//             });



//concept of promise chaining

//promise chaining a draw back to resolved  by  async and await note** one await replace by one then()

// new Promise((resolve, reject) => {
//     resolve(2);
// })
// .then(num => {
//     console.log("Step 1:", num);
//     return num * 2;
// })
// .then(result => {
//     console.log("Step 2:", result);
//     return result + 3;
// })
// .then(final => {
//     console.log("Step 3:", final);
// })
// .catch(err => {
//     console.error("Error:", err);
// });


// function generateNumber() {
//     return new Promise((resolve, reject) => {
//         const num = Math.floor(Math.random() * 10);
//         console.log("Generated:", num);

//         if (num >= 3) {
//             resolve(num);
//         } else {
//             reject("0 1 2 not allowed Number too low!");
//         }
//     });
// }

// generateNumber()
//   .then(num => {
//       console.log("Double it:", num * 2);
//       return num * 2;
//   })
//   .then(doubled => {
//       console.log("Add 5:", doubled + 5);
//       return doubled + 5;
//   })
//   .then(final => {
//       console.log("Final result:", final);
//   })
//   .catch(err => {
//       console.error("❌ Error:", err);
//   });
// -----------------------------------------


// const A = (age) => {
//     return new Promise((valid, invalid) => {
//         if (age >= 18) {
//             valid("Valid Age for drive " + age);
//         } else {
//             invalid("Invalid Age for drive " + age);
//         }
//     });
// };
// // console.log(A(10));


// // First Promise (p1): Check age 20
// p1 = A(20)
//     .then((valid) => {
//         console.log("First check passed:", valid);  // Log the correct result
//         return A(12);  // Chain another promise for check age 12
//     })
//     .catch((invalid) => {
//         console.log("Second check failed:", invalid);
//         document.write("Error in p1: " + invalid + "<br>");
//         return invalid;
//     });

// // // Second Promise (p2): Check age 12 (chained after p1)

// p2=p1.then((valid) => {
//         console.log("Third check passed:", valid);  // Log the correct result
//         return A(30);  // Chain another promise
//     })
//     .catch((invalid) => {
//         console.log("Second check failed:", invalid);  // Handle failure of p2
//         document.write("Error in p2: " + invalid + "<br>");
//         return invalid;
//     });


// // // Third Promise (p3): Check age 30 (chained after p2)
// p3 = p2
//     .then((valid) => {
//         console.log("Third check passed:", valid);  // Log the correct result
//         document.write("Status: " + valid + "<br>");
//         return valid;
//     })
//     .catch((invalid) => {
//         console.log("Third check failed:", invalid);  // Handle failure of p3
//         document.write("Error in p3: " + invalid + "<br>");
//         return invalid;
//     });


// // Log resolved or rejected promises after the chain completes
// p1.finally(() => console.log("p1 resolved/rejected:", p1));
// p2.finally(() => console.log("p2 resolved/rejected:", p2));
// p3.finally(() => console.log("p3 resolved/rejected:", p3));
// -------------------------------------------------------------------

// const A = (age) => {
//     return new Promise((valid, invalid) => {
//         if (age >= 18) {
//             valid("Valid Age for " + age);
//         } else {
//             invalid("Invalid Age for " + age);
//         }
//     });
// };

// // //5.async await

// const checkAges = async () => {
//     try {
//         // First check (age 20)
//         const result1 =  await A(20);
//         console.log("First check passed:", await result1);  // Log result of first check
        
//         // Second check (age 12)
//         const result2 = await A(12);
//         console.log("Second check passed:", await result2);  // Log result of second check

        
//     } catch (error) {
//         // Catch any errors from the promises
//         console.log("An error occurred :", error);
//         document.write("Error: " + error + "<br>");
//     } finally {
//         // Log the completion of the entire process
//         console.log("All checks completed.");
//     }
// };

// // Call the async function
// checkAges();


// -----------------------------------------------------------------------------------------------------



// 6.fetch() API : GET(if not specify then call it by default),POST,PUT,PATCH,DELETE,OPTION

// const fetchData = async () => {
//     try {
//         const response = await fetch('api.json'); // Fetch data from API(It may be any json data or end-point like https://example.com/api/data)
//         const data = await response.json();  // Convert response to JSON
// console.log(data);

// const rootDiv = document.querySelector('.root');  // Select the root div
// rootDiv.style.backgroundColor = 'green';  // Set the background color to black

// data.map(user => {
//     // Create a user card container

//     //  user = { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: { street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {} }, phone: "1-770-736-8031 x56442", website: "hildegard.org", company: { name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets" } };

//     const userCard = document.createElement('div');
//     userCard.classList.add('user-card');  // Add class for styling

//     // Add user data into the card
//     userCard.innerHTML = `
//         <h3>${user.name}</h3>
//         <p><strong>ID:</strong> ${user.id}</p>
//         <p><strong>Email:</strong> ${user.email}</p>
//         <p><strong>City:</strong> ${user.address.city}</p>
//         <p><strong>Street:</strong> ${user.address.street}</p>

//         <p><strong>Coordinates:</strong> Latitude ${user.address.geo.lat}, Longitude ${user.address.geo.lng}</p>
//     `;

//     // Create and append the remove button
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove Card';
//     removeButton.classList.add('remove-btn');  // Add class for styling

//     // Add click event to the button to remove the card
//     removeButton.addEventListener('click', () => {
//         rootDiv.removeChild(userCard);
//     });

//     // Append the button to the user card
//     userCard.appendChild(removeButton);

//     // Append the card to the root div
//     rootDiv.appendChild(userCard);
// });
//     } catch (error) {
//         document.write('Error: ' + error);  // Handle and display any fetch errors
//     }
// };

// fetchData();




//promise with fetch

//    function fetchapi() {
   
//         const response=  fetch("api.json");
        
//         const data=  response.then((res)=>{
//             console.log("json me convert ho gya le bhai "+res);
//             return res.json();
            
//         });
//          data.then((handle_data)=>{
//             console.log(handle_data); 
//         }).catch(err=>{
//             console.log(err);
            
//         })
       
//     }

//   fetchapi();


// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     },
//     body: JSON.stringify({
//       title: "Bhai ka post",
//       body: "Yeh ek naya post hai",
//       userId: 1
//     })
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("POST response:", data);
//     })
//     .catch((err) => {
//       console.error("POST error:", err);
//     });


//     fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         },
//         body: JSON.stringify({
//           id: 1,
//           title: "Updated Title",
//           body: "Yeh pura update hai bhai",
//           userId: 1
//         })
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("PUT response:", data);
//         })
//         .catch((err) => {
//           console.error("PUT error:", err);
//         });


//         fetch("https://jsonplaceholder.typicode.com/posts/1", {
//             method: "PATCH",
//             headers: {
//               "Content-type": "application/json; charset=UTF-8"
//             },
//             body: JSON.stringify({
//               title: "Bas title change kiya"
//             })
//           })
//             .then((res) => res.json())
//             .then((data) => {
//               console.log("PATCH response:", data);
//             })
//             .catch((err) => {
//               console.error("PATCH error:", err);
//             });
          
//             fetch("https://jsonplaceholder.typicode.com/posts/1", {
//                 method: "DELETE"
//               })
//                 .then((res) => {
//                   if (res.ok) {
//                     console.log("DELETE ho gaya bhai, record uda diya 🚮");
//                   } else {
//                     console.log("DELETE request gaya, par kuch dikkat hai:", res.status);
//                   }
//                 })
//                 .catch((err) => {
//                   console.error("DELETE me error aayi:", err);
//                 });

                

//             // fetch("https://jsonplaceholder.typicode.com/posts", {
            //     method: "OPTIONS"
            //   })
            //     .then((res) => {
            //       console.log("OPTIONS headers:", res.headers);
            //       console.log("Allowed methods:", res.headers.get("Allow"));
            //     })
            //     .catch((err) => {
            //       console.error("OPTIONS error:", err);
            //     });
              
  