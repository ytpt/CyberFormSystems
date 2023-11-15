import React from "react";
import {constants} from "~constants/constants";
import BackBtn from "~shared/ui/home-button/HomeBtn";

export const Page404 = () => {
    return (
        <>
            <h1>{constants.notFoundTitle}</h1>
            <p>{constants.notFoundText}</p>
            <BackBtn content={constants.home}/>
        </>
    )
}