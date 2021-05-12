import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Context/ProductsContext";
import { calcTotalPrice } from "../helpers/calcPrice";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Basket.css";
import { Link } from "react-router-dom";
// import OrderModal from "../OrderModal/OrderModal";

const Basket = () => {
    const { basket, getBasket, changeProductCount, deleteBasketProducts } =
        useContext(productContext);
    const [totalPrice, setTotalPrice] = useState();
    function orderAction() {
        localStorage.setItem("basket", JSON.stringify(0));
        setModal({ ...modal, modal1: true });
    }
    useEffect(() => {
        getBasket();
    }, []);
    const [modal, setModal] = useState({ modal1: false });

    useEffect(() => {
        if (basket?.products && basket?.products.length > 0) {
            setTotalPrice(calcTotalPrice(basket.products));
        }
    }, [basket]);
    return (
        <>
            <div className="basket">
                {basket.products ? (
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
                                {basket.products.map((elem) => (
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
                                                minValue={0}
                                                type="number"
                                                onChange={(e) =>
                                                    changeProductCount(
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
                                                deleteBasketProducts(
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
                                        Total: {calcTotalPrice(basket.products)}{" "}
                                        $
                                    </h4>
                                    <Link
                                        to={{
                                            pathname: `/order`,
                                            productProps: basket,
                                        }}
                                    >
                                        <button className="btn-form">
                                            Order
                                        </button>
                                    </Link>
                                </div>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h1
                        className="basket-noprod"
                        style={{ textAlign: "center" }}
                    >
                        Basket is empty
                        <Link to="/all">
                            <button className="goToShop"> Go to shop </button>
                        </Link>
                    </h1>
                )}
            </div>
        </>
    );
};
export default Basket;
