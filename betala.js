var products = {
  1: {
    name: "Stilren",
    desc:
      "För er som som vill ha en stilren, modern och enkel arbetsmiljö är detta paketet något för er..",
    img: "public/bilder/Earthtonesoffice.jpeg",
    price: 3000
  },
  2: {
    name: "Jordnära",
    desc:
      "Med det här paketet får man känslan av moder jord på kontoret, vilket leder till en stark och inspirerande arbetsmiljö.",
    img: "public/bilder/Simpledesk.jpeg",
    price: 8000
  },
  3: {
    name: "Havet",
    desc:
      "Paketet havet ger en lugn känsla men även en som stärker självförtroendet på arbetsplatsen.",
    img: "public/bilder/coloroffice.jpeg",
    price: 10000
  },
  4: {
    name: "Mediapaketet",
    desc:
      "I detta paket får du allting som behövs till det öppna medialandskapet.",
    img: "public/bilder/Productshots.jpeg",
    price: 15000
  }
};

/* Kundvagn */
var cart = {
  data: null, // current shopping cart

  /* Localstorage */
  load: function() {
    // load() : load previous shopping cart

    cart.data = localStorage.getItem("cart");
    if (cart.data == null) {
      cart.data = {};
    } else {
      cart.data = JSON.parse(cart.data);
    }
  },

  save: function() {
    // save() : save current cart

    localStorage.setItem("cart", JSON.stringify(cart.data));
  },

  /* Cart actions */
  add: function() {
    // add() : add selected item to cart

    // Update current cart
    if (cart.data[this.dataset.id] == undefined) {
      var product = products[this.dataset.id];
      cart.data[this.dataset.id] = {
        name: product["name"],
        desc: product["desc"],
        img: product["img"],
        price: product["price"],
        qty: 1
      };
    } else {
      cart.data[this.dataset.id]["qty"]++;
    }
    // Save local storage + HTML update
    cart.save();
    cart.list();
  },

  list: function() {
    // list() : update HTML

    var container = document.getElementById("cart-listfaktura"),
      item = null,
      part = null,
      product = null;
    container.innerHTML = "";

    // Empty cart
    // Credits : https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
    var isempty = function(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    };
    if (isempty(cart.data)) {
      item = document.createElement("div");
      item.innerHTML = "Varukorgen är tom";
      container.appendChild(item);
    }

    // Not empty
    else {
      // List items
      var total = 0,
        subtotal = 0;
      for (var i in cart.data) {
        item = document.createElement("div");
        item.classList.add("c-itemfaktura");
        product = cart.data[i];

        // Quantity
        part = document.createElement("input");
        part.type = "number";
        part.value = product["qty"];
        part.dataset.id = i;
        part.classList.add("c-qtyfaktura");
        item.appendChild(part);

        // A pris
        part = document.createElement("span");
        part.innerHTML =
          product["name"] +
          [" "] +
          product["price"] +
          [" kr/a pris exkl moms"] +
          [" , "] +
          product["price"] * 1.25 +
          ["kr/a pris inkl moms"];
        part.classList.add("c-name");
        item.appendChild(part);

        // Subtotal
        subtotal = product["qty"] * product["price"];
        total += subtotal;
        container.appendChild(item);
      }

      // FRI FRAKT
      item = document.createElement("div");
      item.innerHTML = "Fri frakt! ";
      item.value = "Fri frakt!";
      item.classList.add("c-checkoutmomsfaktura");
      container.appendChild(item);

      //

      // TOTALT BELOPP EXKL MOMS
      item = document.createElement("div");
      item.innerHTML = "Totalt belopp före moms    " + total + " kr"; 
      item.value = "Totalt belopp före moms    " + total + " kr";
      item.classList.add("c-checkoutmomsfaktura");
      container.appendChild(item);

      // TOTALT BELOPP INKL MOMS
      item = document.createElement("div");
      item.innerHTML = "Totalt belopp före moms    " + total + " kr";
      item.value = "Total moms 25%    " + total * 0.25 + " kr";
      item.classList.add("c-checkoutexmomsfaktura");
      container.appendChild(item);

      // CHECKOUT BUTTONS
      item = document.createElement("div");
      item.innerHTML = "Summa att betala inklusive moms " + total * 1.25 + "kr inkl moms";
      item.value =
        "Summa att betala inklusive moms " + total * 1.25 + "kr inkl moms";
      item.classList.add("c-checkoutfaktura");
      container.appendChild(item);
    }
  },

  change: function() {
    // change() : change quantity

    if (this.value == 0) {
      delete cart.data[this.dataset.id];
    } else {
      cart.data[this.dataset.id]["qty"] = this.value;
    }
    cart.save();
    cart.list();
  },

  reset: function() {
    // reset() : empty cart

    if (confirm("Vill du verkligen tömma kundvagnen?")) {
      cart.data = {};
      cart.save();
      cart.list();
    }
  },

  checkout: function() {
    // checkout() : checkout the cart

    alert("TODO");
    location.replace("betala.html");
    // Forward to confirmation page or directly add name, tel, email fields in the cart list.
    // Send cart.data to the server and do further processing - email or save to database.
  }
};

// Load previous cart and update HTML on load
window.addEventListener("load", function() {
  cart.load();
  cart.list();
});

document.querySelector(".open-button").addEventListener("click", openForm);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

document.querySelector(".closebtn").addEventListener("click", closeForm);

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function customerData(e) {
  e.preventDefault();
  const foretagsnamn = document.querySelector(".foretagsnamn").value;
  const adress = document.querySelector(".adress").value;
  const referens = document.querySelector(".referens").value;

  const textArea = document.querySelector(".mottagare__p");
  const ref = document.querySelector(".erReferens");
  ref.textContent = referens;
  textArea.innerHTML =
    "<li> " + foretagsnamn + " </li>" + "<li>" + adress + " </li>";
}

document.getElementById("sbtn").addEventListener("click", customerData);

//datum och random

const fakturaDatum = document.querySelector(".fakturaDatum");
let d = new Date();

fakturaDatum.innerHTML = d.toDateString();

const förfalloDatum = document.querySelector(".förfalloDatum");
const date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
const splitedDate = date.toString().split(" ");
const filteredDate = splitedDate.slice(0, 4);
console.log(filteredDate);
förfalloDatum.innerHTML = filteredDate;

const fakturaNummer = document.querySelector(".fakturaNummer");
fakturaNummer.innerHTML = Math.floor(Math.random() * 100000);

const kundNummer = document.querySelector(".kundNummer");
kundNummer.innerHTML = Math.floor(Math.random() * 10000);
