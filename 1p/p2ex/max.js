function max(arr) {
    var tempV = 0,
        contador = 1;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > tempV) {
            tempV = arr[i];
        }
    }

    console.log(tempV);

}
var arr = [4, 8, 34, 3, 4, 676, 66, 87, 1];
max(arr)
