
function factorial(n){



    let f=1;
for(let i=1;i<=n;i++){

f=f*i;
  
}
  return f;
}


function permutacion(n,r)
{

    if(n==0){
	return 1;

    }else{

  return f=factorial(n)/factorial(n-r);
    }
  

}
console.log(permutacion(8,5));
