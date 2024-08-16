import React from "react";
import classes from "./Welcome.module.css";

const Welcome = () => {

    return (
        <div className={classes['welcome-container']}>
            <div className={classes['inner-container']}>
                <h2 className={classes['header']}>User guide menue.</h2>
                <div className={classes['list-iteam']}>
                    <ol>
                        <li>
                            <p>First of all click on the <u><i>Generate Array</i></u> button to generate new array.</p>
                        </li>
                        <li>
                            <p>Then click on the <u><i>Selcect Sorting  Algorithm </i></u> button to start Sorting with the selected sorting algorithm.</p>
                        </li>
                        <li>
                            <p>Click on the <u><i>Reset Array</i></u> to reset the array after sorting is done.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Welcome;