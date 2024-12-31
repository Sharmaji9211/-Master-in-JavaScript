const RandomColor= function(){
    const hex='0123456789abcdef';
    let color= '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
// console.log(RandomColor());
let intervalId;
const startChangingColor= function(){
    if(!intervalId){
        intervalId=setInterval(changeColor,1000);
    }
     
    function changeColor(){
        document.body.style.backgroundColor= RandomColor();
    } 
};
const stopChangingColor= function(){
    clearInterval(intervalId)
    intervalId=null;
};
document.querySelector(".start").addEventListener('click',startChangingColor);
document.querySelector(".stop").addEventListener('click',stopChangingColor);