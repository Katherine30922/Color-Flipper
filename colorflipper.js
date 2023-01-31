const colors=["lightblue","rosybrown","	cadetblue","lavender","lightsteelblue","palevioletred","thistle","oldlace","olive","lightpink","indianred","darkseagreen","darksalmon","darkcyan","darkgoldenrod","burlywood"];//const must desclared with variables
const button=document.getElementById('changebutton');//lets you grab an HTML element by its id
const color=document.querySelector(".colorcode");// querySelector returns the first element that matches a CSS selector.

button.addEventListener("click",function(){
    //get random number between 0-3(colors[0-3])
    const randomnum=getrandomnum();
    console.log(randomnum);
    document.body.style.backgroundColor=colors[randomnum];//change backgroud color in html
    color.textContent=colors[randomnum];//change text content in html
});
//get random number
function getrandomnum(){
    return Math.floor(Math.random()*colors.length);
}