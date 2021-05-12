import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
// import classes from "./CreditCard.module.css";

function CreditCard() {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");

    const paynow = () => {
        // try {
        //     let basket = {
        //         products: [],
        //         totalPrice: 0,
        //     };
        //     localStorage.setItem("basket", JSON.stringify(basket));
        //     setState({ refresh: false });
        //     alert("good");
        // } catch (e) {
        //     console.log(e);
        //     alert("no");
        // } finally {
        //     setState({ refresh: true });
        // }
        // const { history } = props;
        // history.push("/");
        alert("dood");
    };

    return (
        <div>
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form>
                <input
                    maxLength="16"
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                    maxLength="16"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />

                <input
                    maxLength="4"
                    type="tel"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />

                <input
                    maxLength="3"
                    type="tel"
                    name="cvc"
                    placeholder=""
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                />

                <Link to="/order">
                    <div className="form-actions">
                        <button className="btn" className="btn-primary">
                            PAY
                        </button>
                    </div>
                </Link>
            </form>
        </div>
    );
}

export default CreditCard;
