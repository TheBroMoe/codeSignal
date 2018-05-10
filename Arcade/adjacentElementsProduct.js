function adjacentElementsProduct(inputArray) {

var maxProduct = inputArray[0] * inputArray[1];

    for(var i=0;i<inputArray.length; i++){
        if(inputArray[i] * inputArray[i+1] >= maxProduct){
            maxProduct = inputArray[i] * inputArray[i+1];
        }
    }
    return maxProduct;
}