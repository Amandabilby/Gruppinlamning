const btn = document.querySelector(".rakna");
const data = 100;
 
 
btn.addEventListener("click", ()=>{
console.log(data)
localStorage.setItem("data", data);
window.document.location="./tillexfaktura.html";
})
 
