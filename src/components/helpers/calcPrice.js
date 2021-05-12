export function calcSubPrice(product) {
    return product.count * product.item.price;
}
export function calcTotalPrice(products) {
    console.log(products);
    let totalPrice = 0;
    products.forEach((item) => {
        totalPrice += item.subPrice;
    });
    return totalPrice;
}

export function getCountProductsInBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    return basket ? basket.products.length : 0;
}
export function getCountProductsInFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    return favorite ? favorite.products.length : 0;
}
