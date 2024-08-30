import React, { useState } from "react";
import classes from "./ControlPanel.module.css";

const ContolPanel = (props) => {
  const [flag, setFlag] = useState(false);
  const [choose, setChoose] = useState("Select Sorting Algorithm.");
  const [length, setlength] = useState();
  const [toggle, settoggle] = useState(false);
  const speed = [0.5, 1, 1.5, 2, 2.5, 3];
  const [currentspeed, setcurrentspeed] = useState(1);
  function handleChange(event) {
    let temp = parseInt(event.target.value, 10);
    if (temp >= 0) setlength(temp);
    else setlength();
  }
  function chooseHandler() {
    setFlag(true);
  }
  function chooseAlgorithmHandler(props) {
    setChoose(props);
  }
  function generateArrayHandler() {
    setChoose("Select Sorting Algorithm.");
    props.generateArray(length);
  }
  function resetArrayHandler() {
    setChoose("Select Sorting Algorithm.");
    props.resetArray(setChoose);
  }
  function mergeSortHandler() {
    chooseAlgorithmHandler("Merge Sort.");
    setFlag(false);
    let array = [...props.arr];
    props.mergeSort(array, 0, array.length - 1);
  }
  function quickSortHandler() {
    chooseAlgorithmHandler("Quick Sort.");
    setFlag(false);
    let array = [...props.arr];
    props.quickSort(array, 0, array.length - 1);
  }
  function heapSortHandler() {
    chooseAlgorithmHandler("Heap Sort.");
    setFlag(false);
    let array = [...props.arr];
    props.heapSort(array);
  }
  function insertionSortHandler() {
    chooseAlgorithmHandler("Insertion Sort.");
    setFlag(false);
    let array = [...props.arr];
    props.insertionSort(array, array.length);
  }
  function bubbleSortHandler() {
    chooseAlgorithmHandler("Bubble Sort.");
    setFlag(false);
    let array = [...props.arr];
    props.bubbleSort(array, array.length);
  }
  function selectionSortHandler() {
    chooseAlgorithmHandler("Selection Sort.");
    setFlag(false);
    let array = [...props.arr];
    props.selectionSort(array, array.length);
  }
  function handleClick() {
    settoggle(!toggle)

  }
  function popUpHandler() {
    setFlag(false);
  }
  if (flag ) {
    return (
      <div className={classes["choose-algorithm"]}>
        <header>Choose Sorting Algorith</header>
        <button onClick={mergeSortHandler}>Merge Sort.</button>
        <button onClick={quickSortHandler}>Quick Sort.</button>
        <button onClick={heapSortHandler}>Heap Sort.</button>
        <button onClick={insertionSortHandler}>Insertion Sort.</button>
        <button onClick={bubbleSortHandler}>Bubble Sort.</button>
        <button onClick={selectionSortHandler}>Selection Sort.</button>
        <button onClick={popUpHandler}>Close.</button>
      </div>
    );
  } else {
    return (
        <div className={classes["control-panel"]}>
          <button onClick={chooseHandler}>{choose}</button>
          <button onClick={generateArrayHandler}>Generate Array.</button>
      
          <label htmlFor="myInput">Enter something:</label>
          <div className={classes["text-panel"]}>
            <input
              type="number"
              placeholder="Enter size of array"
              id="myInput"
              value={length}
              onChange={handleChange}
            />
            <p>You typed: {length}</p>
          </div>
      
          <button onClick={handleClick} className={classes["choose-speed"]}>
            {toggle ? (
               
              
                speed.map((s, index) => (
                <button  key={index} onClick={() => {
                      setcurrentspeed(s);
                       props.updateSpeed(s);
                    }} className={classes["choose-button"]}>
                    {s}
                    </button>
            
                ))
            ) : (
              `${currentspeed}x`
            )}
          </button>
        </div>
      );
      
  }
};

export default ContolPanel;
