import React from "react";
import Loader from "react-loader-spinner";

const TableLoader = (props) => {
    return (
        <Loader
            className={props.className}
            type="Bars"
            color="#5160CC"
            height={40}
            width={40}></Loader>
    )
}


export default TableLoader