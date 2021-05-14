import React, { useEffect, useContext } from "react";
import { productContext } from "../Context/ProductsContext";
const Page = () => {
    const { getLength1 } = useContext(productContext);
    useEffect(() => {
        getLength1();
    }, []);

    return <div>thanks</div>;
};

export default Page;
