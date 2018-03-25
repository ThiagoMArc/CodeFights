function adjacentElementsProduct(inputArray) {
    
    let largest_prod = inputArray[0]*inputArray[1];
    let k= 2;
    let i = 1;
    let curr_prod = 0;
    while(i < inputArray.length){
        curr_prod = inputArray[i]*inputArray[k];
        if(curr_prod > largest_prod){
            largest_prod = curr_prod;
        }
        i++;
        k++;
    }
    return largest_prod;

}
