function firstDuplicate(arr) {
    let i;
    for(i=0; i < arr.length; i++){
        if((1/arr[Math.abs(arr[i])-1]) > 0){
            arr[Math.abs(arr[i])-1] = -arr[Math.abs(arr[i])-1];
        }
        else{
            return Math.abs(arr[i]);
        }
    }
    return -1;
  
}