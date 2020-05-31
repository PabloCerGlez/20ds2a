function min(arr) {
    var tempV = 0,
        contador = 1;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > arr[contador]) {
            tempV = arr[contador];
        }
        contador++;
    }

    console.log(tempV);

}
var arr = [4, 8, 34, 3, 4, 676, 66, 87, 1];
min(arr)