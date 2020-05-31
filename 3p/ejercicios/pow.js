function pow(b, p) {


    let resultado = 1;
    for (let i = 1; i <= p; i++) {

        resultado = resultado * b;

    }
    return resultado;
}

console.log(pow(2, 3))