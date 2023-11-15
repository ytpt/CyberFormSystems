import React from "react";
import LoaderImg from "./assets/loader.gif";
import {constants} from "~constants/constants";

const Loader = () => {
    return (
        <img src={LoaderImg} alt={constants.loading}/>
    )
}

export default Loader;