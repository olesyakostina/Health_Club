import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__item">
                <div className="footer__item_info">
                    <h3 className="footer__item_info_text">
                        All Rights reserved.{" "}
                    </h3>
                    <p className="footer__item_info_p">
                        {" "}
                        All elements of thecontent of this web site, including
                        design, software, text, drawings, graphsand other
                        information or items that are subject to copyright under
                        the Lawof Copyright and related rights are property of
                        Five Star Investments LtdTM.{" "}
                    </p>
                    <p className="footer__item_info_p">
                        © 2021 Moroccan National Work out Office - All rights
                        reserved.
                    </p>
                </div>
                <div className="footer__item_info__item ">
                    <div className="icons">
                        <FacebookIcon fontSize="large" />
                        <TwitterIcon fontSize="large" />
                        <YouTubeIcon fontSize="large" />
                        <PinterestIcon fontSize="large" />
                        <InstagramIcon fontSize="large" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
