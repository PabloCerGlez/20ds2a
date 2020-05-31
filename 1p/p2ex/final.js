
function radiusOfCircle(a,b,c){


    let r,s;
    s=1/2*(a+b+c);
    r=(s-a)*(s-b)*(s-c);
    r=s*r
r=Math.sqrt(r)/s
 

    return r;
}

console.log(radiusOfCircle(5,6,7));
