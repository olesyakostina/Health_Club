import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Context/ProductsContext";
import { calcTotalPrice } from "../helpers/calcPrice";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Favorite.css";
import { Link } from "react-router-dom";

const Favorite = () => {
    const {
        favorite,
        getFavorite,
        changeFavoriteProductCount,
        deleteFavoriteProducts,
    } = useContext(productContext);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        getFavorite();
        console.log(favorite);
    }, []);

    useEffect(() => {
        if (favorite?.products && favorite?.products.length > 0) {
            setTotalPrice(calcTotalPrice(favorite.products));
        }
    }, [favorite]);
    return (
        <div>
            <div className="favorite">
                {favorite?.products ? (
                    <div>
                        <table
                            style={{
                                width: "100%",
                                color: "white",
                                backgroundColor: "#2b283cd6;",
                            }}
                        >
                            <thead>
                                <tr
                                    style={{
                                        color: "white",
                                        fontSize: "20px",
                                    }}
                                >
                                    <th></th>
                                    <th
                                        style={{
                                            paddingRight: "20px",
                                        }}
                                    >
                                        Title
                                    </th>
                                    <th
                                        style={{
                                            paddingRight: "20px",
                                        }}
                                    >
                                        Price
                                    </th>
                                    <th
                                        style={{
                                            paddingRight: "20px",
                                        }}
                                    >
                                        Count
                                    </th>
                                    <th
                                        style={{
                                            paddingRight: "20px",
                                        }}
                                    >
                                        SubPrice
                                    </th>
                                    <th
                                        style={{
                                            paddingRight: "20px",
                                        }}
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {favorite.products.map((elem) => (
                                    <tr key={elem.item.id}>
                                        <td>
                                            <img
                                                style={{
                                                    width: "250px",
                                                    height: "200px",
                                                    border: "2px solid grey",
                                                }}
                                                src={elem.item.image}
                                                alt="Here should be image of product"
                                            />
                                        </td>
                                        <td
                                            style={{
                                                color: "white",
                                                fontSize: "20px",
                                                paddingLeft: "20px",
                                            }}
                                        >
                                            {elem.item.title}
                                        </td>
                                        <td
                                            style={{
                                                color: "white",
                                                fontSize: "30px",
                                                paddingLeft: "20px",
                                            }}
                                        >
                                            {elem.item.price} $
                                        </td>
                                        <td>
                                            <input
                                                style={{
                                                    width: "70px",
                                                    paddingLeft: "20px",
                                                    marginLeft: "20px",
                                                }}
                                                defaultValue={1}
                                                type="number"
                                                onChange={(e) =>
                                                    changeFavoriteProductCount(
                                                        e.target.value,
                                                        elem.item.id
                                                    )
                                                }
                                            />
                                        </td>
                                        <td
                                            style={{
                                                color: "white",
                                                fontSize: "30px",
                                                paddingLeft: "30px",
                                            }}
                                        >
                                            {elem.subPrice} $
                                        </td>
                                        <IconButton
                                            style={{
                                                color: "#9900ff",
                                                paddingTop: "100px",
                                            }}
                                            onClick={() =>
                                                deleteFavoriteProducts(
                                                    elem.item.id
                                                )
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </tr>
                                ))}
                                <div className="total">
                                    <h4
                                        className="total-price"
                                        style={{
                                            textAlign: "center",
                                            fontSize: "40px",
                                        }}
                                    >
                                        Total:{" "}
                                        {calcTotalPrice(favorite.products)} $
                                    </h4>
                                    <Link to="/basket">
                                        <button className="btn-form">
                                            Follow to basket
                                        </button>
                                    </Link>
                                </div>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h1
                        className="favorite-noprod"
                        style={{ textAlign: "center" }}
                    >
                        Wish List is empty
                        <Link to="/all">
                            <button className="goToShop"> Go to shop </button>
                        </Link>
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Favorite;
