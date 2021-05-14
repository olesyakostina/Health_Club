import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import ProductsList from "../components/Products/ProductsList";
import Shop from "../components/Shop/Shop";
import AddProducts from "../components/AddProducts/AddProducts";
import Full from "../components/Full/Full.js";
import ProductsContextProvider from "../components/Context/ProductsContext";
import OrderModal from "../components/OrderModal/OrderModal";

import PaymentForm from "../components/Payment/Payment";
import Basket from "../components/Basket/Basket";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import ForgotPassword from "../components/Auth/ForgotPassword";
import UpdateProfile from "../components/Auth/UpdateProfile";
import Location from "../components/Location/Location";
import Comments from "../components/Comment/Comment";
import CommentContextProvider from "../components/Context/CommentContext";
import Favorite from "../components/Favorite/Favorite";
// import CreditCard from "../components/Payment/Credit";
import Page from "../components/Page/Page";
const Routes = () => {
    return (
        <div>
            <ProductsContextProvider>
                <CommentContextProvider>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/shop" component={Shop} />
                            <Route exact path="/all" component={ProductsList} />
                            <Route exact path="/add" component={AddProducts} />
                            <Route
                                exact
                                path="/products/:id"
                                component={Full}
                            />
                            <Route exact path="/order" component={OrderModal} />
                            <Route exact path="/basket" component={Basket} />
                            <Route exact path="/pay" component={PaymentForm} />
                            {/* <Route exact path="/pay" component={CreditCard} /> */}

                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route
                                exact
                                path="/update"
                                component={UpdateProfile}
                            />
                            <Route
                                exact
                                path="/forgot"
                                component={ForgotPassword}
                            />
                            <Route
                                exact
                                path="/forgot-password"
                                component={ForgotPassword}
                            />
                            <Route
                                exact
                                path="/update"
                                component={UpdateProfile}
                            />
                            <Route exact path="/loc" component={Location} />
                            <Route exact path="/com" component={Comments} />
                            <Route
                                exact
                                path="/favorite"
                                component={Favorite}
                            />
                            <Route exact path="/page" component={Page} />
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </CommentContextProvider>
            </ProductsContextProvider>
        </div>
    );
};

export default Routes;
