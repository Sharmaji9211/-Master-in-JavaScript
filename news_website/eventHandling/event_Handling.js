// const targetBtn_about = document.querySelectorAll('a');
// console.log(targetBtn_about);

// targetBtn_about.forEach(link => {
//     console.log(link);
//     let pageHTML = link.innerText.replace(/\s+/g, '_'); // replaces spaces with underscores
//     let BASE_URL = "http://127.0.0.1:5500/news_website/eventHandling/pages/";

//     link.addEventListener('click', (e) => {
//         e.preventDefault(); // prevent default link behavior

//         window.open(BASE_URL + pageHTML, '_blank'); // open in a new tab
//     });
// });
 


//event: events are the activities perform by the client on the browser for example: keyPress Mouse hove ,long click, onload, movepointer 

//event handler: handle the event  :  addEventListener--:Identify the events and handle the event that's why itis also known as event handler


const cards=document.querySelectorAll('li');
console.log(cards);
const headings=document.querySelectorAll('span');
console.log(headings);
const contents=document.querySelectorAll('p');
console.log(contents);


// cards.forEach(card => {
//     console.log(card);
//     card.addEventListener('click',()=>{
//         console.log("card clicked");
//     })// false is by Default and shows the boubling (propogation) or   apply the event from child to parent
// });

// headings.forEach(heading => {
//     console.log(heading);
//     heading.addEventListener('click',(e)=>{
       
//         console.log("Heading clicked");
//     },false)// false is by Default and shows the boubling (propogation) or   apply the event from child to parent
// });

// contents.forEach(content => {
//     console.log(content);
//     content.addEventListener('click',()=>{
//         console.log("Content clicked");
//     },false)//false is by Default and shows the boubling (propogation) or   apply the event from child to parent
// });



cards.forEach(card => {
    console.log(card);
    card.addEventListener('click',()=>{
        console.log("card clicked");
    },true)// delegation apply the event from parent to child
});

headings.forEach(heading => {
    console.log(heading);
    heading.addEventListener('click',(e)=>{
       
        console.log("Heading clicked");
    },true)//  delegation apply the event from parent to child
});

contents.forEach(content => {
    console.log(content);
    content.addEventListener('click',()=>{
        console.log("Content clicked");
    },true)// delegation apply the event from parent to child
});