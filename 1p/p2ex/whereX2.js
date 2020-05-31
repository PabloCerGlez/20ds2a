let anArray=[2,3,4,5,6,3];
let x=3, contador=0,semaforo=false, posicion=0;
for(let k of anArray){
    
    if(x===k){
	semaforo=true;


	contador++;
console.log('En la posicion'+posicion);
    }
posicion++;
}

if(semaforo){
console.log('Fueron encontrados: '+contador);
}else{
console.log('No lo hayo');

}

