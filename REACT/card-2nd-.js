                    //-------LOCAL STORAGE & SHOPPING CARD --------//



// const handleAddToCard = () => {
//     const productName = document.getElementById("productName");
//     const productQuantity = document.getElementById("productQuantity");

//     const name = productName.value;
//     const quantity = productQuantity.value;

//     handleSetToLocalStorage(name, quantity)
//     displayProduct(name, quantity)

//     console.log(name, quantity)

//     productName.value = "";
//     productQuantity.value = "";
// }

// const displayProduct = (productName, quantity) => {
//     const productContainer = document.getElementById("product-container");

//     const li = document.createElement("li");
//     li.innerText = `${productName} : ${quantity}`;
//     productContainer.appendChild(li)                // Console Output: 7up--2 liter : 6 pcs
// }

//             //local storage set//
// const handleSetToLocalStorage = (productName, quantity) => {
//     // console.log(productName, quantity)

//     const newProduct = { name: quantity };
//     localStorage.setItem("card", JSON.stringify(newProduct))        // Key: card  value: {"name":"345"}//
// }









const handleAddToCard = () => {
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("productQuantity");

    const name = productName.value;
    const quantity = productQuantity.value;

    saveProductToLocalStorage(name, quantity)
    displayProduct(name, quantity)

    // console.log(name, quantity)

    productName.value = "";
    productQuantity.value = "";
}



const displayProduct = (productName, quantity) => {
    const productContainer = document.getElementById("product-container");

    const li = document.createElement("li");
    li.innerText = `${productName} : ${quantity}`;
    productContainer.appendChild(li)                // Console Output: 7up--2 liter : 6 pcs
}

const getProductFromLocalStorage = () => {
    let card = {};
    const getProduct = localStorage.getItem("cart")

    if (getProduct) {
        card = JSON.parse(getProduct);
    }
    return card;
}

const saveProductToLocalStorage = (productName, quantity) => {
    const card = getProductFromLocalStorage();
    // console.log(card);              // Browser page show: fresh up : 24..
}
 




