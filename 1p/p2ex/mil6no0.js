var aleatorio;
var array=[];
for(let i=0;i<999;i++){
    aleatorio=parseInt( Math.random()*(6-1)+1);

    if(aleatorio===0){
        console.log('Este es cero:'+aleatorio+' En la posicion '+i);
        array[i] = aleatorio;

    }

}
