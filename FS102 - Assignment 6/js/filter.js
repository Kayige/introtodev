// filter takes single input
function filter(category) {
    resetFilter();
    let productList = document.getElementsByClassName("col-3");
    // iterate through the length of the elements
    for (i = 0; i < productList.length; i++) {
        // if element id is not equals to input, hide the element.
        if (productList[i].id != category) {
            productList[i].style.display = "none";
        }
    }
}

// reset to show all elements in the DOM.
function resetFilter() {
    let reset = document.getElementsByClassName("col-3");
    for (i = 0; i < reset.length; i++) {
        reset[i].style.display = "block";
    }
}