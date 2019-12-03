/* Popup */

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
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

const produkEtt = {
  beskrivning: "Skrivbord",
  antal: 0,
  enhet: 0,
  apris: 0,
  moms: 0,
  momskr: 0,
  belopp: 0

}

const produktTvå = {
  beskrivning: "Bokhylla",
  antal: 0,
  enhet: 0,
  apris: 0,
  moms: 0,
  momskr: 0,
  belopp: 0
}
   
const produktTre = {
  beskrivning: "konferensbord",
  antal: 0,
  enhet: 0,
  apris: 0,
  moms: 0,
  momskr: 0,
  belopp: 0
}

const produktFyra = {
  beskrivning: "whiteboard",
  antal: 0,
  enhet: 0,
  apris: 0,
  moms: 0,
  momskr: 0,
  belopp: 0
}

let produkter = [productEtt, produktTvå, produktTre, produktFyra]

document.querySelectorAll(".add-to-cart")

function hamta(){
  for (let i = 0; i < produkter.length; i++)
        

}



// PDF-print knapp

function print() {
  const filename  = 'ThisIsYourPDFFilename.pdf';

  html2canvas(document.querySelector('faktura')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
  });
}

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
    if(e.target.classList.contains('add-to-cart'){
        // value
     const produkter = e.target.parentElement.parentElement;
        produktInfo(produkt);
    }
}}