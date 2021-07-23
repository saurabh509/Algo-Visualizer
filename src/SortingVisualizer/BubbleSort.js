export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    
    for(let i = 0; i < array.length; i++){
     
        // Last i elements are already in place  
        for(let j = 0; j < ( array.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration

          if(array[j]<=array[j+1]){
            animations.push([-1,j, j+1]);
            animations.push([-2,j, j+1]);
            // animations.push([j,array[j]]);
            // animations.push([j+1,array[j+1]]);
          }

          if(array[j] > array[j+1]){
            animations.push([-1,j, j+1]);
            animations.push([-2,j, j+1]);
            // If the condition is true then swap them
            animations.push([-1,j+1,j,array[j]]);
            animations.push([-2,j,j+1,array[j+1]]);
            animations.push([-2,j+1,j,array[j]]);
            animations.push([-2,j,j+1]);
            var temp = array[j];
            array[j] = array[j + 1];
            array[j+1] = temp;

          }
        }
      }

    return animations;
}