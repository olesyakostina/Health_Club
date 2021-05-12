import React, { useContext, useEffect, useState } from "react";
import "./ProductsList.css";
import ProductsCard from "../Products/ProductsCard";
import { productContext } from "../Context/ProductsContext";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
    Menu,
    MenuItem,
    Button,
    FormControlLabel,
    Paper,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2),
        },
    },
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const ProductsList = ({ history }) => {
    const classes = useStyles();
    //-----------------------------------sort function
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //----------------------------------
    //----pagination

    const { getProducts, productData, paginationPages } = useContext(
        productContext
    );

    const [page, setPage] = useState(getPage());

    useEffect(() => {
        console.log(paginationPages);
    }, [paginationPages]);

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("_page");
    }
    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setPage(page);
        getProducts(history);
    };
    //----------------------------------------------------------------------------

    //________диапазон
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [title, setTitle] = useState("Choose ...");
    function handleMin(e) {
        setMin(e.target.value);
    }
    function handleMax(e) {
        setMax(e.target.value);
    }
    useEffect(() => {
        getProducts(history);
    }, []);
    const handleChange = (e) => {
        if (min == "0" && max == "0") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(
            `${history.location.pathname}?price_gte=${min}&price_lte=${max}`
        );
        getProducts(history);
    };

    useEffect(() => {
        getProducts(history);
    }, []);

    //-----------Sort for price

    const handleSortAsc = (e) => {
        if (title == "All") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(`${history.location.pathname}?_sort=price&_order=asc`);
        getProducts(history);
        setTitle(" PRICE: ASCENDING");
    };
    const handleSortDes = (e) => {
        if (title == "All") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(`${history.location.pathname}?_sort=price&_order=desc`);
        getProducts(history);
        setTitle(" PRICE: DESCENDING");
    };
    const handleSortAtoZ = (e) => {
        if (title == "All") {
            history.push(`${history.location.pathname.replace("price")}`);
            getProducts(history);
            return;
        }

        history.push(
            `${history.location.pathname}?_sort=title&_order=alphaasc`
        );
        getProducts(history);
        setTitle(" A to Z");
    };

    //------------выбор категории
    const handleChangeCategory = (e) => {
        if (e.target.value === "All") {
            history.push(`${history.location.pathname.replace("category")}`);
            getProducts(history);
            return;
        }
        const search = new URLSearchParams(history.location.search);
        search.set("category", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
    };
    return (
        <>
            <div className="Card__item">
                <div className="diapazon">
                    <h3 className="diapazon__text">
                        <strong>Filter price </strong>
                    </h3>
                    <p className="diapazon__p"> from </p>
                    <input
                        className="diapazon__inp"
                        onChange={handleMin}
                        value={min}
                        style={{ textAlign: "center" }}
                        type="number"
                        placeholder="min"
                    />
                    <p className="diapazon__p"> to </p>
                    <input
                        className="diapazon__inp"
                        onChange={handleMax}
                        value={max}
                        style={{ textAlign: "center" }}
                        type="number"
                        placeholder="max"
                    />
                    <button className="diapazon__btn" onClick={handleChange}>
                        Update
                    </button>
                </div>
                <div className="accordeon__sort">
                    <div className={classes.root}>
                        <Accordion className="accordeon">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    Sort by...
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Button
                                    style={{
                                        backgroundColor: "#d7ddf1",
                                    }}
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    {title}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleSortAtoZ}>
                                        A to Z
                                    </MenuItem>

                                    <MenuItem onClick={handleSortAsc}>
                                        PRICE: ASCENDING
                                    </MenuItem>
                                    <MenuItem onClick={handleSortDes}>
                                        PRICE: DESCENDING
                                    </MenuItem>
                                </Menu>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordeon">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}>
                                    Choose for category ...
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RadioGroup
                                    onChange={handleChangeCategory}
                                    aria-label="category"
                                    name="category"
                                >
                                    <FormControlLabel
                                        value="Pre Workout"
                                        control={<Radio />}
                                        label="Pre Workout"
                                    />
                                    <FormControlLabel
                                        value="Intra Workout"
                                        control={<Radio />}
                                        label="Intra Workout"
                                    />
                                    <FormControlLabel
                                        value="Post Workout"
                                        control={<Radio />}
                                        label="Post Workout"
                                    />
                                    <FormControlLabel
                                        value="All"
                                        control={<Radio />}
                                        label="All"
                                    />
                                </RadioGroup>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div>
                <div className="productCard">
                    {productData.map((item) => (
                        <ProductsCard
                            className="prodCard"
                            key={item.id}
                            item={item}
                            history={history}
                        />
                    ))}
                </div>

                <Pagination
                    onChange={handlePage}
                    count={paginationPages}
                    color="primary"
                    defaultPage={+page}
                />
            </div>
        </>
    );
};
export default ProductsList;
