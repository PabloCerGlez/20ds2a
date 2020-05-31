function whatDoesItDo(a, b){
    let t = a
    a=b;
    b=t;

}

let a = 3,b = 7;

whatDoesItDo(a,b);

console.log(a,b);