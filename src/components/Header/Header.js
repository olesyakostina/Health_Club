import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Badge from "@material-ui/core/Badge";
import img from "../assets/img/logo.jpg";
import "./Header.css";
import { useHistory } from "react-router";
import { productContext } from "../Context/ProductsContext";
import { Link } from "react-router-dom";
import { useAuth, currentUser } from "../Context/AuthContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const { currentUser, logout } = useAuth();

    const history = useHistory();
    const [searchValue, setSearchValue] = useState(getSearchValue());
    const {
        getProducts,
        searchData,
        getLength,
        searchh,
        basketLength,
        favoriteLength,
    } = useContext(productContext);
    // const [test, setTest] = useState(basketLength);
    const basket = localStorage.getItem("basket");

    // useEffect(() => {
    //     if (basket) {
    //         getLength(JSON.parse(basket));
    //     }
    // }, [basket]);

    //-----search
    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search);
        search.set("q", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setSearchValue(e.target.value);
        getProducts(history);
        searchh(searchValue);
    };

    function getSearchValue() {
        const search = new URLSearchParams(history.location.search);
        return search.get("q");
    }
    //---------------------------------------
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <Typography
                            variant="h3"
                            noWrap
                            className={classes.title}
                        >
                            <img
                                style={{
                                    width: "70px",
                                }}
                                src={img}
                                alt="logo"
                            />
                            <span></span>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <span>Health Club</span>
                            </Link>
                        </Typography>

                        <IconButton color="inherit">
                            <Link to="/basket" style={{ color: "inherit" }}>
                                <Badge
                                    badgeContent={basketLength}
                                    color="secondary"
                                >
                                    <AddShoppingCartIcon />
                                </Badge>
                            </Link>
                        </IconButton>
                        <Link to="/favorite" style={{ color: "inherit" }}>
                            <Badge
                                badgeContent={favoriteLength} //--изменяем цвет
                                color="secondary"
                            >
                                <IconButton>
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Badge>
                        </Link>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ "aria-label": "search" }}
                                onChange={handleValue}
                                value={searchValue}
                            />
                        </div>
                        {currentUser ? (
                            <Link
                                to="/signup"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    onClick={logout}
                                    style={{ color: "inherit" }}
                                >
                                    Logout
                                </Button>
                            </Link>
                        ) : (
                            <Link
                                to="/signup"
                                style={{ textDecoration: "none" }}
                            >
                                <Button style={{ color: "inherit" }}>
                                    Login
                                </Button>
                            </Link>
                        )}

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "rtl" ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItemIcon>
                            <div className="Icons">
                                <div className="Icons__item">
                                    <Link
                                        to="/"
                                        style={{
                                            fontSize: "24px",
                                            paddingTop: "20px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {" "}
                                        <HomeIcon />
                                        <em> Home</em>
                                    </Link>
                                </div>
                                _______________________________
                                <div className="Icons__item">
                                    <Link
                                        to="/shop"
                                        style={{
                                            fontSize: "24px",
                                            paddingTop: "20px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {" "}
                                        <AddLocationIcon />
                                        <em>News for products </em>
                                    </Link>
                                </div>
                                _____________________________
                                <div className="Icons__item">
                                    <Link
                                        to="/all"
                                        style={{
                                            fontSize: "24px",
                                            paddingTop: "20px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <ShoppingCartOutlinedIcon />
                                        <em>Shop </em>
                                    </Link>
                                </div>
                                ___________________________________
                                <div className="Icons__item">
                                    <Link
                                        to="/loc"
                                        style={{
                                            fontSize: "24px",
                                            paddingTop: "20px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {" "}
                                        <AddLocationIcon />
                                        <em> Contacts & Location </em>
                                    </Link>
                                </div>
                                ___________________________________
                                {currentUser ? (
                                    <div className="Icons__item">
                                        <Link
                                            to="/update"
                                            style={{
                                                fontSize: "24px",
                                                paddingTop: "20px",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {" "}
                                            <AllInclusiveIcon />
                                            <em>Update </em>
                                        </Link>
                                    </div>
                                ) : null}
                            </div>
                        </ListItemIcon>
                    </List>
                    <Divider />
                </Drawer>
            </div>

            <div className="title_text">
                <h2 className="marquee">
                    <span>
                        <em> your time has come !!! </em>{" "}
                    </span>{" "}
                </h2>
            </div>
        </>
    );
}
