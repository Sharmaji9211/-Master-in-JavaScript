const getDomContent=async ()=>{
    const response=await fetch('dom-content-api.json');
    const data=await response.json();
    console.log(data);
}
getDomContent();