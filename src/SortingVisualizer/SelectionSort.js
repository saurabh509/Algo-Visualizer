export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    
    let n = array.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            animations.push([-1,i,j])
            animations.push([-2,i,j])
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min !== i) {
             // Swapping the elements
             animations.push([-1,i,min,array[min]]);
             animations.push([-2,i,min,array[min]]);
             animations.push([-2,min,i,array[i]]);
             animations.push([-2,i,min]);
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }

    return animations;
}