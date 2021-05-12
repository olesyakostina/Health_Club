import React from "react";

const Map = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144943.9871908483!2d-74.09173051365646!3d40.73830044134914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2skg!4v1620610805069!5m2!1sru!2skg"
                width="1400"
                height="500"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default Map;
