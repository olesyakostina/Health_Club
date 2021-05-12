import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import "./TrainerInfo.css";
import img from "../assets/img/2.jpg";
import img3 from "../assets/img/img3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

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

export default function TrainerInfo() {
    AOS.init();
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <div className="info_flex">
                <div className="info">
                    <div className="info__title">
                        <h2 data-aos="fade-down" data-aos-duration="1000">
                            MAKE REAL <br></br>RESULTS <br></br>HAPPEN
                        </h2>
                    </div>
                </div>
                <div className="accordion">
                    <div
                        className="img__item"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <img className="imd__foto" src={img} alt="exersize" />
                    </div>
                    <div className="accordion__item">
                        <Accordion
                            style={{
                                backgroundColor: "#807d92",
                            }}
                            square
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                        >
                            <AccordionSummary
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                            >
                                <Typography
                                    style={{
                                        fontSize: "40px",
                                    }}
                                >
                                    We find your partner.
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    It all starts with you and your Equinox
                                    trainer. For over 25 years, we’ve paired
                                    hundreds of thousands of members with expert
                                    trainers that know how to design a program
                                    to support your unique goals, passions, and
                                    personality.
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
                                <Typography style={{ fontSize: "40px" }}>
                                    We make your plan.
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Real metrics lead to real results. Our
                                    trainers combine data from your Equifit, our
                                    1-hour fitness assessment, with information
                                    about your lifestyle to build a program that
                                    is specific to you and your goals.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            style={{
                                backgroundColor: "#807d92",
                            }}
                            square
                            expanded={expanded === "panel3"}
                            onChange={handleChange("panel3")}
                        >
                            <AccordionSummary
                                aria-controls="panel3d-content"
                                id="panel3d-header"
                            >
                                <Typography style={{ fontSize: "40px" }}>
                                    We start the work.
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse malesuada lacus
                                    ex, sit amet blandit leo lobortis eget.
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
                                <Typography style={{ fontSize: "40px" }}>
                                    We start the work.
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Results are not a nice-to-have. They’re
                                    everything. And our trainers thoughtfully
                                    increase the challenge of your training to
                                    ensure you never reach a plateau and are
                                    always making progress.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            style={{
                                backgroundColor: "#807d92",
                            }}
                            square
                            expanded={expanded === "panel3"}
                            onChange={handleChange("panel3")}
                        >
                            <AccordionSummary
                                aria-controls="panel3d-content"
                                id="panel3d-header"
                            >
                                <Typography style={{ fontSize: "40px" }}>
                                    Take our training anywhere.
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Get results wherever, whenever. Your
                                    personal trainer will create a custom plan
                                    and guide you through in-club sessions using
                                    touchless adjustments and workouts at home
                                    with our Virtual Personal Training by
                                    Equinox platform. In the club and out of the
                                    club, you'll keep getting results however
                                    you train.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__item">
                    <div className="card__item_text">
                        <h3>PERSONAL TRAINING AT EQUINOX!</h3>
                        <p
                            className="card_p"
                            className="card-text"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            You and your dedicated personal trainer will create
                            a plan that's tailored to your goals—and together,
                            you'll work to unlock the results you want. At every
                            step of the way, you'll be driven by a passionate
                            trainer using the latest science during in-club
                            sessions and at home with Virtual Personal Training.
                        </p>
                        <div className="card-btn">
                            {/* <button className="btn">SHOP NOW</button> */}
                        </div>
                    </div>
                    <div className="card__item_img_second">
                        <img
                            style={{ height: "500px" }}
                            src={img3}
                            alt="exersize"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
