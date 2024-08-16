import React, { useState } from "react";
import classes from "./ControlPanel.module.css";

const ContolPanel = (props) => {
    const [flag, setFlag] = useState(false);
    const [choose, setChoose] = useState('Select Sorting Algorithm.');
    function chooseHandler() {
        setFlag(true);
    }
    function chooseAlgorithmHandler(props) {
        setChoose(props);
    }
    function generateArrayHandler() {
        setChoose('Select Sorting Algorithm.');
        props.generateArray(setChoose);
    }
    function resetArrayHandler() {
        setChoose('Select Sorting Algorithm.');
        props.resetArray(setChoose);
    }
    function mergeSortHandler() {
        chooseAlgorithmHandler('Merge Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.mergeSort(array,0,array.length-1);
    }
    function quickSortHandler() {
        chooseAlgorithmHandler('Quick Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.quickSort(array,0,array.length);
    }
    // function heapSortHandler() {
    //     chooseAlgorithmHandler('Heap Sort.');
    //     setFlag(false);
    // }
    function insertionSortHandler() {
        chooseAlgorithmHandler('Insertion Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.insertionSort(array,array.length);
    }
    function bubbleSortHandler() {
        chooseAlgorithmHandler('Bubble Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.bubbleSort(array,array.length);
    }
    function selectionSortHandler() {

        chooseAlgorithmHandler('Selection Sort.');
        setFlag(false);
        let array=[...props.arr];
        props.selectionSort(array,array.length);

    }
    function popUpHandler(){
        setFlag(false);
    }
    if (flag) {
        return (
            <div className={classes["choose-algorithm"]} >
                <header>Choose Sorting Algorith</header>
                <button onClick={mergeSortHandler}>Merge Sort.</button>
                {/* <button onClick={quickSortHandler}>Quick Sort.</button> */}
                {/* <button onClick={heapSortHandler}>Heap Sort.</button> */}
                <button onClick={insertionSortHandler}>Insertion Sort.</button>
                <button onClick={bubbleSortHandler}>Bubble Sort.</button>
                <button onClick={selectionSortHandler}>Selection Sort.</button>
                <button onClick={popUpHandler}>Close.</button>
            </div>
        );
    }
    else {
        return (
            <div className={classes["control-panel"]}>
                <button onClick={chooseHandler} onChange={chooseAlgorithmHandler}>{choose}</button>
                <button onClick={generateArrayHandler}>Generate Array.</button>
                {/* <button onClick={resetArrayHandler}>Reset Array.</button> */}
            </div>
        );
    }

}

export default ContolPanel;