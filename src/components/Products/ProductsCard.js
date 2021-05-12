import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import { productContext } from "../Context/ProductsContext";
import Truncate from "react-truncate";
import "./ProductsCard.css";
import { useHistory } from "react-router";
import Rating from "@material-ui/lab/Rating";
import { useAuth } from "../Context/AuthContext";
import { adminUID } from "../helpers/constants";
// import JSON_API from "../helpers/constants";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ProductsCard = (props) => {
    const { currentUser } = useAuth();
    const [user, setUser] = useState(false);
    const [value, setValue] = React.useState(2);
    const history = useHistory();
    const classes = useStyles();
    const {
        deleteCard,
        addProductToBasket,
        getProducts,
        checkProductInBasket,
        addProductToFavorite,
        checkProductInFavorite,
    } = useContext(productContext);

    useEffect(() => {
        getProducts(props.history);
        if (currentUser?.uid === adminUID) {
            console.log(currentUser);
            setUser(true);
        }
    }, []);

    return (
        <Card className={classes.root} id="Card">
            <CardActionArea
                onClick={() => history.replace(`/products/${props.item.id}`)}
            >
                <CardMedia
                    id="productCard"
                    className={classes.media}
                    image={props.item.image}
                    title={props.item.title}
                />
                <Rating
                    size="large"
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <Truncate
                            lines={3}
                            ellipsis={
                                <span>
                                    ...
                                    <br />
                                </span>
                            }
                        >
                            {props.item.description}
                        </Truncate>
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        <Truncate
                            lines={3}
                            ellipsis={
                                <span>
                                    ...
                                    <br />
                                </span>
                            }
                        >
                            {props.item.ingredients}
                        </Truncate>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    PRICE :
                </Button>
                <Button size="small" color="primary">
                    {props.item.price}
                </Button>
            </CardActions>
            <IconButton
                onClick={() => addProductToFavorite(props.item)}
                color={
                    checkProductInFavorite(props.item.id)
                        ? "secondary"
                        : "primary"
                }
            >
                <FavoriteIcon />
            </IconButton>

            {user ? (
                <IconButton>
                    <DeleteIcon
                        onClick={(e) => {
                            deleteCard(props.item.id, props.history);
                        }}
                    />
                </IconButton>
            ) : null}

            <IconButton
                onClick={() => addProductToBasket(props.item)}
                color={
                    checkProductInBasket(props.item.id)
                        ? "secondary"
                        : "primary"
                }
            >
                <ShoppingCartIcon />
            </IconButton>
        </Card>
    );
};
export default ProductsCard;
