let xhttp = new XMLHttpRequest();
let txt = "";
let price = [];
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myProducts = JSON.parse(this.responseText);

        // loop through the JSON array length and prints out the item information.
        for (let i = 0; i < myProducts.products.length; i++) {
            txt += "<div class='col-3' id='" + myProducts.products[i].category + "'>" + "Item: " + myProducts.products[i].name;
            txt += "<p class='currencytext'>" + "Price: ($)" + "</p>";
            txt += "<p class='price'>" + myProducts.products[i].price + "</p>";
            txt += "<br>" + "Category: " + myProducts.products[i].category + "</div>";
            price.push(myProducts.products[i].price);
        }
        document.getElementById("productname").innerHTML = txt;
    }
};
xhttp.open("GET", "json/product.json", true);
xhttp.send();