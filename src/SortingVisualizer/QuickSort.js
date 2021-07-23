const animations = [];

export function getQuickSortAnimations(array) {

    console.log(array);
    
    quickSort(array, 0, array.length - 1);

    return animations;

}

function partition(arr, startIndex, endIndex) {
    const pivotVal = arr[endIndex]; // the pivot element
    let index = startIndex;
    // begin iterate and swap
    for (let i = index; i < endIndex; i++) {
        animations.push([-1,i,endIndex]);
        animations.push([-2,i,endIndex]);
        if (arr[i] < pivotVal) {
            animations.push([-1,i,index,arr[index]]);
            animations.push([-2,i,index,arr[index]]);
            animations.push([-2,index,i,arr[i]]);
            animations.push([-2,i,index]);
            [arr[i], arr[index]] = [arr[index], arr[i]];
            index += 1;
        }
    }

    // move `pivotVal` to the middle index and return middle index
    if(index !== endIndex){
        animations.push([-1,index,endIndex,arr[endIndex]]);
        animations.push([-2,index,endIndex,arr[endIndex]]);
        animations.push([-2,endIndex,index,arr[index]]);
        animations.push([-2,index,endIndex]);
        [arr[index], arr[endIndex]] = [arr[endIndex], arr[index]];
    }
    return index;
}
  
function quickSort(arr, startIndex, endIndex) {
    // Base case or terminating case
    if (startIndex >= endIndex) {
        return;
    }

    // Returns midIndex / pivot index
    let midIndex = partition(arr, startIndex, endIndex);

    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, startIndex, midIndex - 1);
    quickSort(arr, midIndex + 1, endIndex);
}
  
//   let arr = [-2, 4, 6, 3, 7, 2];