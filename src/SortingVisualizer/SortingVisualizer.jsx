import React from 'react';
import {getBubbleSortAnimations} from './BubbleSort.js';
import {getMergeSortAnimations} from './MergeSort.js';
import { getSelectionSortAnimations} from './SelectionSort.js';
import { getQuickSortAnimations} from './QuickSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 100;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = Math.floor(window.innerWidth/ 54);

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(25, window.innerHeight/1.5));
    }
    this.setState({array});
    // location.reload();
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          // document.getElementById('value-div').innerHTML=`${newHeight}`;
          arrayBars[barOneIdx].innerHTML=`${newHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      // console.log(arrayBars);
      // const isColorChange = i % 4 < 2;

      // console.log(W);
      if (animations[i].length < 4) {
        // const[W,x,y]=animations[i];
        const [whatTODo,barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        // const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        if(whatTODo === -1){
          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          // isPrimary=1-isPrimary;
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          // isPrimary=1-isPrimary;
        }
      } else {
        const [whatTODo,barOneIdx,barTwoIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        if(whatTODo === -2){
        setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
            arrayBars[barOneIdx].innerHTML=`${newHeight}`;
          }, i * ANIMATION_SPEED_MS);
        }
        else{
          setTimeout(()=>{
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          },i * ANIMATION_SPEED_MS);
        }
      }
    }
  }

  selectionSort() {

    // let isPrimary=1;
    const animations = getSelectionSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      // console.log(arrayBars);
      // const isColorChange = i % 4 < 2;

      // console.log(W);
      if (animations[i].length < 4) {
        // const[W,x,y]=animations[i];
        const [whatTODo,barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        // const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        if(whatTODo === -1){
          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          // isPrimary=1-isPrimary;
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          // isPrimary=1-isPrimary;
        }
      } else {
        const [whatTODo,barOneIdx,barTwoIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        if(whatTODo === -2){
        setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
            arrayBars[barOneIdx].innerHTML=`${newHeight}`;
          }, i * ANIMATION_SPEED_MS);
        }
        else{
          setTimeout(()=>{
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          },i * ANIMATION_SPEED_MS);
        }
      }
    }

  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      // console.log(arrayBars);
      // const isColorChange = i % 4 < 2;

      // console.log(W);
      if (animations[i].length < 4) {
        // const[W,x,y]=animations[i];
        const [whatTODo,barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        // const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        if(whatTODo === -1){
          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          // isPrimary=1-isPrimary;
        }
        else{
          setTimeout(() => {
            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          // isPrimary=1-isPrimary;
        }
      } else {
        const [whatTODo,barOneIdx,barTwoIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        if(whatTODo === -2){
        setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
            arrayBars[barOneIdx].innerHTML=`${newHeight}`;
          }, i * ANIMATION_SPEED_MS);
        }
        else{
          setTimeout(()=>{
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          },i * ANIMATION_SPEED_MS);
        }
      }
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            id='value-div'
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}>{value}</div>
        ))}
      </div>
      <div className='array-buttons'>
        <button className="btn btn-sm btn-outline-info" onClick={() => this.resetArray()}>Generate New Array</button>
        <button className="btn btn-sm btn-outline-info" onClick={() => this.mergeSort()}>Merge Sort</button>
        <button className="btn btn-sm btn-outline-info" onClick={() => this.quickSort()}>Quick Sort</button>
        <button className="btn btn-sm btn-outline-info" onClick={() => this.selectionSort()}>Selection Sort</button>
        <button className="btn btn-sm btn-outline-info" onClick={() => this.bubbleSort()}>Bubble Sort</button>
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}