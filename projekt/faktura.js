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

function RäknaKostnad(){
  const Produkt = document.querySelector(".produkt").value;
  const Moms = .25;

  console.log(Number(Produkt)+Produkt*Moms); //Number för att fixa till siffror istället för string.
  document.querySelector("div").innerHTML = +Produkt+Produkt*Moms;
  return Produkt+Produkt*Moms;
  
}

const raknabtn = document.querySelector(".rakna");

raknabtn.addEventListener("click", RäknaKostnad);


const div = document.createElement("div");
const li = document.createElement("li");

const ul = document.querySelector("ul");
ul.appendChild(li.textContent="Det här är från JS");







