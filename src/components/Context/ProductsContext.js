import axios from "axios";
import React, { useReducer, useState } from "react";

import {
    calcSubPrice,
    calcTotalPrice,
    getCountProductsInBasket,
    getCountProductsInFavorite,
} from "../helpers/calcPrice";

export const productContext = React.createContext();

const INIT_STATE = {
    productData: [],
    filterData: [],
    paginationPages: 1,
    productDetails: null,

    searchData: [],
    basket: {},
    basketLength: getCountProductsInBasket() || 0,
    favoriteLength: getCountProductsInFavorite() || 0,
    favorite: null,
    // refresh: false,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SEARCH":
            return { ...state, searchData: action.payload };
        case "GET_PRODUCTS":
            return {
                ...state,
                productData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 6
                ),
            };
        case "GET_PRODUCT_DETAILS":
            return { ...state, productDetails: action.payload };
        case "GET_BASKET":
            return { ...state, basket: action.payload };
        case "CHANGE_BASKET_COUNT":
            return { ...state, basketLength: action.payload };
        case "GET_FAVORITE":
            return { ...state, favorite: action.payload };
        case "CHANGE_FAVORITE_COUNT":
            return { ...state, favoriteLength: action.payload };

        // case "REFRESH":
        //     return { ...state, refresh: action.payload };
        // default:
        //     return state;
    }
};

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    //----create
    const postProduct = (products, his) => {
        axios.post("http://localhost:8000/products", products);
        getProducts(his);
    };

    async function getProducts(history) {
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 8);
        history.push(`${history.location.pathname}?${search.toString()}`);

        //_____________read
        let res = await axios.get(
            `http://localhost:8000/products${window.location.search}`
        );
        dispatch({
            type: "GET_PRODUCTS",
            payload: res,
        });
    }

    //----delete
    async function deleteCard(id, history) {
        await axios.delete(`http://localhost:8000/products/${id}`);
        getProducts(history);
    }

    //-----search
    async function searchh(value) {
        let { data } = await axios(`http://localhost:8000/products?q=${value}`);
        dispatch({
            type: "SEARCH",
            payload: data,
        });
    }
    //----------------basket
    async function getProductDetails(id) {
        let { data } = await axios(`http://localhost:8000/products/${id}`);
        console.log(id);
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data,
        });
    }

    function addProductToBasket(product) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (!basket) {
            basket = {
                products: [],
                totalPrice: 0,
            };
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0,
        };

        let filteredBasket = basket.products.filter(
            (elem) => elem.item.id === product.id
        );
        if (filteredBasket.length > 0) {
            basket.products = basket.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
            basket.products.push(newProduct);
        }
        console.log("newproduct", newProduct);
        newProduct.subPrice = calcSubPrice(newProduct);
        basket.totalPrice = calcTotalPrice(basket.products);
        localStorage.setItem("basket", JSON.stringify(basket));

        dispatch({
            type: "CHANGE_BASKET_COUNT",
            payload: basket.products.length,
        });
    }
    function getBasket() {
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (!basket) {
            basket = {
                product: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_BASKET",
            payload: basket,
        });
    }
    async function saveTopic(id, newTopic) {
        axios.patch(`http://localhost:8000/products/${id}`, newTopic);
        getProductDetails(id);
    }
    function changeProductCount(count, id) {
        console.log(count, "count 1");
        if (count < 1) count = 1;
        console.log(count, "count 2");
        let basket = JSON.parse(localStorage.getItem("basket"));
        basket.product = basket.products.map((elem) => {
            if (elem.item.id === id) {
                console.log(count, "cons");
                elem.count = count;
                console.log(count, "after");
                elem.subPrice = calcSubPrice(elem);
            }
            return elem;
        });

        console.log(count, "new");
        basket.totalPrice = calcTotalPrice(basket.product);
        localStorage.setItem("basket", JSON.stringify(basket));
        getBasket();
    }
    function checkProductInBasket(id) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (basket) {
            console.log(basket, "basket");
            let newBasket = basket.products?.filter(
                (elem) => elem.item.id === id
            );
            return newBasket.length > 0 ? true : false;
        } else {
            basket = {
                product: [],
                totalPrice: 0,
            };
        }
    }
    function deleteBasketProducts(id) {
        let toDelete = JSON.parse(localStorage.getItem("basket"));
        toDelete.products = toDelete.products.filter(
            (elem) => elem.item.id !== id
        );
        localStorage.setItem("basket", JSON.stringify(toDelete));

        getBasket();

        dispatch({
            type: "CHANGE_BASKET_COUNT",
            payload: toDelete.products.length,
        });
    }

    function getLength(basket) {
        dispatch({
            type: "CHANGE_BASKET_COUNT",
            payload: basket.products.length,
        });
    }

    //-------------------------------wishList
    function addProductToFavorite(product) {
        let favorite = JSON.parse(localStorage.getItem("favorite"));
        if (!favorite) {
            favorite = {
                products: [],
                totalPrice: 0,
            };
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0,
        };

        let filteredFavorite = favorite.products.filter(
            (elem) => elem.item.id === product.id
        );
        if (filteredFavorite.length > 0) {
            favorite.products = favorite.products.filter(
                (elem) => elem.item.id !== product.id
            );
        } else {
            favorite.products.push(newProduct);
        }
        console.log(newProduct);
        newProduct.subPrice = calcSubPrice(newProduct);
        favorite.totalPrice = calcTotalPrice(favorite.products);
        localStorage.setItem("favorite", JSON.stringify(favorite));

        dispatch({
            type: "CHANGE_FAVORITE_COUNT",
            payload: favorite.products.length,
        });
    }
    function getFavorite() {
        let favorite = JSON.parse(localStorage.getItem("favorite"));
        if (!favorite) {
            favorite = {
                product: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_FAVORITE",
            payload: favorite,
        });
    }
    async function saveTopic(id, newTopic) {
        axios.patch(`http://localhost:8000/products/${id}`, newTopic);
        getProductDetails(id);
        // console.log(newTopic);
    }
    function changeFavoriteProductCount(count, id) {
        let favorite = JSON.parse(localStorage.getItem("favorite"));
        favorite.product = favorite.products.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
                elem.subPrice = calcSubPrice(elem);
            }
            return elem;
        });
        favorite.totalPrice = calcTotalPrice(favorite.product);
        localStorage.setItem("favorite", JSON.stringify(favorite));
        getFavorite();
    }
    function checkProductInFavorite(id) {
        let favorite = JSON.parse(localStorage.getItem("favorite"));
        console.log(favorite, "favo");
        if (favorite) {
            let newFavorite = favorite.products.filter(
                (elem) => elem.item.id === id
            );
            return newFavorite.length > 0 ? true : false;
        } else {
            favorite = {
                product: [],
                totalPrice: 0,
            };
        }
    }
    function deleteFavoriteProducts(id) {
        let toDelete = JSON.parse(localStorage.getItem("favorite"));
        toDelete.products = toDelete.products.filter(
            (elem) => elem.item.id !== id
        );
        localStorage.setItem("favorite", JSON.stringify(toDelete));

        getFavorite();

        dispatch({
            type: "CHANGE_FAVORITE_COUNT",
            payload: toDelete.products.length,
        });
    }
    console.log(state.favorite, "this");

    // const ref = () => {
    //     console.log("this");
    //     dispatch({
    //         type: "REFRESH",
    //         payload: true,
    //     });
    // };

    return (
        <productContext.Provider
            value={{
                paginationPages: state.paginationPages,
                productData: state.productData,
                favorite: state.favorite,
                favoriteLength: state.favoriteLength,
                getLength,
                basket: state.basket,
                basketLength: state.basketLength,
                productDetails: state.productDetails,
                searchData: state.searchData,
                saveTopic,
                getProductDetails,
                postProduct,
                getProducts,
                deleteCard,
                searchh,
                addProductToBasket,
                getBasket,
                changeProductCount,
                checkProductInBasket,
                deleteBasketProducts,
                addProductToFavorite,
                getFavorite,
                changeFavoriteProductCount,
                checkProductInFavorite,
                deleteFavoriteProducts,
                // ref,
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextProvider;
