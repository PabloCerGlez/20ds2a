let anArray=[2,3,4,5,6];
let x=3, contador=0,semaforo=false;
for(let k of anArray){
    
    if(x===k){
	semaforo=true;

	break;
    }    
}

if(semaforo){
console.log('Si lo hayo);
}else{
console.log('No lo hayo');

}
