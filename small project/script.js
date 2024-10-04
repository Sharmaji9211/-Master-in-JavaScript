const button=document.getElementById('button');
const colorText=document.querySelector('.color');
const hex=[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
]

button.addEventListener('click',()=>{
    const hexColor=GenerateHexcolor();
    document.body.style.backgroundColor=hexColor;
    colorText.textContent=hexColor;
})
const GenerateHexcolor=()=>{
  let hexColor='#';
for(let i=0;i<6;i++){
    hexColor+=hex[generateRandomNumber()]
}
return hexColor;
}
const generateRandomNumber=()=>{
    return Math.floor(Math.random()*hex.length)
}