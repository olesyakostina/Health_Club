import React from "react";
import "./Location.css";
import Map from "../Map/Map";
import AOS from "aos";
import "aos/dist/aos.css";

const Location = () => {
    AOS.init();
    return (
        <>
            <div className="wrapper">
                <div className="items">
                    <div className="items__container">
                        <div className="items__body">
                            <div className="item">
                                <div className="item_video">
                                    <iframe
                                        src="https://www.youtube.com/embed/-H5n-p6m6ek"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="item_text">
                                    Welcome to the GYM !!!
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_video">
                                    <iframe
                                        src="https://www.youtube.com/embed/UlDs745dVlg"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="item_text">
                                    Welcome to the GYM !!!
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_video">
                                    <iframe
                                        src="https://www.youtube.com/embed/A4lbCx8Ise8"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="item_text">
                                    Welcome to the GYM !!!
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_video">
                                    <iframe
                                        src="https://www.youtube.com/embed/9uQToEjjGhk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="item_text">Health food</div>
                            </div>

                            <div className="item">
                                <div className="item_video">
                                    <iframe
                                        src="https://www.youtube.com/embed/r8A_BjkRvgk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="item_text">Health food</div>
                            </div>
                            <div className="item">
                                <div className="item_video">
                                    <iframe
                                        src="https://www.youtube.com/embed/SRuqVqt5dBg"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="item_text">Health food</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Contact">
                <div className="contact__info">
                    <div
                        className="contact__title"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        Contact us
                    </div>
                    <div className="contact__title_info">
                        <ul className="contact__title_info_ul">
                            <li data-aos="fade-down" data-aos-duration="1000">
                                {" "}
                                EMAIL US
                            </li>
                            <li data-aos="fade-down" data-aos-duration="2000">
                                Concierge@Equinox.com
                            </li>
                            <li data-aos="fade-down" data-aos-duration="3000">
                                CALL US
                            </li>
                            <li data-aos="fade-down" data-aos-duration="4000">
                                866-332-6549
                            </li>
                            <li data-aos="fade-down" data-aos-duration="5000">
                                TEXT WITH US
                            </li>
                            <li data-aos="fade-down" data-aos-duration="1000">
                                206-278-9904 Monday through Friday, 8am to 8pm
                                EST
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Map />
        </>
    );
};

export default Location;
