import React, { useContext, useState } from "react";
import "./OrderModal.css";

import { Link } from "react-router-dom";
import { calcTotalPrice } from "../helpers/calcPrice";
import { productContext } from "../Context/ProductsContext";

const OrderModal = (props) => {
    const [test, setTest] = useState(false);
    console.log(props.location.productProps.products);
    console.log(props);
    // const { ref } = useContext(productContext);

    const handleClearLocal = () => {
        try {
            let basket = {
                products: [],
                totalPrice: 0,
            };
            localStorage.setItem("basket", JSON.stringify(basket));
            // setTest(!test);
            // ref();

            // alert("good");
        } catch (e) {
            console.log(e);
            // alert("no");
        } finally {
            // setTest(!test);
        }
    };
    return (
        <>
            <div className="order__card">
                <div className="order__title">
                    <h2>Responsive Checkout Form</h2>
                    <p>
                        Payment of the full purchase price is required from the
                        customer to First Swiss Luxury GmbH before an order is
                        shipped. On the occasion that a watch is not in stock we
                        reserve the right to request a deposit payment.
                    </p>
                </div>
                <div className="row">
                    <div className="col-75">
                        <div className="container">
                            <form action="/action_page.php">
                                <div className="row">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>
                                        <label for="fname">
                                            <i className="fa fa-user"></i> Full
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="firstname"
                                            placeholder="John M. Doe"
                                        />
                                        <label for="email">
                                            <i className="fa fa-envelope"></i>{" "}
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                        />
                                        <label for="adr">
                                            <i className="fa fa-address-card-o"></i>{" "}
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="542 W. 15th Street"
                                        />
                                        <label for="city">
                                            <i className="fa fa-institution"></i>{" "}
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="New York"
                                        />

                                        <div className="row">
                                            <div className="col-50">
                                                <label
                                                    for="state"
                                                    style={{
                                                        textAlign: "center",
                                                        fontSize: "30px",
                                                    }}
                                                >
                                                    Total price : $
                                                    {calcTotalPrice(
                                                        props.location
                                                            .productProps
                                                            .products
                                                    )}
                                                </label>

                                                <Link to="/pay">
                                                    <button
                                                        onClick={
                                                            handleClearLocal
                                                        }
                                                        className="order-next"
                                                    >
                                                        NEXT
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default OrderModal;
