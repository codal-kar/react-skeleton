import React from 'react';
import { LoaderWrapper } from '../../routes_style';
// import loader from "../../assets/images/spinner.gif";
import Loader from "react-loader-spinner";

function LoaderMain(props) {

    return (
        <LoaderWrapper className="loader2">
            <Loader
                className="global-loader"
                type="Bars"
                color="#5160CC"
                height={80}
                width={80}></Loader>
        </LoaderWrapper>
    );
}

export default LoaderMain;

