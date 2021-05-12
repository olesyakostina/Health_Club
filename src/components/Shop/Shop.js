import React from "react";
import "./Shop.css";
import Truncate from "react-truncate";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Shop = () => {
    AOS.init();
    const classes = useStyles();
    return (
        <>
            <div className="Hero">
                <div className="Hero_img">
                    <img
                        src="https://cdn1.assets.hollandandbarrett.com/static/bd070c52bb90002e8a680e011b85679a/6a96f/start.png"
                        alt="foto"
                    />
                </div>
            </div>

            <div className="Hero_text">
                <div className="Hero_text_item">
                    <h2>
                        What are the best sports supplements to make part of
                        your regular routine?
                    </h2>
                </div>
                <div className="Hero_text_elem">
                    <p data-aos="fade-down" data-aos-duration="1000">
                        Sports supplements are your secret weapons when it comes
                        to getting the most out of your workouts.
                    </p>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        From more energy to enhancing exercise performance – the
                        right nutrition supplements are invaluable if you
                        regularly exercise.
                    </p>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        You might be wondering, what sports supplements actually
                        work?
                    </p>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        {" "}
                        Below, are our recommendations for a sports and fitness
                        supplements routine which will help you train at your
                        optimum level.
                    </p>
                    <div className="Hero_text_item">
                        <h2> Pre-Workout</h2>
                    </div>
                    <div className="Hero_text_elem">
                        <p data-aos="fade-down" data-aos-duration="1000">
                            When you’re pushing hard at the gym or training for
                            an event and want an energy boost before your next
                            workout, it’s tough to know where to start. That’s
                            where pre-workout supplements could help...
                        </p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__fixed">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                style={{ height: "300px" }}
                                className={classes.media}
                                image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/046053_A.jpg"
                                title="Everyday Low Price "
                            />
                            <CardContent>
                                <Typography
                                    style={{}}
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    PE Nutrition Performance Pre-Workout
                                    Strawberry & Watermelon 440g
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
                                        <Truncate
                                            lines={3}
                                            ellipsis={
                                                <span>
                                                    ...
                                                    <br />
                                                </span>
                                            }
                                        >
                                            Vitamins are important, and some of
                                            them become even more useful when it
                                            comes to working out. Niacin,
                                            vitamin C, vitamin B6 and vitamin
                                            B12 contribute to a normal
                                            energy-yielding metabolism (how your
                                            body uses the energy you consume
                                            from drinks and food), as well as
                                            the reduction of tiredness and
                                            fatigue
                                        </Truncate>
                                    </Truncate>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions></CardActions>
                    </Card>
                </div>
                <div className="card__fixed">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                style={{ height: "300px" }}
                                className={classes.media}
                                image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/041863_A.jpg"
                                title="New Low Price"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    Sparta Nutrition Pre-Workout Cherry ICEE
                                    264g
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
                                        Sparta Nutrition Pre-Workout is a
                                        delicious ultra-premium energy formula
                                        designed to elevate your performance.
                                        This fully-loaded formula was built to
                                        simply deliver an amazing pre-workout
                                        experience by supporting energy and
                                        focus to help bridge the gap between you
                                        and peak performance.
                                    </Truncate>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions></CardActions>
                    </Card>
                </div>
                <div className="card__fixed">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                style={{ height: "300px" }}
                                className={classes.media}
                                image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/050282_A.jpg"
                                title="Great Savings"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    USN 3XT Pump 3-In-1 Pre-Workout Cherry 840g
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
                                        3XT is USN’s 3 in 1 pre-workout!
                                        Caffeine increases long lasting energy,
                                        improves mental clarity and focus,
                                        whilst Vitamin B6 & B12 contribute to
                                        energy, carbohydrate and protein
                                        metabolism, as well as supporting immune
                                        function.
                                    </Truncate>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions></CardActions>
                    </Card>
                </div>
            </div>

            <div className="hero__btn">
                <Link to="/all">
                    <button className="hero__btn_click">
                        Show all Pre-workout supplements{" "}
                    </button>
                </Link>
            </div>

            <div className="Hero_text">
                <div className="Hero_text_item">
                    <h2>Intra-Workout</h2>
                </div>
                <div className="Hero_text_elem">
                    <p data-aos="fade-down" data-aos-duration="1000">
                        Depending on the type of workout you’re doing, you may
                        not need a supplement. Some people choose to just keep
                        hydrated during light workouts.
                    </p>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        You may wish to choose an intra-workout supplement,
                        usually containing ingredients to help replenish what
                        you lose during workouts.
                    </p>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        This can include carbohydrates, required as an energy
                        source for the body, as well as certain amino acids (the
                        building blocks of protein, which are required for
                        muscle development)
                    </p>
                </div>
                <div className="card">
                    <div className="card__fixed">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "300px" }}
                                    className={classes.media}
                                    image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/036622_A.jpg"
                                    title="Great Savings"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        USN BCAA Power Punch Cherry 400g
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
                                            A refreshing BCAA supplement
                                            formulated to support your workouts.
                                            The BCAA Power Punch provides you
                                            with a delicious drink to help fight
                                            fatigue and support your muscle
                                            growth and maintenance.
                                        </Truncate>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </div>
                    <div className="card__fixed">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "300px" }}
                                    className={classes.media}
                                    image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/098125_A.jpg"
                                    title="33% off"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        HIGH5 Zero Citrus 80g
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
                                            ZERO produces a clean-tasting and
                                            highly refreshing drink with zero
                                            sugar and zero calories. The tabs
                                            contain light natural flavours with
                                            no artificial colours or
                                            preservatives. Simply drop a tab
                                            into your re-usable sports bottle
                                            and watch it rapidly dissolve. ZERO
                                            contains Vitamin C and 5
                                            electrolytes, including sodium and
                                            magnesium.
                                        </Truncate>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </div>
                    <div className="card__fixed">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "300px" }}
                                    className={classes.media}
                                    image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/047037_A.jpg"
                                    title="25% off"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Phizz Orange Multivitamin & Hydration
                                        Effervescent 10 Tablets
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
                                            Hydration Amplifier Phizz is a water
                                            multiplier, helping your body
                                            rapidly absorb up to 3 times more
                                            water than simply drinking water
                                            alone.
                                        </Truncate>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </div>
                </div>
                <div className="hero__btn">
                    <Link to="/all">
                        {" "}
                        <button className="hero__btn_click">
                            Show all Intra-workout supplements{" "}
                        </button>
                    </Link>
                </div>
            </div>
            <div className="Hero_text">
                <div className="Hero_text_item">
                    <h2>Post-Workout</h2>
                </div>
                <div className="Hero_text_elem">
                    <p data-aos="fade-down" data-aos-duration="1000">
                        Post workout supplements may contain similar ingredients
                        to intra-workout ingredients as they will focus on
                        replacing the lost nutrients that you may have used up.
                    </p>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        It may be that if you’ve had a light workout or used an
                        intra-workout supplement containing electrolytes and
                        stayed hydrated that you may not require electrolytes
                        post workout, for example, and this should be tailored
                        to your routine.
                    </p>
                    <p data-aos="fade-down" data-aos-duration="1000">
                        Protein is an important nutrient, particularly
                        post-workout due to its contributions to the maintenance
                        and development of muscle mass. Many different nutrition
                        supplements contain protein, including whey and casein
                        varieties.
                    </p>
                </div>
                <div className="card">
                    <div className="card__fixed">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "300px" }}
                                    className={classes.media}
                                    image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/046027_A.jpg"
                                    title="Everyday Low Price "
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        PE Nutrition Simply Whey Chocolate 600g
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
                                            An everyday protein powder with
                                            endless muscle-building potential PE
                                            have designed a simple whey protein
                                            powder that’s full of high-quality
                                            fuel for your body, paired with a
                                            low calorie-count and absolutely no
                                            aspartame. It’s the perfect formula
                                            for people who want a good source of
                                            protein they can turn to every day
                                            to support their muscles. You don’t
                                            need a miracle; protein is enough to
                                            maintain and build those hardworking
                                            muscles!
                                        </Truncate>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </div>
                    <div className="card__fixed">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "300px" }}
                                    className={classes.media}
                                    image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/084294_A.jpg"
                                    title="Great Savings"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        USN Diet Fuel Meal Replacement Shake
                                        Strawberry 1kg
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
                                            USN Diet Fuel Ultralean is a high
                                            fibre and high protein meal
                                            replacement shake formula, which can
                                            be consumed as a convenient yet
                                            nutritious meal on the go.
                                        </Truncate>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </div>
                    <div className="card__fixed">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: "300px" }}
                                    className={classes.media}
                                    image="https://images.hollandandbarrettimages.co.uk/productimages/HB/252/093333_A.jpg"
                                    title="Great Savings"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        PhD Nutrition Diet Whey Protein Powder
                                        Vanilla Crème 1000g
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
                                            PhD Diet Whey Protein Powder is one
                                            of the industry-leading, high
                                            protein, low sugar, diet and
                                            slimming formulas for weight
                                            control. With a wide range of
                                            ingredients used in a variety of
                                            weight loss formulas, PhD diet whey
                                            is ideal for men and women following
                                            a weight management nutritional plan
                                            and looking to lose body fat and
                                            control calorie intake. Incredibly
                                            versatile, mix PhD diet whey powder
                                            with yoghurt to make a delicious
                                            dessert, or combine with porridge
                                            oats or pancake mix for a tasty &
                                            filling breakfast.
                                        </Truncate>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions></CardActions>
                        </Card>
                    </div>
                </div>
                <div className="hero__btn">
                    <Link to="/all">
                        {" "}
                        <button className="hero__btn_click">
                            Show all Post-workout supplements{" "}
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Shop;
