/* [A] PRODUCTS DATA */
// Load products from the server via dynamic JS or AJAX
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

/* [B] PRODUCTS HTML GRID GENERATOR */
window.addEventListener("load", function() {
  var container = document.getElementById("cart-products"),
    item = null,
    part = null;
  for (let i in products) {
    item = document.createElement("div");
    item.classList.add("p-item");

    // Product Image
    part = document.createElement("img");
    part.src = products[i]["img"];
    part.classList.add("p-img");
    item.appendChild(part);

    // Product Name
    part = document.createElement("div");
    part.innerHTML = products[i]["name"];
    part.classList.add("p-name");
    item.appendChild(part);

    // Product Price
    part = document.createElement("div");
    part.innerHTML = products[i]["price"] + "kr exkl moms";
    part.classList.add("p-price");
    item.appendChild(part);

    // Product Description
    part = document.createElement("div");
    part.innerHTML = products[i]["desc"];
    part.classList.add("p-desc");
    item.appendChild(part);

    // Add to cart
    part = document.createElement("input");
    part.type = "button";
    part.value = "Lägg till i varukorg";
    part.classList.add("p-add");
    part.onclick = cart.add;
    part.dataset.id = i;
    item.appendChild(part);

    container.appendChild(item);
  }
});

/* [C] SHOPPING CART */
var cart = {
  data: null, // current shopping cart

  /* [C1] LOCALSTORAGE */
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

  /* [C2] CART ACTIONS */
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

    var container = document.getElementById("cart-list"),
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
        item.classList.add("c-item");
        product = cart.data[i];

        // Quantity
        part = document.createElement("input");
        part.type = "number";
        part.value = product["qty"];
        part.dataset.id = i;
        part.classList.add("c-qty");
        part.addEventListener("change", cart.change);
        item.appendChild(part);

        // Name
        part = document.createElement("span");
        part.innerHTML = product["name"];
        part.classList.add("c-name");
        item.appendChild(part);

        // Subtotal
        subtotal = product["qty"] * product["price"];
        total += subtotal;
        container.appendChild(item);
      }

      // FRI FRAKT
      item = document.createElement("input");
      item.innerHTML = "innerHTML";
      item.value = "Fri frakt!";
      item.classList.add("c-checkoutmoms");
      container.appendChild(item);

      // TOTALT BELOPP EXKL MOMS
      item = document.createElement("input");
      item.innerHTML = "innerHTML";
      item.value = "Totalt belopp exkl. moms    " + total + " kr";
      item.classList.add("c-checkoutmoms");
      container.appendChild(item);

      // TOTALT BELOPP INKL MOMS
      item = document.createElement("input");
      item.innerHTML = "innerHTML";
      item.value = "Totalt belopp inkl. moms    " + total * 1.25 + " kr";
      item.classList.add("c-checkoutexmoms");
      container.appendChild(item);

      // EMPTY BUTTONS
      item = document.createElement("input");
      item.type = "button";
      item.value = "Töm varukorgen";
      item.addEventListener("click", cart.reset);
      item.classList.add("c-empty");
      container.appendChild(item);

      // CHECKOUT BUTTONS
      item = document.createElement("input");
      item.type = "button";
      item.value = "Till betalning: " + total * 1.25 + "kr inkl moms";
      item.addEventListener("click", cart.checkout);
      item.classList.add("c-checkout");
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

// LÄNK TILL HJÄLP https://code-boxx.com/simple-vanilla-javascript-shopping-cart/

