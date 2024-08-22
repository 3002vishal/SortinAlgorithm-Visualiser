// App.js

import React, { useState } from "react";
import "./App.css";
import SortingAlgorithmVisulisor from "./SortingAlgorithmVisulisor/SortingAlgorithmVisulisor";
import MainHeader from "./MainHeader/MainHeader";
import ContolPanel from "./ContolPanel/ControlPanel";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function App() {
  const [array, setArray] = useState([]);

  function updateArray(props) {
    setArray([...props]);
  }

  function generateArray(n) {
    const newArray = Array.from(
      { length: n },
      () => Math.floor(Math.random() * 10000) + 1
    );
    setArray(newArray);
  }

  function resetArray() {
    setArray([]);
  }

  async function selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }

      swap(arr, min_idx, i);
      updateArray(arr);
      await sleep(10);
    }
  }

  async function bubbleSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          updateArray(arr);
          await sleep(10);
        }
      }
    }
  }

  async function insertionSort(arr, n) {
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        updateArray(arr);
        await sleep(10);
        j--;
      }
      arr[j + 1] = key;
      updateArray(arr);
      await sleep(10);
    }
  }

  async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    await quickSort(arr, start, index - 1);
    await quickSort(arr, index + 1, end);
}

async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            updateArray(arr);
            await sleep(1);
            pivotIndex++;
        }
    }

    swap(arr, pivotIndex, end);
    updateArray(arr);
    await sleep(1);
    
    return pivotIndex;
}


  async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
      //await sleep(10);
      left[i] = ele[low + i];
    }
    for (let i = 0; i < n2; i++) {
      // await sleep(10);
      right[i] = ele[mid + 1 + i];
    }
    //await sleep(10);
    let i = 0,
      j = 0,
      k = low;
    while (i < n1 && j < n2) {
      if (parseInt(left[i]) <= parseInt(right[j])) {
        ele[k] = left[i];
        updateArray(ele);
        await sleep(0.1);
        i++;
        k++;
      } else {
        ele[k] = right[j];
        updateArray(ele);
        await sleep(0.1);
        j++;
        k++;
      }
    }
    while (i < n1) {
      ele[k] = left[i];

      updateArray(ele);
      await sleep(0.1);
      i++;
      k++;
    }
    while (j < n2) {
      ele[k] = right[j];
      updateArray(ele);
      await sleep(0.1);
      j++;
      k++;
    }
  }
  async function heapSort( ele)
  {
    let n= ele.length;
    for(let i=(n/2) -1; i>=0 ; i--)
    {

      await heapify(ele, i, n)
    }
    for(let i=n-1;i>=0;i--)
    {
      swap(ele, i, 0)
      updateArray(ele)
      await sleep(10)
      await heapify(ele,0, i)
      

    }
  }
  async function heapify(ele, curr, n)
  {
    let largest = curr; 
    let left = 2*curr + 1; 
    let right = 2*curr +2; 
    if(left<n && ele[left]>ele[largest] )
      largest= left
    if(right<n && ele[right]>ele[largest])
      largest=right
    if(largest!=curr)
    {
      swap(ele, largest, curr)
      updateArray(ele)

      await sleep(10)
       await heapify(ele, largest, n)
    }

  }

  async function mergeSort(ele, l, r) {
    if (l >= r) {
      return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return (
    <React.Fragment>
      <MainHeader />
      <ContolPanel
        generateArray={generateArray}
        resetArray={resetArray}
        selectionSort={selectionSort}
        bubbleSort={bubbleSort}
        insertionSort={insertionSort}
        quickSort={quickSort}
        heapSort={heapSort}
        mergeSort={mergeSort}
        arr={array}
      />
      <SortingAlgorithmVisulisor array={array} />
    </React.Fragment>
  );
}

export default App;
