function currency() {
    // set dropdown selector value as a variable for detection
    let selector = document.getElementById("currency-selector").value;
    // find all the class with price
    let list = document.getElementsByClassName("price");
    let currencytext = document.getElementsByClassName("currencytext");
    if (selector == "SGD") {
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : SGD";
            let sgd = price[i];
            list[i].innerHTML = sgd;
        }
    }
    if (selector == "USD") {
        let usd;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : USD";
            // calculates base price (SGD) * USD rate
            let usd = price[i] * 1.25;
            list[i].innerHTML = usd;
        }
    }
    if (selector == "GBP") {
        let gbp;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : Pound";
            // calculates base price (SGD) * GBP rate
            let gbp = price[i] * 1.35;
            list[i].innerHTML = "£ " + gbp.toFixed(2);
        }
    }
    if (selector == "JPY") {
        let jpy;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : Yen";
            // calculates base price (SGD) * JPY rate
            let jpy = price[i] * 77.54;
            list[i].innerHTML = "¥ " + jpy.toFixed(2);
        }
    }
    if (selector == "RM") {
        let rm;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : Ringgit";
            // calculates base price (SGD) * RM rate
            let rm = price[i] * 3.06;
            list[i].innerHTML = "RM " + rm.toFixed(2);
        }
    }
    if (selector == "BHT") {
        let bht;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : Baht";
            // calculates base price (SGD) * BAHT rate
            let bht = price[i] * 22.94;
            list[i].innerHTML = "฿ " + bht.toFixed(2);
        }
    }
    if (selector == "IDR") {
        let idr;
        for (let i = 0; i < list.length; i++) {
            currencytext[i].innerHTML = "Price : Rupiah";
            // calculates base price (SGD) * Rp rate
            let idr = price[i] * 10852;
            list[i].innerHTML = "Rp " + idr.toFixed(2);
        }
    }

}