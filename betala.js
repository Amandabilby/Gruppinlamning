



//lagra data in i ett objekt/lista


const produkter = document.querySelectorAll('.add-to-cart');

console.log(produkter)

for (var i = 0; i <produkter.length; i++)
{
  produkter[i].addEventListener("click" , function(e){
    console.log(e.target)
    e.preventDefault()

    //välja div 
   const price = document.querySelector(".price").textContent
   console.log(price)
   //ska göras onload på indexsidan.
   localStorage.setItem('stilren', 3000) 
   localStorage.setItem('jordnära', 8000) 
   localStorage.setItem('havet', 10000) 
   localStorage.setItem('mediapaketet', 15000) 

   /* Loopa igenom alla
   

   */
   
   const local =localStorage.getItem("havet")
   console.log(local)

   var x= document.querySelector(".container").textContent
   console.log(x)

  const prisa=  document.querySelector(".produkter")
  
  prisa.innerHTML = ".price"
   console.log(prisa)
   //localStorage 
   //setItems
  })


}

/* loopa igenom .. 

const prisa=  document.querySelector(".produkter")
for (var i = 0; i < produkter.length; i++) {
prisa.innerHTML = "3000"
 console.log(prisa)
}
*/



/* Popup */
document.querySelector(".open-button").addEventListener("click", openForm)

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  document.querySelector(".closebtn").addEventListener("click", closeForm)
 
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

 function customerData(e){
     e.preventDefault();
const foretagsnamn = document.querySelector(".foretagsnamn").value;
const adress = document.querySelector(".adress").value;
const referens = document.querySelector(".referens").value;


const textArea = document.querySelector(".mottagare__p");
const ref  = document.querySelector(".erReferens")
ref.textContent = referens;
textArea.innerHTML =  "<li> "+ foretagsnamn +" </li>" + "<li>"+ adress + " </li>"
};

document.getElementById("sbtn").addEventListener("click", customerData);



//datum och random

const fakturaDatum = document.querySelector(".fakturaDatum")
let d = new Date()

fakturaDatum.innerHTML = d.toDateString()

const fakturaNummer = document.querySelector(".fakturaNummer")
fakturaNummer.innerHTML = Math.floor(Math.random() * 100000);

const kundNummer = document.querySelector(".kundNummer")
kundNummer.innerHTML = Math.floor(Math.random() * 10000)



// Räkna produkter



let AddToCart = documet.querySelectorAll(".add-to-cart")
console.log(AddToCart)
function hamta(){
  for (let i = 0; i < produkter.length; i++)
        {
          console.log(produkter)
        }

}
AddToCart[0].addEventListener(click, function(){
console.log("meddeland")
} )





// PDF-print knapp

function print() {
  const filename  = 'ThisIsYourPDFFilename.pdf';

  html2canvas(document.querySelector('faktura')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
  });
}
document.querySelector(".printpdf").addEventListener("click", print)

/* Lägg till produkter i faktura */


const produkter = document.querySelectorAll('.add-to-cart');

console.log(produkter)


//for 

 shoppingCartContent = document.querySelector('#cart-content')

 loadEventListeners();

function loadEventListeners(){
    //när nya produkter läggs till
    courses.addEventListener('click', produktInfo);

function buyProduct(e){
    if(e.target.classList.contains('add-to-cart'))
        // value
    { const produkter = e.target.parentElement.parentElement;
        produktInfo(produkt);
    }
  }}