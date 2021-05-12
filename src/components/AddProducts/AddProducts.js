import "./AddProducts.css";

import React, { useContext, useState } from "react";
import { productContext } from "../Context/ProductsContext";

const AddProduct = ({ history }) => {
    const { postProduct } = useContext(productContext);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        ingredients: "",
        description: "",
        image: "",
    });
    const handleValues = (e) => {
        let newProduct = {
            ...product,
            [e.target.name]: e.target.value,
        };
        setProduct(newProduct);
    };
    const handleClick = () => {
        postProduct(product, history);
        setProduct({
            title: "",
            price: "",
            category: "",
            ingredients: "",
            description: "",
            image: "",
        });
    };
    return (
        <div className="add">
            <div className="add__item">
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.title}
                    type="text"
                    placeholder="title"
                    name="title"
                />
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.price}
                    type="text"
                    placeholder="price"
                    name="price"
                />
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.category}
                    type="text"
                    placeholder="category"
                    name="category"
                />
                <textarea
                    className="add-input"
                    type="text"
                    placeholder="ingredients:"
                    name="ingredients"
                    onChange={handleValues}
                    value={product.ingredients}
                ></textarea>
                <textarea
                    className="add-input"
                    type="text"
                    placeholder="description"
                    name="description"
                    onChange={handleValues}
                    value={product.description}
                ></textarea>
                <input
                    className="add-input"
                    onChange={handleValues}
                    value={product.image}
                    type="text"
                    placeholder="image"
                    name="image"
                />
                <button className="add-button" onClick={handleClick}>
                    Add
                </button>
            </div>
        </div>
    );
};
export default AddProduct;
