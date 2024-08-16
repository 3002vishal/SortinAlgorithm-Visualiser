import React from "react";
import classes from "./Bar.module.css";

const Bar=(props)=>{
     return <div className={classes["bar"]}  style={{height:props.height}}></div>
}

export default Bar;