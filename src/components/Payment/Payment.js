import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import "./Payment.css";
// import { productContext } from "../Context/ProductsContext";

export default class PaymentForm extends React.Component {
    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
        // refresh: true,
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };
    // paynow = () => {
    //     try {
    //         let basket = {
    //             products: [],
    //             totalPrice: 0,
    //         };
    //         localStorage.setItem("basket", JSON.stringify(basket));
    //         this.setState({ refresh: false });
    //         alert("good");
    //     } catch (e) {
    //         console.log(e);
    //         alert("no");
    //     } finally {
    //         this.setState({ refresh: true });
    //     }
    //     const { history } = this.props;
    //     history.push("/");
    // };

    render() {
        return (
            <div className="col-50">
                <h3>Payment</h3>
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                    style={{ backgroundColor: "blue" }}
                />
                <div className="payment">
                    <div className="payment__cart">
                        <form className="inp__form">
                            <h4 className="payment__lable">Name on Card</h4>
                            <input
                                className="payment__inp"
                                type="tel"
                                name="name"
                                placeholder="John More Doe"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <h4 className="payment__lable">
                                Credit card number
                            </h4>
                            <input
                                className="payment__inp"
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />

                            <h4 className="payment__lable">CVV</h4>
                            <input
                                className="payment__inp"
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <h4 className="payment__lable">Exp Year</h4>
                            <input
                                className="payment__inp"
                                type="tel"
                                name="expiry"
                                placeholder="2021"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                            <Link to="/">
                                <button className="pay_now">Pay now</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// onClick={this.paynow}>
