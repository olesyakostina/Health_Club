import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "@material-ui/core";
import "./Full.css";
import { productContext } from "../Context/ProductsContext";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useAuth } from "../Context/AuthContext";
import { adminUID } from "../helpers/constants";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { useHistory } from "react-router";
import Comments from "../Comment/Comment";

const Accordion = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const Full = (props) => {
    const history = useHistory();
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [editStatus, setEditStatus] = useState(false);
    const [editedTopic, setEditedTopic] = useState({});
    const { productDetails, getProductDetails, saveTopic, addProductToBasket } =
        useContext(productContext);
    const { currentUser } = useAuth();
    const [value, setValue] = React.useState(2);

    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, []);

    const handleValue = (e) => {
        let newTopic = {
            ...editedTopic,
            [e.target.name]: e.target.value,
        };
        setEditedTopic(newTopic);
    };
    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, [editStatus]);
    const handleSave = () => {
        setEditStatus(false);
        saveTopic(props.match.params.id, editedTopic);
    };

    return (
        <>
            <div>
                {productDetails ? (
                    <div className="table">
                        {editStatus ? (
                            <div className="edit-textareas">
                                <textarea
                                    name="image"
                                    onChange={handleValue}
                                    className="edit-details_items"
                                >
                                    {productDetails.image}
                                </textarea>
                                <textarea
                                    name="title"
                                    onChange={handleValue}
                                    className="edit-details_items"
                                >
                                    {productDetails.title}
                                </textarea>
                                <textarea
                                    name="category"
                                    onChange={handleValue}
                                    className="edit-details_items"
                                    placeholder="category"
                                >
                                    {productDetails.category}
                                </textarea>
                                <textarea
                                    name="price"
                                    onChange={handleValue}
                                    className="edit-details_items"
                                    placeholder="price"
                                >
                                    {productDetails.price}
                                </textarea>
                                <textarea
                                    name="description"
                                    onChange={handleValue}
                                    className="edit-details_items"
                                >
                                    {productDetails.description}
                                </textarea>
                                <textarea
                                    name="ingredients"
                                    onChange={handleValue}
                                    className="edit-details_items"
                                >
                                    {productDetails.ingredients}
                                </textarea>
                                <button
                                    className="edit-details_items"
                                    onClick={handleSave}
                                >
                                    SAVE
                                </button>
                            </div>
                        ) : (
                            <div className="table__cart">
                                <div className="table__cart_img">
                                    <img
                                        src={productDetails.image}
                                        className="demo-trigger"
                                        data-zoom={productDetails.image}
                                    />
                                </div>
                                <div className="table__cart_desc   detail">
                                    <Box
                                        component="fieldset"
                                        mb={3}
                                        borderColor="transparent"
                                        style={{ textAlign: "center" }}
                                    >
                                        <Rating
                                            size="large"
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>

                                    <Accordion>
                                        <AccordionSummary
                                            aria-controls="panel1d-content"
                                            id="panel1d-header"
                                        >
                                            <Typography>
                                                {productDetails.title}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                PRICE : {productDetails.price} $
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion
                                        square
                                        expanded={expanded === "panel2"}
                                        onChange={handleChange("panel2")}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel2d-content"
                                            id="panel2d-header"
                                        >
                                            <Typography>Description</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {productDetails.description}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion
                                        square
                                        expanded={expanded === "panel3"}
                                        onChange={handleChange("panel3")}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel3d-content"
                                            id="panel3d-header"
                                        >
                                            <Typography>Ingredients</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {productDetails.ingredients}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div>
                                    <button
                                        className="button-goToShop"
                                        onClick={() =>
                                            addProductToBasket(productDetails)
                                        }
                                    >
                                        Add To Basket
                                    </button>
                                    <Link to="/all">
                                        <button className="button-goToShop">
                                            Back to shop
                                        </button>
                                    </Link>
                                </div>{" "}
                            </div>
                        )}
                        <div className="buttons-description">
                            {currentUser && currentUser.uid === adminUID ? (
                                <div>
                                    <button
                                        className="button-des"
                                        onClick={() => setEditStatus(true)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : (
                    "details"
                )}
                <Comments />
            </div>
        </>
    );
};
export default Full;
