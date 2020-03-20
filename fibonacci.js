function fibo(nm) {
    var x = 1,
        y = 0,
        tmp;
    while (nm >= 0) {
        tmp = x;
        x = x + y;
        y = tmp;
        nm--;
        // console.log(y);
    }
    return y;
}

console.log(fibo(10));