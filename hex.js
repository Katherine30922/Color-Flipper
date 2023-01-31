const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];//
const btn=document.getElementById("changebutton");
const color=document.querySelector(".colorcode");

btn.addEventListener("click",function(){
    let hexcolor="#";
    for(let i=0;i<6;i++){
        hexcolor+=hex[getrandomnum()];
    }
    console.log(hexcolor);
    color.textContent=hexcolor;
    document.body.style.backgroundColor=hexcolor;
});
function getrandomnum(){
    return Math.floor(Math.random()*hex.length);
}