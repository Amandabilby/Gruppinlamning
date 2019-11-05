const btn = document.querySelector(".rakna");
const data = 100;
 
 
btn.addEventListener("click", ()=>{
console.log(data)
localStorage.setItem("data", data);
window.document.location="./tillexfaktura.html";
})
 
function ShowData(){
  const div = document.querySelector(".divfaktura")
 
  div.innerHTML= localStorage.getItem("data");
}
 
//DOMContentLoaded event väntar tills documentet laddas upp helt sedan anropar //functionen inuti den
document.addEventListener("DOMContentLoaded", function (){
   ShowData();
})
